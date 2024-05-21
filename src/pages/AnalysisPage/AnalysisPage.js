import React, {useContext} from 'react';
import Analysis from "../../components/Analysis/Analysis";
import {Context} from "../../index";

const AnalysisPage = () => {

    return (
        <div>
            <div className={'input__name'}><h3>РЕЗУЛЬТАТ АНАЛИЗА</h3></div>
            <Analysis/>
        </div>
    );
};

export default AnalysisPage;