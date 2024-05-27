import React, {useContext, useEffect, useState} from 'react';
import IngredientListInput from "../../components/IngredientListChecker/IngredientListInput";
import './Comparison.css'
import {LOADING_STATUS} from "../../store/storeUtils";
import {ANALYSIS_ROUTE, COMPARE_ANALYSIS_ROUTE, COMPARE_ROUTE} from "../../utils/consts";
import {useNavigate} from "react-router-dom";
import {Context} from "../../index";

const Comparison = () => {
    const [ingrList1, setIngrList1] = useState([]);
    const [ingrList2, setIngrList2] = useState([]);
    const navigate = useNavigate();
    const {analysis} = useContext(Context);

    const handleAnalysisRequest = async () => {
        if (!ingrList1.length || !ingrList2.length) {
            alert("Поле ввода состава обязательное!");
        }
        else {
            console.log(ingrList1);
            console.log(ingrList2);
            try{
                await analysis.fetchComparison(ingrList1, ingrList2);
                if (analysis.comparisonLoadingStatus === LOADING_STATUS.SUCCESS) {
                    navigate(COMPARE_ANALYSIS_ROUTE);
                }
                if (analysis.comparisonLoadingStatus === LOADING_STATUS.ERROR) {
                    alert("Произошла ошибка на стороне сервера. Попробуйте позже.")
                }
            } catch(e) {
                alert(e.message);
            }
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