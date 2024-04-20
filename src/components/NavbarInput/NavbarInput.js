import React from 'react';
import './NavbarInput.css'

import {PiImage, PiTextT} from "react-icons/pi";
import { Tooltip } from 'react-tooltip'

const NavbarInput = ({set_typeInput}) => {
    return (
        <div className={"navbarInput__container"}>
            <ul className={"navInput__menu"}>
                <li className={"navInput__item"}>
                    <a className={"navInput__link"} onClick={() => set_typeInput('txt')}>
                        <PiTextT className={"linkInput__img"}/>
                        <div className={"linkInput__text"}>Анализировать текст</div>
                    </a>
                </li>
                <li className={"navInput__item"}>
                    <a className={"navInput__link"} onClick={() => set_typeInput('img')}>
                        <PiImage className={"linkInput__img"}/>
                        <div className={"linkInput__text"}>Анализировать фото с устройства</div>
                    </a>
                    {/*<Tooltip className={"img__tooltip"} anchorSelect=".img__browse" place="right">*/}
                    {/*    Загрузить фото с устройства*/}
                    {/*</Tooltip>*/}
                </li>
                {/*<li className={"navInput__item"}>*/}
                {/*    <a className={"navInput__link"}>*/}
                {/*        <PiCamera className={"linkInput__img"}/>*/}
                {/*        <div className={"linkInput__text"}>Анализировать фото с камеры</div>*/}
                {/*    </a>*/}
                {/*    /!*<Tooltip className={"img__tooltip"} anchorSelect=".img__photo" place="right">*!/*/}
                {/*    /!*    Сфотографировать состав*!/*/}
                {/*    /!*</Tooltip>*!/*/}
                {/*</li>*/}
            </ul>
        </div>
    );
};

export default NavbarInput;