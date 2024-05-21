import React from 'react';
import './IngrDetailItem.css'
import { Tooltip } from 'react-tooltip'

const IngrDetailItem = ({ingr}) => {

    return (
        <div className={'wrapper'}>
            <div className={"input__name"}
                 data-tooltip-id="tooltip"
                 data-tooltip-content="Название по INCI"
                 data-tooltip-place="bottom">
                <h3>{ingr.name.toUpperCase()}</h3>
            </div>
            <Tooltip id="tooltip" />

            <div className={"wrapper__card"}>
                <div className={"card__item"}>
                    <p className={"card__synonyms"}><mark className={"card__item__name"}>Синонимы:</mark> {ingr.synonyms}</p>
                </div>
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
};

export default IngrDetailItem;