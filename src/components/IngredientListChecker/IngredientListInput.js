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

const IngredientListInput = ({set_ingrList, styleType}) => {
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
            // HandleTesseract({image: croppedImage, setText: set_recText, typeInput: typeInput});
        }
    }, [croppedImage]);
    useEffect(() => {
        if (typeInput === 'processing') {
            HandleTesseract({image: croppedImage, setText: set_recText, typeInput: typeInput});
        }
        else if (typeInput === 'img') {
            setNormText('');
            set_ingrList('');
        }
        else if (typeInput === 'txt') {
            setNormText('');
            setRecText('');
            setImage(null);
            setCroppedImage(null);
            set_ingrList('');
        }
        // else if (typeInput === 'img') {
        //     setNormText('');
        // }
    }, [typeInput]);

    // если текст на изображении распознан, включается режим ввода концентраций
    useEffect(() => {
        if (recText !== '') {
            // console.log(recText);
            setRecText(recText.replace(/\s+/g, ' '));
            // console.log(recText);
            const ingr_names = ingr.ingrNames.ingr_names;
            setNormText(HandleNormalization(recText, ingr_names));
            setTypeInput('final');
            setImage(null);
        }
    }, [recText]);

    return (
        <div className={styleType ? "wrapper" : "wrapper__comparison"}>
            <div className={styleType ? "wrapper__input" : "wrapper__input__comparison"}>
                <NavbarInput setTypeInput={set_typeInput} styleType={styleType}/>

                <div className={styleType? 'input__wrapper' : 'input__wrapper__comparison'}>
                    <div className={styleType? "input__field" : 'input__field__comparison'}>
                        {typeInput === 'img' ?
                            <Dropzone setImage={set_image}/>
                            : typeInput === 'edit' ?
                                <ImageEdit setTypeInput={set_typeInput} setImage={set_image} setCroppedImage={set_CroppedImage} image={image} styleType={styleType}/>
                                : typeInput === 'processing' ?
                                    <HandleTesseractProcessing typeInput={typeInput}/>
                                    : typeInput === 'processing_error' ?
                                        <HandleTesseractProcessing typeInput={typeInput}/>
                                        :
                                        <Textarea handleNormalize={handleNormalization} recText={recText} setTypeInput={set_typeInput} styleType={styleType}/>
                        }
                    </div>

                    <div className={styleType ? "wrapper__input2" : "wrapper__input2__comparison"}>
                        {typeInput === 'final' ?
                            <Concentrations normText={normText} setFinalList={set_finalList}/>
                            :
                            <Instructions typeInput={typeInput}/>
                        }
                    </div>
                </div>


            </div>

        </div>
    )

}

export default IngredientListInput;