import {
    COMP_SEARCH_ROUTE,
    COMPARE_ROUTE,
    FAVS_ROUTE,
    HIST_ROUTE,
    IL_CHECK_ROUTE, LOGIN_ROUTE,
    PROFILE_ROUTE, REG_ROUTE,
    SETTINGS_ROUTE, EMAIL_CONFIRM_ROUTE, INGR_CARD_ROUTE, ANALYSIS_ROUTE
} from "./utils/consts";

import IngredientListChecker from './pages/IngredientListChecker'
import ComponentSearch from "./pages/ComponentSearch/ComponentSearch";
import Comparison from "./pages/Comparison";
import RegAuth from "./pages/RegAuth/RegAuth";
import Profile from "./pages/ProfilePage/Profile";
import EmailConfirm from "./pages/EmailConfim/EmailConfirm";
import IngredientCard from "./pages/IngredientCard/IngredientCard";
import AnalysisPage from "./pages/AnalysisPage/AnalysisPage";

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
    {
        path: INGR_CARD_ROUTE + ':ingr_name',
        element: <IngredientCard/>,
        title: 'Ингредиент'
    },
    {
        path: ANALYSIS_ROUTE,
        element: <AnalysisPage/>,
        title: 'Анализ состава'
    },
    {
        path: EMAIL_CONFIRM_ROUTE,
        element: <EmailConfirm/>,
        title: 'Подтверждение email'
    },
]
