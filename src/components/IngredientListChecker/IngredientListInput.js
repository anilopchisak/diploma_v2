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
import HandleTesseract from "./Calculations/HandleTesseractProc/HandleTesseract";
import HandleTesseractProcessing from "./Calculations/HandleTesseractProc/HandleTesseractProcessing";

const IngredientListInput = () => {
    const [typeInput, setTypeInput] = useState('txt'); // тип ввода: txt, img, edit, processing, final
    const [normText, setNormText] = useState([]); // нормализованный состав (не кортежи)
    const [image, setImage] = useState(null);
    const [croppedImage, setCroppedImage] = useState(null);
    const [recText, setRecText] = useState('');
    const [finalList, setFinalList] = useState([]);

    const handleNormalization = (Text) => {
        setNormText(HandleNormalization(Text));
    }

    const set_typeInput = (a) => {
        setTypeInput(a);
    }

    const set_image = (a) => {
        setImage(a);
    }

    const set_recText = (a) => {
        setRecText(a);
    }

    const set_CroppedImage = (a) => {
        setCroppedImage(a);
        setImage(null);
    }

    const set_finalList = (a) => {
        setFinalList(a);
    }

    useEffect(() => {
        if (finalList) {
            console.log(finalList);
        }
    }, [finalList]);

    // когда изображение загружено, включается режит редактирования изображения
    useEffect(() => {
        if (image) {
            setTypeInput('edit');
        }
    }, [image]);

    // когда изображение обрезано, распознается текст на изображении
    useEffect(() => {
        if (croppedImage) {
            setTypeInput('processing');
            HandleTesseract({image: croppedImage, setText: set_recText, setTypeInput: set_typeInput});
        }
    }, [croppedImage]);

    // если текст на изображении распознан, включается режим ввода концентраций
    useEffect(() => {
        if (recText !== '') {
            // console.log(recText);
            setRecText(recText.replace(/\n/g, ''));
            // console.log(recText);
            setNormText(HandleNormalization(recText));
            setTypeInput('final');
        }
    }, [recText]);

    return (
        <div className={"wrapper"}>
            <div className={'input__name'}><h3>АНАЛИЗ СОСТАВА</h3></div>

            <div className={"wrapper__input"}>
                <NavbarInput setTypeInput={set_typeInput}/>

                <div className={"input__field"}>
                    {typeInput === 'img' ?
                        <Dropzone setImage={set_image}/>
                    : typeInput === 'edit' ?
                        <ImageEdit setTypeInput={set_typeInput} setImage={set_image} setCroppedImage={set_CroppedImage} image={image}/>
                    : typeInput === 'processing' ?
                        <HandleTesseractProcessing typeInput={typeInput}/>
                    : typeInput === 'processing_error' ?
                        <HandleTesseractProcessing typeInput={typeInput}/>
                    :
                        <Textarea handleNormalize={handleNormalization} recText={recText} setTypeInput={set_typeInput}/>
                    }
                </div>

                <div className={"wrapper__input2"}>
                    {typeInput === 'final' ?
                        <Concentrations normText={normText} setFinalList={set_finalList}/>
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