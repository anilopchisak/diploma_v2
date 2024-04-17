import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";
import "./Navbar.css";

import {
    COMP_SEARCH_ROUTE,
    COMPARE_ROUTE,
    IL_CHECK_ROUTE, LOGIN_ROUTE,
    PROFILE_ROUTE,
    REG_ROUTE,
    SETTINGS_ROUTE
} from "../../utils/consts";
import {Context} from "../../index";

const MenuItem = ({ text, to, class_name, on_click}) => {
    return (
        <li className="nav__item">
            <NavLink to={to} className={class_name} onClick={on_click}>
                {text}
            </NavLink>
        </li>
    );
}

const Navbar = () => {
    const {user} = useContext(Context);

    const [navbar, setNavbar] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };
    const closeMenuOnMobile = () => {
        if (window.innerWidth <= 1150) {
            setShowMenu(false);
        }
    };

    const changeBackground = () => {
        if(window.scrollY >= 56) {
            setNavbar(true);
        }
        else {
            setNavbar(false);
        }
    }

    window.addEventListener('scroll', changeBackground);

    return (
        <header className={navbar ? 'header active' : 'header'}>
            <nav className="nav container">
                <NavLink to="/" className="nav__logo">
                    S K I N T E L L E C T
                </NavLink>

                <div className={`nav__menu ${showMenu ? "show-menu" : ""}`} id="nav-menu">
                    <ul className="nav__list">
                        <MenuItem to={IL_CHECK_ROUTE} text={"Анализ состава"}
                                    class_name={"nav__link"} on_click={closeMenuOnMobile}></MenuItem>
                        <MenuItem to={COMPARE_ROUTE} text={"Сравнение составов"}
                                  class_name={"nav__link"} on_click={closeMenuOnMobile}></MenuItem>
                        <MenuItem to={COMP_SEARCH_ROUTE} text={"Поиск компонента"}
                                  class_name={"nav__link"} on_click={closeMenuOnMobile}></MenuItem>

                        {(user.isAuth) ?
                            <MenuItem to={PROFILE_ROUTE} text={"Мой профиль"}
                                      class_name={"nav__link nav__cta"}></MenuItem>
                            :
                            <>
                                <MenuItem to={REG_ROUTE} text={"Регистрация"}
                                          class_name={"nav__link"} on_click={closeMenuOnMobile}></MenuItem>
                                <MenuItem to={LOGIN_ROUTE} text={"Войти"}
                                          class_name={"nav__cta nav__btn"}></MenuItem>
                            </>
                        }
                    </ul>

                    <div className="nav__close" id="nav-close" onClick={toggleMenu}>
                        <IoClose />
                    </div>
                </div>

                <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
                    <IoMenu />
                </div>
            </nav>
        </header>
    );
};

export default Navbar;