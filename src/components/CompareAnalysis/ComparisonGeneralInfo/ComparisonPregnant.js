import React from 'react';
import {TbPaw, TbPawOff} from "react-icons/tb";
import {PiBaby, PiX} from "react-icons/pi";
import ComparisonNoInfo from "../ComparisonNoInfo";

const ComparisonPregnant = ({data}) => {
    return (
        <div className={'compare__item'}>
            {data.pregnant1 ?
                <div className={'general_info__item'}>
                    <div className={'general_info__icon__wrapper'}>
                        {data.pregnant1 === 'Безопасно для беременных' ?
                            <PiBaby className={'analysis-icon'}/>
                            :
                            <div id={"baby"}>
                                <PiBaby className={'analysis-icon'}/>
                                <PiX className={'analysis-icon'} id={"not"}/>
                            </div>
                        }
                    </div>
                    <div>
                        {data.pregnant1}
                    </div>
                </div>
                :
                <ComparisonNoInfo/>
            }

            <div className={'compare__content__name'}>
                ВЛИЯНИЕ НА БЕРЕМЕННЫХ
            </div>

            {data.pregnant2 ?
                <div className={'general_info__item'}>
                    <div className={'general_info__icon__wrapper'}>
                        {data.pregnant2 === 'Безопасно для беременных' ?
                            <PiBaby className={'analysis-icon'}/>
                            :
                            <div id={"baby"}>
                                <PiBaby className={'analysis-icon'}/>
                                <PiX className={'analysis-icon'} id={"not"}/>
                            </div>
                        }
                    </div>
                    <div>
                        {data.pregnant2}
                    </div>
                </div>

                :
                <ComparisonNoInfo/>
            }
        </div>
    );
};

export default ComparisonPregnant;