import React, {useContext} from 'react';
import Analysis from "../../components/Analysis/Analysis";
import {Context} from "../../index";
import {LOADING_STATUS} from "../../store/storeUtils";
import IngrDetailItem from "../../components/IngrDetail/IngrDetailItem";

const AnalysisPage = () => {
    const {analysis} = useContext(Context);

    return (
        <div>
            <div className={'input__name'}><h3>РЕЗУЛЬТАТ АНАЛИЗА</h3></div>
            {
                analysis.analysisLoadingStatus === LOADING_STATUS.LOADING && "Loading..."
            }
            {
                analysis.analysisLoadingStatus === LOADING_STATUS.ERROR && "Error"
            }
            {
                analysis.analysisLoadingStatus === LOADING_STATUS.IDLE && "No data"
            }
            {
                analysis.analysisLoadingStatus === LOADING_STATUS.SUCCESS &&
                <Analysis/>
            }
        </div>
    );
};

export default AnalysisPage;