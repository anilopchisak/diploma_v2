import React, {useContext} from 'react';
import {Context} from "../../index";
import {LOADING_STATUS} from "../../store/storeUtils";
import Analysis from "../../components/Analysis/Analysis";
import CompareAnalysis from "../../components/CompareAnalysis/CompareAnalysis";

const ComparisonPage = () => {
    const {analysis} = useContext(Context);

    return (
        <div>
            <div className={'input__name'}><h3>РЕЗУЛЬТАТ СРАВНЕНИЯ</h3></div>
            {
                analysis.comparisonLoadingStatus === LOADING_STATUS.LOADING && "Loading..."
            }
            {
                analysis.comparisonLoadingStatus === LOADING_STATUS.ERROR && "Error"
            }
            {
                analysis.comparisonLoadingStatus === LOADING_STATUS.IDLE && "No data"
            }
            {
                analysis.comparisonLoadingStatus === LOADING_STATUS.SUCCESS &&
                <CompareAnalysis/>
            }
        </div>
    );
};

export default ComparisonPage;