import React, {useContext, useEffect} from 'react';
import "./App.css";
import {BrowserRouter} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import AppRouter from "./components/AppRouter";
import Footer from "./components/Footer/Footer";
import {Context} from "./index";
import {observer} from "mobx-react-lite";

const App = observer (() => {

    const {user} = useContext(Context);

    useEffect( () => {
        if (localStorage.getItem('access')) {
            user.isAuth = true;
        }
    }, []);

    return (
        <BrowserRouter>
            <Navbar/>
            <main className={"main-content"}>
                <AppRouter/>
            </main>
            <Footer/>
        </BrowserRouter>
    );
});

export default App;