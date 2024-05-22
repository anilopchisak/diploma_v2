import React from 'react';
import './IngrDetailItem.css'
import { Tooltip } from 'react-tooltip'
import {observer} from "mobx-react-lite";
import ComponentSearchItem from "../ComponentSearchItem/ComponentSearchItem";
import capitalizeFirstLetter from "../capitalizeFirstLetter";
import { TbPaw, TbPawOff } from "react-icons/tb"; // vegan
import {PiFeather, PiFlask, PiFlower, PiFlowerTulip, PiTree, PiVirus} from "react-icons/pi";

const IngrDetailItem = observer(({ingr}) => {

    return (
        <div className={'wrapper'}>
            <div className={"input__name"}
                 data-tooltip-id="tooltip"
                 data-tooltip-content="Название по INCI"
                 data-tooltip-place="bottom">
                <h3>{ingr.inci_name.toUpperCase()}</h3>
            </div>
            <Tooltip id="tooltip" />

            <div className={"wrapper__card"}>
                {/*Synonyms*/}
                <div className={"card__item"}>
                    <p className={"card__synonyms"}>
                        <mark className={"card__item__name"}>Синонимы:</mark>
                        {ingr.synonyms.ingr_names.map((synonym, synonymIndex) => {
                            const style = {
                                paddingRight: '10px'
                            }
                            const displayName = capitalizeFirstLetter(synonym);

                            return (
                                <span key={synonymIndex} style={style}>
                                    {displayName},
                                </span>
                            );
                        })}
                    </p>
                </div>
                {/*general info*/}
                <div className="card__item">
                    <div className={'detail__general_info'}>
                        {ingr.source &&
                            <div className={'detail__item'}>
                                <div className={'general_info__icon__wrapper'}>
                                    {ingr.source === 'Синтетическое происхождение' ?
                                        <PiFlask className={'analysis-icon'}/>
                                        :
                                        <PiTree className={'analysis-icon'}/>
                                    }
                                </div>
                                <div>{ingr.source}</div>
                            </div>
                        }
                        {ingr.source &&
                            <div className={'detail__item'}>
                                <div className={'general_info__icon__wrapper'}>
                                    {ingr.vegan === 'Веганский' ?
                                        <TbPaw className={'analysis-icon'}/>
                                        :
                                        <TbPawOff className={'analysis-icon'}/>
                                    }
                                </div>
                                <div>{ingr.vegan}</div>
                            </div>
                        }
                    </div>

                </div>
                {/*Role in cosmetic*/}
                <div className={"card__item"}>
                    <p><mark className={"card__item__name"}>Роль в косметике</mark></p>
                    <div className={"card__role"}>
                        <div className={"role"}>
                            {ingr.role}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
});

export default IngrDetailItem;