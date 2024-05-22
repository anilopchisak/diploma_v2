import React, {useContext, useEffect, useState} from "react";
import "./IngredientListInput.css";

// import { PiArrowsClockwise } from "react-icons/pi"; // сбросить все

import HandleNormalization from "./Calculations/HandleNormalization";
import Instructions from "./Instructions/Instructions"
import Concentrations from "./Concentrations/Concentrations";

import Dropzone from "../Dropzone/Dropzone";
import NavbarInput from "./NavbarInput/NavbarInput";
import Textarea from "../Textarea/Textarea";
import ImageEdit from "../ImageEdit/ImageEdit";
import HandleTesseract from "./Calculations/HandleTesseractProc/HandleTesseract";
import HandleTesseractProcessing from "./Calculations/HandleTesseractProc/HandleTesseractProcessing";
import {Context} from "../../index";

const IngredientListInput = ({set_ingrList}) => {
    // тип ввода: txt, img, edit, processing, final - для навигации этапов ввода данных
    const [typeInput, setTypeInput] = useState('txt');
    // нормализованный состав (не кортежи) после Textarea
    const [normText, setNormText] = useState([]);

    // входное изображение
    const [image, setImage] = useState(null);
    // обрезанное изображение после ImageEdit
    const [croppedImage, setCroppedImage] = useState(null);
    // распознанный текст
    const [recText, setRecText] = useState('');

    const {ingr} = useContext(Context);
    // const [fetchingLoading, setFetchingLoading] = useState('loading');


    useEffect( () => {
        const fetchIngredients = async () => {
            try {
                await ingr.fetchIngrNames();
            } catch (err) {
                console.log(err);
                // setFetchingLoading('error');
                // alert('Проверки на очепятки не будет');
            }
        }
        fetchIngredients();
    }, []);

    const set_typeInput = (a) => {
        setTypeInput(a);
    }
    // set_normText
    const handleNormalization = (Text) => {
        const ingr_names = ingr.ingrNames.ingr_names;
        setNormText(HandleNormalization(Text, ingr_names));
    }

    const set_image = (a) => {
        setImage(a);
    }

    const set_recText = (a) => {
        setRecText(a);
        const ingr_names = ingr.ingrNames.ingr_names;
        setNormText(HandleNormalization(a, ingr_names));
    }

    const set_CroppedImage = (a) => {
        setCroppedImage(a);
        setImage(null);
    }

    const set_finalList = (a) => {
        // setFinalList(a);
        setNormText(a);
    }

    // useEffect(() => {
    //     if (finalList) {
    //         set_ingrList(finalList);
    //     }
    // }, [finalList]);

    useEffect(() => {
        if (normText) {
            set_ingrList(normText);
        }
    }, [normText]);

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
            setRecText(recText.replace(/\s+/g, ' '));
            // console.log(recText);
            const ingr_names = ingr.ingrNames.ingr_names;
            setNormText(HandleNormalization(recText, ingr_names));
            setTypeInput('final');
        }
    }, [recText]);

    return (
        <div className={"wrapper"}>
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

        </div>
    )

}

export default IngredientListInput;