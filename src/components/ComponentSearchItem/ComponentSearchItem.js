import React, {useEffect} from 'react';
import "./ComponentSearchItem.css"
import {INGR_CARD_ROUTE} from "../../utils/consts";
import {useNavigate} from "react-router-dom";

const ComponentSearchItem = ({ingr}) => {

    const navigate = useNavigate();
    const handleClick = () => { navigate(INGR_CARD_ROUTE + ingr.id); }

    return (
        <div
            key={ingr.inci_id}
            onClick = {handleClick}
            className={"comp__search__item"}
        >
            <div className={"comp__search__item__name"}>
                {ingr.inci_name.toUpperCase()}
            </div>
            <div className={"comp__search__item__desc"}>{ingr.synonyms}</div>
        </div>

    );
};

export default ComponentSearchItem;