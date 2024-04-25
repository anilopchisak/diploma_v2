import React, {useEffect, useState} from "react";
import "./IngredientListInput.css";

import { PiArrowsClockwise } from "react-icons/pi"; // сбросить все

import HandleNormalization from "./Calculations/HandleNormalization";
import Instructions from "./Instructions/Instructions"
import Concentrations from "./Concentrations/Concentrations";

import Dropzone from "../Dropzone/Dropzone";
import NavbarInput from "../NavbarInput/NavbarInput";
import Textarea from "../Textarea/Textarea";
import ImageEdit from "../ImageEdit/ImageEdit";
import HandleTesseract from "./Calculations/HandleTesseract";

const IngredientListInput = () => {
    const [normText, setNormText] = useState(''); // нормализованный состав
    const [image, setImage] = useState(null);
    const [typeInput, setTypeInput] = useState('img'); // тип ввода: txt, img, edit, final
    const [croppedImage, setCroppedImage] = useState(null);
    const [recText, setRecText] = useState('');

    const handleNormalize = (Text) => {
        setNormText(HandleNormalization(Text));
        if (typeof normText === "undefined") {
            alert("Text is undefined! Check the console.log");
            console.log(normText);
        }
    }

    const set_typeInput = (a) => {
        setTypeInput(a);
    }

    const set_image = (a) => {
        setImage(a);
    }
    useEffect(() => {
        if (image !== null) {
            setTypeInput('edit');
        }
    }, [image]);

    const set_CroppedImage = (a) => {
        setCroppedImage(a);
        setImage(null);
    }
    useEffect(() => {
        if (croppedImage !== null) {
            setRecText(HandleTesseract(croppedImage));
            // setTypeInput('final');
        }
    }, [croppedImage]);

    return (
        <div className={"wrapper"}>
            <div className={'input__name'}><h3>АНАЛИЗ СОСТАВА</h3></div>

            <div className={"wrapper__input"}>
                <NavbarInput setTypeInput={set_typeInput}/>

                <form className={"input__field"}>
                    {typeInput === 'img' ?
                        <Dropzone setImage={set_image}/>
                    :
                    typeInput === 'edit' ?
                        <ImageEdit setTypeInput={set_typeInput} setImage={set_image} setCroppedImage={set_CroppedImage} image={image}/>
                    :
                        <Textarea handleNormalize={handleNormalize}/>
                    }
                </form>

                <div className={"wrapper__input2"}>
                    {typeInput === 'final' ?
                        <Concentrations normText={normText}/>
                        :
                        <Instructions typeInput={typeInput}/>
                    }
                </div>
            </div>

            <div className={"input__btn"}>
                <a>
                    Проверить состав</a>
            </div>

        </div>
    )

}

export default IngredientListInput;