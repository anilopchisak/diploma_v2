import React, {useEffect} from 'react';
import "./ComponentSearchItem.css"
import {INGR_CARD_ROUTE} from "../../utils/consts";
import {useNavigate} from "react-router-dom";
import capitalizeFirstLetter from "../capitalizeFirstLetter";

const ComponentSearchItem = ({ingr}) => {
    const navigate = useNavigate();
    const handleClick = () => {
        const ingr_name = ingr.inci_name.replace(/[\/\\]/g, '_')
        navigate(INGR_CARD_ROUTE + ingr_name);
    }

    return (
        <div
            key={ingr.inci_id}
            onClick = {handleClick}
            className={"comp__search__item"}
        >
            <div className={"comp__search__item__name"}>
                {ingr.inci_name.toUpperCase()}
            </div>
            <div className={"comp__search__item__desc"}>
                {ingr.synonyms.map((synonym, synonymIndex) => {
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
            </div>
        </div>

    );
};

export default ComponentSearchItem;