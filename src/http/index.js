import axios from "axios";

// instance for requests without auth
const $host = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}/api/skintellect`
});

const $authHost = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}/api/skintellect`
});

const authInterceptor = config => {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
    return config;
}

const logoutInterceptor = config => {
    return config;
}

const errorInterceptor = async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && error.config && !error.config._isRetry) {
        originalRequest._isRetry = true;
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/refresh`, {withCredentials: true})
            localStorage.setItem('token', response.accessToken);
            return $authHost.request(originalRequest);
        } catch (e) {
            console.log('НЕ АВТОРИЗОВАН')
        }
    }
    throw error;
}

$authHost.interceptors.request.use(authInterceptor);
$authHost.interceptors.response.use(logoutInterceptor, errorInterceptor);

export{
    $host,
    $authHost
}