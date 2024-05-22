import React, {useContext, useEffect, useState} from 'react';
import IngredientListInput from "../components/IngredientListChecker/IngredientListInput";
import {Context} from "../index";
import {useNavigate} from "react-router-dom";
import {ANALYSIS_ROUTE} from "../utils/consts";
import {LOADING_STATUS} from "../store/storeUtils";

const IngredientListChecker = () => {
    const [ingrList, setIngrList] = useState([]);
    const navigate = useNavigate();
    const {analysis} = useContext(Context);

    const handleAnalysisRequest = async () => {
        if (!ingrList.length) {
            // make json and post ingrList.json
            alert("Поле ввода состава обязательное!")
        }
        else {
            // analysis.setIngrList(ingrList);
            // console.log(analysis._ingrList);
            // const ingrList_array = [...ingrList];
            try{
                await analysis.fetchAnalysis(ingrList);
                if (analysis.analysisLoadingStatus === LOADING_STATUS.SUCCESS) {
                    navigate(ANALYSIS_ROUTE);
                }
                if (analysis.analysisLoadingStatus === LOADING_STATUS.ERROR) {
                    alert("Произошла ошибка на стороне сервера. Попробуйте позже.")
                }
            } catch(e) {
                alert(e.message);
            }
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

            <center>
                <div className={"input__btn"} onClick={handleAnalysisRequest}>
                    Проверить состав
                </div>
            </center>

        </div>
    );
};

export default IngredientListChecker;