import React, {useContext} from 'react';
import {Routes, Route} from 'react-router-dom'
import {authRoutes, publicRoutes} from "../routes";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import IngredientListChecker from "../pages/IngredientListChecker";

const AppRouter = observer(() => {
    const {user} = useContext(Context)
    return(
        <Routes>
            // exact (ключ) - путь должен точно совпадать
            {user.isAuth && authRoutes.map((a) =>
                <Route key={a.path} path = {a.path} element={a.element} exact/>
            )}
            {publicRoutes.map((a) =>
                <Route key={a.path} path = {a.path} element={a.element} exact/>
            )}
            <Route path="*" element={<IngredientListChecker/>} />
        </Routes>
    );
});

export default AppRouter;