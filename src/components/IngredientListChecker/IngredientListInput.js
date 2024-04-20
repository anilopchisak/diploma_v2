import React, {useState} from "react";
import "./IngredientListInput.css";

import HandleNormalization from "./Calculations/HandleNormalization";
import Instructions from "./Instructions/Instructions"
import Concentrations from "./Concentrations/Concentrations";

import Dropzone from "../Dropzone/Dropzone";
import NavbarInput from "../NavbarInput/NavbarInput";
import Textarea from "../Textarea/Textarea";
import ImageEdit from "../ImageEdit/ImageEdit";

const IngredientListInput = () => {
    const [normText, setNormText] = useState(''); // нормализованный состав
    const [typeInput, setTypeInput] = useState('edit'); // тип ввода: txt, img, edit, final

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

    return (
        <div className={"wrapper"}>
            <div className={'input__name'}><h3>АНАЛИЗ СОСТАВА</h3></div>

            <div className={"wrapper__input"}>
                <NavbarInput set_typeInput={set_typeInput}/>

                <form className={"input__field"}>
                    {typeInput === 'img' ?
                        <Dropzone set_typeInput={set_typeInput}/>
                    :
                    typeInput === 'edit' ?
                        <ImageEdit set_typeInput={set_typeInput}/>
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