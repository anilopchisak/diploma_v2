import {
    COMP_SEARCH_ROUTE,
    COMPARE_ROUTE,
    FAVS_ROUTE,
    HIST_ROUTE,
    IL_CHECK_ROUTE, LOGIN_ROUTE,
    PROFILE_ROUTE, REG_ROUTE,
    SETTINGS_ROUTE
} from "./utils/consts";

import IngredientListChecker from './pages/IngredientListChecker'
import ComponentSearch from "./pages/ComponentSearch/ComponentSearch";
import Comparison from "./pages/Comparison";
import RegAuth from "./pages/RegAuth/RegAuth";
import Profile from "./pages/ProfilePage/Profile";

export const authRoutes = [
    {
        path: PROFILE_ROUTE,
        element: <Profile/>,
        title: 'Профиль'
    },
    {
        path: SETTINGS_ROUTE,
        element: <Profile/>,
        title: 'Настройки'
    },
    {
        path: FAVS_ROUTE,
        element: <Profile/>,
        title: 'Избранное'
    },
    {
        path: HIST_ROUTE,
        element: <Profile/>,
        title: 'История поиска'
    },
]

export const publicRoutes = [
    {
        path: IL_CHECK_ROUTE,
        element: <IngredientListChecker/>,
        title: 'Анализ состава'
    },
    {
        path: COMP_SEARCH_ROUTE,
        element: <ComponentSearch/>,
        title: 'Поиск компонента'
    },
    {
        path: COMPARE_ROUTE,
        element: <Comparison/>,
        title: 'Сравнение составов'
    },
    {
        path: LOGIN_ROUTE,
        element: <RegAuth/>,
        title: 'Войти'
    },
    {
        path: REG_ROUTE,
        element: <RegAuth/>,
        title: 'Зарегистрироваться'
    },
]
