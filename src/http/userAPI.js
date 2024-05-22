import {$authHost, $host} from "./index";
import {jwtDecode} from "jwt-decode";

export const registration = async (username, email, password1, password2) => {
    const {data} = await $host.post('http://localhost:8000/users/register/', {username, email, password1, password2});
    // localStorage.setItem('token', data.access);
    return data;
}
export const login = async (username, email, password) => {
    const {data} = await $host.post('http://localhost:8000/users/login/', {username, email, password});
    localStorage.setItem('token', data.access);
    return data;
}
// export const login = async (login, password) => {
//     const {data} = await $host.post('api/user/login', {login, password});
//     localStorage.setItem('token', data.token);
//     return data;
// }
export const logout = async () => {
    await $host.post('http://localhost:8000/users/logout/');
    localStorage.removeItem('token');
    // return data; //???????????????
}
export const check = async () => {
    const {data} = await $authHost.get('http://localhost:8000/users/auth/');
    localStorage.setItem('token', data.access);
    return jwtDecode(data.token);
}

export const fetchFavs = async (option) => {
    const {data} = await $authHost.get('http://localhost:8000/profile/' + option);
    console.log(data);
    return data;
}

export const fetchHistory = async (option) => {
    const {data} = await $authHost.get('http://localhost:8000/profile/' + option);
    console.log(data);
    return data;
}