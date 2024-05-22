import React from 'react';
import './RecognizedCard.css'

const RecognizedCard = ({ingrs}) => {
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    return (
        <div className={'ingr_recognized'}>
            {ingrs.map((ingr, ingrIndex) => {
                const style = {
                    color: ingr.recognized ? 'green' : 'red'
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