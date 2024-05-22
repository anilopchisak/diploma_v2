import React, {useContext} from 'react';
import './Profile.css';
import {FAVS_ROUTE, HIST_ROUTE, LOGIN_ROUTE} from "../../utils/consts";
import HistoryProfile from "../../components/Profile/HistoryProfile/HistoryProfile";
import FavoritesProfile from "../../components/Profile/FavoritesProfile/FavoritesProfile";
import NavbarProfile from "../../components/Profile/NavbarProfile/NavbarProfile";
import {PiClockClockwise, PiHeart} from "react-icons/pi";
import {NavLink, useNavigate} from "react-router-dom";
import {Context} from "../../index";

const Profile = () => {
    const isOption = window.location.pathname === HIST_ROUTE;
    const {user} = useContext(Context);
    const navigate = useNavigate();


    const handleLogout = async () => {
        await user.logout();
        navigate(LOGIN_ROUTE);
    }

    return (
        <div className="wrapper">
            <div className="input__name"><h3>ПРОФИЛЬ</h3></div>

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

            {isOption ?
                <div>
                    <h3>История анализированных составов</h3>
                    <HistoryProfile />
                </div>
                :
                <div>
                    <h3>Избранные составы</h3>
                    <FavoritesProfile />
                </div>
            }
        </div>
    );
};

export default Profile;
