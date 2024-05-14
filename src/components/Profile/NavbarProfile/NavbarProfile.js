import React from 'react';
import { PiClockClockwise, PiGearSix, PiHeart } from "react-icons/pi";
import "./NavbarProfile.css"

const NavbarProfile = ({setProfileTab}) => {
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
            <div className={"navProfile__item"}>
                <a className={"navProfile__link"} onClick={() => setProfileTab('settings')}>
                    <PiGearSix className={"linkProfile__img"}/>
                    <div className={"linkProfile__text nav__link"}>Настройки</div>
                </a>
            </div>
        </div>
    );
};

export default NavbarProfile;