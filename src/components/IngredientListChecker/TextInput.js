import React, {useState} from "react";
import { Tooltip } from 'react-tooltip'
import "./IngredientListChecker.css";

import Modal from "../Modal/Modal"
import Normalization from "./Calculations/Normalization";
import HandleTesseract from "./Calculations/HandleTesseract";
import HandleEdit from "./Calculations/HandleEdit";
import NavbarInput from "./NavbarInput/NavbarInput";

import { PiImage } from "react-icons/pi";
import { PiCamera } from "react-icons/pi";
import Instructions from "./Instructions/Instructions";


const TextInput = () => {
    const [Text, setText] = useState(''); // chosen composition
    const [normText, setNormText] = useState(''); // server answer
    // const [typeInput, setTypeInput] = useState('txt');

    const handleChange = (event) => {
        setText(event.target.value);
    }

    const handleNormalize = () => {
        setNormText(Normalization(Text));
        if (typeof normText === "undefined") {
            alert("Text is undefined! Check the console.log");
            console.log(normText);
            // return;
        }
    }

    const handleBrowse = () => {
        HandleTesseract();
    }

    const handlePhoto = () => {
        HandleEdit();
    }

    return (
        <div className={"wrapper"}>
            <div className={'input__name'}><h3>АНАЛИЗ СОСТАВА</h3></div>

            <div className={"wrapper__input"}>
                <NavbarInput/>

                <form className={"input__field"}>
                    <textarea
                        name='inputText'
                        value={Text}
                        onChange={handleChange}
                        placeholder={"Введите состав через запятую."}
                    />
                </form>

                <Instructions/>
            </div>

            <div className={"input__btn"}>
                <a onClick={handleNormalize}>
                    Проверить состав</a>
            </div>

        </div>
    )

}

export default TextInput;