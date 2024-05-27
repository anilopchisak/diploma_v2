import React from 'react';
import {TbPaw, TbPawOff} from "react-icons/tb";
import {PiFeather, PiVirus, PiX} from "react-icons/pi";
import ComparisonNoInfo from "../ComparisonNoInfo";

const ComparisonHypoallergenic = ({data}) => {
    return (
        <div className={'compare__item'}>
            {data.hypoallergenic1 ?
                <div className={'general_info__item'}>
                    <div className={'general_info__icon__wrapper'}>
                        {data.hypoallergenic1 === 'Не гипоаллергенное' ?
                            <PiVirus className={'analysis-icon'}/>
                            :
                            <PiFeather className={'analysis-icon'}/>
                        }
                    </div>
                    <div>
                        {data.hypoallergenic1}
                    </div>
                </div>
                :
                <ComparisonNoInfo/>
            }

            <div className={'compare__content__name'}>
                ГИПОАЛЛЕРГЕННОСТЬ
            </div>

            {data.hypoallergenic2 ?
                <div className={'general_info__item'}>
                    <div className={'general_info__icon__wrapper'}>
                        {data.hypoallergenic2 === 'Не гипоаллергенное' ?
                            <PiVirus className={'analysis-icon'}/>
                            :
                            <PiFeather className={'analysis-icon'}/>
                        }
                    </div>
                    <div>
                        {data.hypoallergenic2}
                    </div>
                </div>

                :
                <ComparisonNoInfo/>
            }
        </div>
    );
};

export default ComparisonHypoallergenic;