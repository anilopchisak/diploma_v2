import React, {useContext} from 'react';
import { PiClockClockwise, PiHeart } from "react-icons/pi";
import "./NavbarProfile.css"
import {Context} from "../../../index";
import {FAVS_ROUTE, HIST_ROUTE, LOGIN_ROUTE} from "../../../utils/consts";
import {NavLink, useNavigate} from "react-router-dom";
import {observer} from "mobx-react-lite";

const NavbarProfile = () => {
    const {user} = useContext(Context);
    const navigate = useNavigate();

    const handleLogout = async () => {
        await user.logout();
        navigate(LOGIN_ROUTE);
    }

    return (
        <div className="navbarProfile__container">
            <div className="navProfile__item">
                <div className="navProfile__link">
                    <PiHeart className="linkProfile__img" />
                    <NavLink to={FAVS_ROUTE} className="linkProfile__text nav__link">Избранное</NavLink>
                </div>
            </div>
            <div className="navProfile__item">
                <div className="navProfile__link">
                    <PiClockClockwise className="linkProfile__img" />
                    <NavLink to={HIST_ROUTE} className="linkProfile__text nav__link">История поиска</NavLink>
                </div>
            </div>
            <div className="navProfile__item">
                <button type="button" className="input__btn" id="auth__btn" onClick={handleLogout}>
                    Выйти из системы
                </button>
            </div>
        </div>
    );
};

export default NavbarProfile;