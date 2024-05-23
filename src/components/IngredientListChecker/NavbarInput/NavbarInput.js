import React from 'react';
import './NavbarInput.css'

import {PiImage, PiTextT} from "react-icons/pi";
import { Tooltip } from 'react-tooltip'

const NavbarInput = ({setTypeInput, styleType}) => {
    return (
        <div className={styleType ? "navbarInput__container" : "navbarInput__container__comparison"}>
            <ul className={"navInput__menu"}>
                <li className={"navInput__item"}>
                    <a className={"navInput__link"} onClick={() => setTypeInput('txt')}>
                        <PiTextT className={"linkInput__img"}/>
                        <div className={"linkInput__text"}>Анализировать текст</div>
                    </a>
                </li>
                <li className={"navInput__item"}>
                    <a className={"navInput__link"} onClick={() => setTypeInput('img')}>
                        <PiImage className={"linkInput__img"}/>
                        <div className={"linkInput__text"}>Анализировать фото с устройства</div>
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default NavbarInput;
// styleType ? "navbarInput__container" : "navbarInput__container__comparison"