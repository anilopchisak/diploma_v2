import React, {useContext, useEffect, useState} from 'react';
import {Context} from "../../index";
import './CompareAnalysis.css';
import '../Analysis/Analysis.css';
import RecognizedCard from "../Analysis/RecognizedCard/RecognizedCard";
import ComparisonVegan from "./ComparisonGeneralInfo/ComparisonVegan";
import ComparisonPregnant from "./ComparisonGeneralInfo/ComparisonPregnant";
import ComparisonHypoallergenic from "./ComparisonGeneralInfo/ComparisonHypoallergenic";
import NaturalCard from "../Analysis/NaturalCard/NaturalCard";
import {PiX} from "react-icons/pi";
import ComparisonNoInfo from "./ComparisonNoInfo";
import ComparisonEffects from "./ComparisonEffects/ComparisonEffects";
import ComparisonNegEffects from "./ComparisonNegEffects/ComparisonNegEffects";
import IngrCard from "../Analysis/IngrCard/IngrCard";
import ComparisonIngrCard from "./ComparisonIngrCard/ComparisonIngrCard";

const CompareAnalysis = () => {
    const {analysis} = useContext(Context);
    const [doRender, setDoRender] = useState(true);

    useEffect(() => {
        let rec_count = false;
        while(!rec_count) {
            analysis.comparison.shared_ingredients.map((ingr, ingrIndex) => {
                if (ingr.recognized) rec_count = true;
            });
            analysis.comparison.unique_ingredients1.map((ingr, ingrIndex) => {
                if (ingr.recognized) rec_count = true;
            });
            analysis.comparison.unique_ingredients2.map((ingr, ingrIndex) => {
                if (ingr.recognized) rec_count = true;
            });
        }
        if (!rec_count)
            setDoRender(false);
    }, []);

    return (
        <div className={'wrapper__compare'}>
            {doRender ?
                <div>

                    {/*Состав: распознанное и нет*/}
                    <div className="analysis__item">
                        <div className={'analysis__section_name'}>
                            <h1><mark>Анализируемые составы</mark></h1>
                            <p>- ярким цветом выделены те компоненты, которые мы смогли распознать</p>
                        </div>
                        <div className={'wrapper__compare__item_il'}>
                            <div>
                                <RecognizedCard ingrs={analysis.comparison.ingrs1}/>
                            </div>
                            <div>
                                <RecognizedCard ingrs={analysis.comparison.ingrs2}/>
                            </div>

                        </div>
                    </div>

                    {/*general info*/}
                    <div className={'analysis__item'}>
                        {(analysis.comparison.data.vegan1 || analysis.comparison.data.vegan2) &&
                            <div className={'wrapper__compare__item wrapper__compare__item__hover'}>
                                <ComparisonVegan data={analysis.comparison.data}/>
                            </div>
                        }
                        {(analysis.comparison.data.pregnant1 || analysis.comparison.data.pregnant2) &&
                            <div className={'wrapper__compare__item wrapper__compare__item__hover'}>
                                <ComparisonPregnant data={analysis.comparison.data}/>
                            </div>
                        }
                        {(analysis.comparison.data.hypoallergenic1 || analysis.comparison.data.hypoallergenic2) &&
                            <div className={'wrapper__compare__item wrapper__compare__item__hover'}>
                                <ComparisonHypoallergenic data={analysis.comparison.data}/>
                            </div>
                        }
                    </div>

                    {/*natural*/}
                    <div className="analysis__item">
                        {(analysis.comparison.data.natural1 || analysis.comparison.data.natural2) &&
                            <div className={'wrapper__compare__item'}>
                                <div className={'compare__item'} id={'natural'}>
                                    {analysis.comparison.data.natural1 ?
                                        <NaturalCard natural={analysis.comparison.data.natural1} styleType={false}/>
                                        :
                                        <ComparisonNoInfo/>
                                    }
                                    <div className={'compare__content__name'}>
                                        НАТУРАЛЬНОСТЬ
                                    </div>
                                    {analysis.comparison.data.natural2 ?
                                        <NaturalCard natural={analysis.comparison.data.natural2} styleType={false}/>
                                        :
                                        <ComparisonNoInfo/>
                                    }
                                </div>
                            </div>
                        }
                    </div>

                    {/*Эффекты*/}
                    <div className={'analysis__item'}>
                        {(analysis.comparison.shared_effects ||
                                analysis.comparison.unique_effects1 ||
                                analysis.comparison.unique_effects2) &&
                            <div>
                                <div className={'analysis__section_name'}>
                                    <h1><mark>Действие средств</mark></h1>
                                    <p>- компоненты перечислены по убыванию интенсивности воздействия</p>
                                </div>
                                <div className={'analysis__item'}>
                                    <div className={'wrapper__compare__item'}>
                                        <ComparisonEffects comparison={analysis.comparison}/>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>

                    {/*Негативные эффекты*/}
                    <div className={'analysis__item'}>
                        {(analysis.comparison.shared_side_effects ||
                                analysis.comparison.unique_side_effects1 ||
                                analysis.comparison.unique_side_effects2) &&
                            <div>
                                <div className={'analysis__section_name'}>
                                    <h1>
                                        <mark>Побочные эффекты</mark>
                                    </h1>
                                    <p>- возможное негативное воздействие средства на кожу
                                        (интенсивность и возможность проявляения <mark>индивидуальны</mark>)
                                    </p>
                                </div>
                                <div className={'analysis__item'}>
                                    <div className={'wrapper__compare__item'}>
                                        <ComparisonNegEffects comparison={analysis.comparison}/>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>

                    {/*Ингредиенты*/}
                    <div className={'analysis__item'}>
                        {((analysis.comparison.shared_ingredients && analysis.comparison.shared_ingredients.length > 0) ||
                            (analysis.comparison.unique_ingredients1 && analysis.comparison.unique_ingredients1.length > 0) ||
                            (analysis.comparison.unique_ingredients2 && analysis.comparison.unique_ingredients2.length > 0)) &&
                            <div>
                                <div className={'analysis__section_name'}>
                                    <h1>
                                        <mark>Ингредиенты</mark>
                                    </h1>
                                </div>
                                <div className={'analysis__item'}>
                                    <ComparisonIngrCard comparison={analysis.comparison} />
                                </div>
                            </div>
                        }
                    </div>


                    <div className={'analysis__item'}>

                    </div>
                </div>
                :
                <div className={'analysis__item'}>
                    <h1><mark>Анализируемый состав</mark></h1>
                    <div className={''}>
                        <RecognizedCard ingrs={analysis.comparison.ingrs1}/>
                        <RecognizedCard ingrs={analysis.comparison.ingrs2}/>
                    </div>

                    <p>К сожалению, ни один ингредиент в составе не расознался. Проверьте состав на наличие опечаток и повторите попытку.</p>
                </div>
            }
        </div>
    );
};

export default CompareAnalysis;