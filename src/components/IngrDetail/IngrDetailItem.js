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
                    <h1><mark>Синонимы</mark></h1>
                    {ingr.synonyms.ingr_names && ingr.synonyms.ingr_names.length > 0 &&
                        <p className={"card__synonyms"}>
                            {/*<mark className={"card__item__name"}>Синонимы:</mark>*/}
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
                    }
                </div>

                {/*general info*/}
                <div className="card__item">
                    {ingr.source &&
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
                    }
                </div>

                {/*Role in cosmetic*/}
                <div className={"card__item"}>
                    {ingr.types && ingr.types.length > 0 &&
                        <div>
                            <h1><mark>Роль в косметике</mark></h1>
                            {/*<p><mark className={"card__item__name"}>Роль в косметике</mark></p>*/}
                            <div className={'type__intensity'}>
                                {ingr.types.map((item, itemIndex) => {
                                    if( item.concentration === '0') {
                                        return(
                                            <div key={itemIndex} className={'type__column'}>
                                                {item.type.map((type, typeIndex) =>
                                                    <div
                                                        key={typeIndex}
                                                        className={'type_name'}
                                                        data-tooltip-id="tooltip"
                                                        data-tooltip-content={type.type_description}
                                                        data-tooltip-place="bottom">
                                                        {type.type_name}
                                                    </div>
                                                )}
                                            </div>
                                        )
                                    }
                                    else {
                                        return(
                                            <div key={itemIndex} className={'type__column'}>
                                                <div className={'effect__item__name'}>
                                                    {item.concentration}
                                                </div>
                                                {item.type.map((type, typeIndex) =>
                                                    <div
                                                        key={typeIndex}
                                                        className={'type_name'}
                                                        data-tooltip-id="tooltip"
                                                        data-tooltip-content={type.type_description}
                                                        data-tooltip-place="bottom">
                                                        {type.type_name}
                                                    </div>
                                                )}
                                            </div>
                                        )
                                    }

                                })}
                            </div>
                        </div>
                    }
                </div>

                {/*полезные и неполезные свойства*/}
                <div className={'card__item'}>
                    {(ingr.effects && ingr.effects.length > 0) || (ingr.side_effects && ingr.side_effects.length > 0) ?
                        <div>
                            <h1><mark>Свойства</mark></h1>
                            {/*<p><mark className={"card__item__name"}>Свойства</mark></p>*/}
                            <div className="type__intensity">
                                {ingr.effects && ingr.effects.length > 0 &&
                                    <div>
                                        <div className="type__column">
                                            <p className={'effect__item__name'}>Полезные эффекты</p>
                                            <div>
                                                {ingr.effects.map((effect, effectIndex) =>
                                                    <div key={effectIndex} className={'type_name'}>
                                                        {effect}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                }

                                {ingr.side_effects && ingr.side_effects.length > 0 &&
                                    <div>
                                        <div className="type__column">
                                            <p className={'effect__item__name'}>Негативные эффекты</p>
                                            <div>
                                                {ingr.side_effects.map((side_effect, side_effectIndex) =>
                                                    <div key={side_effectIndex} className={'type_name'}>
                                                        {side_effect}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                        : null
                    }
                </div>
            </div>
        </div>
    );
});

export default IngrDetailItem;