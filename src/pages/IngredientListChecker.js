import React, {useEffect, useState} from 'react';
import IngredientListInput from "../components/IngredientListChecker/IngredientListInput";

const IngredientListChecker = () => {
    const [ingrList, setIngrList] = useState([]);

    const handleAnalysisRequest = () => {
        if (!ingrList.length) {
            // make json and post ingrList.json
            alert("Поле ввода состава обязательное!")
        }
        else {
            console.log(ingrList);
            console.log("Анализ:" + ingrList);
        }
    }

    const set_ingrList = (a) => {
        setIngrList(a);
    }

    useEffect( () => {
        if (ingrList) {
            console.log(ingrList);
        }
    }, [ingrList]);

    return (
        <div>
            <div className={'input__name'}><h3>АНАЛИЗ СОСТАВА</h3></div>

            <IngredientListInput set_ingrList={set_ingrList}/>

            <div className={"input__btn"} onClick={handleAnalysisRequest}>
                <a>
                    Проверить состав</a>
            </div>
        </div>
    );
};

export default IngredientListChecker;