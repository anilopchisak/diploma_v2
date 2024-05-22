import React, {useContext, useEffect, useState} from 'react';
import './Analysis.css'
import {Context} from "../../index";
import { PiHeartDuotone } from "react-icons/pi";


import { TbPaw, TbPawOff } from "react-icons/tb"; // vegan
import { PiFeather, PiVirus } from "react-icons/pi"; // hypoallergenic
import { PiBaby } from "react-icons/pi"; // pregnant

import { PiX } from "react-icons/pi";
import { BsExclamationLg } from "react-icons/bs";
import EffectCard from "./EffectCard/EffectCard";
import NegEffectCard from "./NegEffectCard/NegEffectCard";
import IngrCard from "./IngrCard/IngrCard";
import NaturalCard from "./NaturalCard/NaturalCard";
import CombCard from "./СombCard/CombCard";
import RecognizedCard from "./RecognizedCard/RecognizedCard";

const Analysis = () => {
    const {analysis} = useContext(Context);
    const [doRender, setDoRender] = useState(true);

    useEffect(() => {
        let rec_count = 0;
        analysis.analysis.ingrs.map((ingr, ingrIndex) => {
            if (!ingr.recognized) rec_count++;
        });
        if (analysis.analysis.ingrs.length === rec_count)
            setDoRender(false);
    }, []);

    return (
        <div className={"wrapper"}>
            {doRender ?
                <div>
                    <div className={'analysis__item'}>
                        <h1><mark>Анализируемый состав</mark></h1>
                        <RecognizedCard ingrs={analysis.analysis.ingrs}/>
                    </div>

                    {/*Другая общая инфа*/}
                    <div className={'analysis__item'}>
                        <div className={'analysis__general_info'}>
                            <div className={'general_info'}>
                                {analysis.analysis.data.vegan &&
                                    <div className={'general_info__item'}>
                                        <div className={'general_info__icon__wrapper'}>
                                            {analysis.analysis.data.vegan === 'Веганское (не содержит компонентов животного происхождения)' ?
                                                <TbPaw className={'analysis-icon'}/>
                                                :
                                                <TbPawOff className={'analysis-icon'}/>
                                            }
                                        </div>
                                        <div>{analysis.analysis.data.vegan}</div>
                                    </div>
                                }
                                {analysis.analysis.data.pregnant &&
                                    <div className={'general_info__item'}>
                                        <div className={'general_info__icon__wrapper'}>
                                            {analysis.analysis.data.pregnant === 'Безопасно для беременных' ?
                                                <PiBaby className={'analysis-icon'}/>
                                                :
                                                <div id={"baby"}>
                                                    <PiBaby className={'analysis-icon'}/>
                                                    <PiX className={'analysis-icon'} id={"not"}/>
                                                </div>
                                            }

                                        </div>
                                        <div>{analysis.analysis.data.pregnant}</div>
                                    </div>
                                }
                                {analysis.analysis.data.hypoallergenic &&
                                    <div className={'general_info__item'}>
                                        <div className={'general_info__icon__wrapper'}>
                                            {analysis.analysis.data.hypoallergenic === 'Не гипоаллергенное' ?
                                                <PiVirus className={'analysis-icon'}/>
                                                :
                                                <PiFeather className={'analysis-icon'}/>
                                            }
                                        </div>
                                        <div>{analysis.analysis.data.hypoallergenic}</div>
                                    </div>
                                }
                            </div>
                            <NaturalCard natural={analysis.analysis.data.natural}/>
                        </div>
                    </div>

                    {/*Полезности*/}
                    <div className={'analysis__item'}>
                        <div className={'analysis__section_name'}>
                            <h1><mark>Действие средства</mark></h1>
                            <p>- компоненты перечислены по убыванию интенсивности воздействия</p>
                        </div>
                        <div className={'analysis__item'}>
                            <EffectCard analysis={analysis}/>
                        </div>
                    </div>

                    {/*Побочки*/}
                    <div className={'analysis__item'}>
                        <div className={'analysis__section_name'}>
                            <h1><mark>Побочные эффекты</mark></h1>
                            <p>- возможное негативное воздействие средства на кожу
                                (интенсивность и возможность проявляения <mark>индивидуальны</mark>)</p>
                        </div>
                        <div className={'analysis__item'}>
                            <NegEffectCard analysis={analysis}/>
                        </div>
                    </div>

                    {/*Рекомендации по применению*/}
                    <div className={'analysis__item'}>
                        <div className={'analysis__section_name'}>
                            <h1><mark>Рекоммендации по применению</mark></h1>
                            <p>- рекомендации определяются из побочных эффектов или из особенностей воздействия определенных компонентов на кожу</p>
                        </div>
                        <div className={'analysis__item'}>
                            {analysis.analysis.recoms.map((recom, recomIndex) =>
                                <div className={'recom-item'} key={recomIndex}>
                                    <div>
                                        <BsExclamationLg className={'analysis-icon'}/>
                                    </div>
                                    <div className={'recom-text'}>
                                        {recom.recom_text.toUpperCase()}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/*Ингредиенты*/}
                    <div className={'analysis__item'}>
                        <div className={'analysis__section_name'}>
                            <h1><mark>Ингредиенты</mark></h1>
                        </div>
                        <div className={'analysis__item'}>
                            <IngrCard ingrs={analysis.analysis.ingrs}/>
                        </div>
                    </div>

                    {/*Комбинирование*/}
                    <div className={'analysis__item'}>
                        <div className={'analysis__section_name'}>
                            <h1><mark>Комбинирование</mark></h1>
                            <p>- рекомендации по комбинированию средства с различными компонентами</p>
                        </div>
                        <div className={'analysis__item'}>
                            <CombCard combs={analysis.analysis.combs}/>
                        </div>
                    </div>
                </div>
                :
                <div className={'analysis__item'}>
                    <h1><mark>Анализируемый состав</mark></h1>
                    <RecognizedCard ingrs={analysis.analysis.ingrs}/>
                    <p>К сожалению, ни один ингредиент в составе не расознался. Проверьте состав на наличие опечаток и повторите попытку.</p>
                </div>
            }
        </div>
    );
};

export default Analysis;