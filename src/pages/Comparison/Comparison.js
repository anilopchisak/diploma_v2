import React, {useEffect, useState} from 'react';
import IngredientListInput from "../../components/IngredientListChecker/IngredientListInput";
import './Comparison.css'

const Comparison = () => {
    const [ingrList1, setIngrList1] = useState([]);
    const [ingrList2, setIngrList2] = useState([]);

    const handleAnalysisRequest = () => {
        if (!ingrList1.length || !ingrList2.length) {
            alert("Поле ввода состава обязательное!");
        }
        else {
            // make json and post ingrList.json
            console.log("Analysis");
            console.log(ingrList1);
            console.log(ingrList2);
        }
    }

    const set_ingrList1 = (a) => {
        setIngrList1(a);
    }
    const set_ingrList2 = (a) => {
        setIngrList2(a);
    }

    return (
        <div>
            <div className={'input__name'}><h3>СРАВНЕНИЕ СОСТАВОВ</h3></div>

            <div id={'comparison_wrapper'}>
                <IngredientListInput set_ingrList={set_ingrList1} styleType={false}/>
                <IngredientListInput set_ingrList={set_ingrList2} styleType={false}/>
            </div>

            <center>
                <div className={"input__btn"}
                     onClick={handleAnalysisRequest}>
                    Сравнить составы
                </div>
            </center>

        </div>
    );
};

export default Comparison;