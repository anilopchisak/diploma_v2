import React from 'react';
import {PiX} from "react-icons/pi";

const ComparisonNoInfo = () => {
    return (
        <div className={'general_info__item'}>
            <div className={'general_info__icon__wrapper'}>
                <PiX className={'analysis-icon'}/>
            </div>
            <div>
                Нет информации
            </div>
        </div>
    );
};

export default ComparisonNoInfo;