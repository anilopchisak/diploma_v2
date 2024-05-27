import React from 'react';

import { TbPaw, TbPawOff } from "react-icons/tb"; // vegan
import { PiX } from "react-icons/pi";
import ComparisonNoInfo from "../ComparisonNoInfo";

const ComparisonVegan = ({data}) => {


    return (
        <div className={'compare__item'}>
            {data.vegan1 ?
                <div className={'general_info__item'}>
                    <div className={'general_info__icon__wrapper'}>
                        {data.vegan1 === 'Веганское (не содержит компонентов животного происхождения)' ?
                            <TbPaw className={'analysis-icon'}/>
                            :
                            <TbPawOff className={'analysis-icon'}/>
                        }
                    </div>
                    <div>
                        {data.vegan1}
                    </div>
                </div>
                :
                <ComparisonNoInfo/>
            }

            <div className={'compare__content__name'}>
                ВЕГАН
            </div>

            {data.vegan2 ?
                <div className={'general_info__item'}>
                    <div className={'general_info__icon__wrapper'}>
                        {data.vegan2 === 'Веганское (не содержит компонентов животного происхождения)' ?
                            <TbPaw className={'analysis-icon'}/>
                            :
                            <TbPawOff className={'analysis-icon'}/>
                        }
                    </div>
                    <div>
                        {data.vegan2}
                    </div>
                </div>

                :
                <ComparisonNoInfo/>
            }
        </div>
    );
};

export default ComparisonVegan;