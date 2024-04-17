import React, {useState} from "react";
import { Tooltip } from 'react-tooltip'
import "./IngredientListChecker.css";

import Modal from "../Modal/Modal"
import Normalization from "./Normalization";
import HandleTesseract from "./HandleTesseract";
import HandleEdit from "./HandleEdit";

import { PiImage } from "react-icons/pi";
import { PiCamera } from "react-icons/pi";


const TextInput = () => {
    const [Text, setText] = useState(''); // chosen composition
    const [normText, setNormText] = useState(''); // server answer
    const [modalActive, setModalActive] = useState(true);

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
                <form className={"input__field"}>
                    <textarea
                        name='inputText'
                        value={Text}
                        onChange={handleChange}
                        placeholder={"Введите состав через запятую или переместите фото состава в поле ввода."}
                    />
                    <div className={"input__wrapper__img"}>
                        <PiImage className={"img__browse"} onClick={handleBrowse}/>
                        <Tooltip className={"img__tooltip"} anchorSelect=".img__browse" place="top">
                            Загрузить фото с устройства
                        </Tooltip>
                        <PiCamera className={"img__photo"} onClick={handlePhoto}/>
                        <Tooltip className={"img__tooltip"} anchorSelect=".img__photo" place="bottom">
                            Сфотографировать состав
                        </Tooltip>
                    </div>
                </form>
            </div>

            <div className={"input__btn"}>
                <a onClick={handleNormalize}>
                    Проверить состав</a>
            </div>

            {/*<div className={"wrapper_instruction"}>*/}

            {/*    <div className={"item item_1"}>*/}
            {/*        <div className={"num"}>1</div>*/}
            {/*        <div>Загрузите в поле ввода состав в виде текста или фото</div>*/}
            {/*    </div>*/}

            {/*    <div className={"item item_2"}>*/}
            {/*        <div className={"num"}>2</div>*/}
            {/*        <div>Нажмите кнопку проверить состав</div>*/}
            {/*    </div>*/}

            {/*    <div className={"item item_3"}>*/}
            {/*        <div className={"num"}>3</div>*/}
            {/*        <div>Подробную инструкцию по применению и требования к входным данным смотрите <a className={'link'}>по ссылке</a></div>*/}
            {/*    </div>*/}

            {/*</div>*/}

            <Modal active={modalActive} setActive={setModalActive}/>

        </div>
    )

}

export default TextInput;