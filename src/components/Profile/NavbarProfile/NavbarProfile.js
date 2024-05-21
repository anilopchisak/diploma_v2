import React, {useContext} from 'react';
import { PiClockClockwise, PiGearSix, PiHeart } from "react-icons/pi";
import "./NavbarProfile.css"
import {Context} from "../../../index";
import {IL_CHECK_ROUTE, LOGIN_ROUTE} from "../../../utils/consts";
import {useNavigate} from "react-router-dom";

const NavbarProfile = ({setProfileTab}) => {
    const {user} = useContext(Context);
    const navigate = useNavigate();

    const handleLogout = async () => {
        await user.logout();
        navigate(LOGIN_ROUTE);
    }

    return (
        <div className={"navbarProfile__container"}>
            <div className={"navProfile__item"}>
                <a className={"navProfile__link"} onClick={() => setProfileTab('favorites')}>
                    <PiHeart className={"linkProfile__img"}/>
                    <div className={"linkProfile__text nav__link"}>Избранное</div>
                </a>
            </div>
            <div className={"navProfile__item"}>
                <a className={"navProfile__link"} onClick={() => setProfileTab('history')}>
                    <PiClockClockwise className={"linkProfile__img"}/>
                    <div className={"linkProfile__text nav__link"}>История поиска</div>
                </a>
            </div>
            {/*<div className={"navProfile__item"}>*/}
            {/*    <a className={"navProfile__link"} onClick={() => setProfileTab('settings')}>*/}
            {/*        <PiGearSix className={"linkProfile__img"}/>*/}
            {/*        <div className={"linkProfile__text nav__link"}>Настройки</div>*/}
            {/*    </a>*/}
            {/*</div>*/}
            <div className={"navProfile__item"}>
                <button type={'button'} className={'input__btn'} id={"auth__btn"} onClick={handleLogout}>
                    Выйти из системы
                </button>
            </div>
        </div>
    );
};

export default NavbarProfile;