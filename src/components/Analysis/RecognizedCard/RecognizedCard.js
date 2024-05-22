import React from 'react';
import './RecognizedCard.css'
import capitalizeFirstLetter from "../../capitalizeFirstLetter";

const RecognizedCard = ({ingrs}) => {

    return (
        <div className={'ingr_recognized'}>
            {ingrs.map((ingr, ingrIndex) => {
                const style = {
                    color: ingr.recognized ? '#470447' : '#8e8787'
                }
                const displayName = capitalizeFirstLetter(ingr.ingr_name);

                return (
                    <span key={ingrIndex} style={style}>
                        {displayName},
                    </span>
                );
            })}
        </div>
    );
};

export default RecognizedCard;