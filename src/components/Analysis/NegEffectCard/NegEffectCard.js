import React, {useState} from 'react';
import './NegEffectCard.css'
import '../../Accordion/Accordion.css'
import NegEffectCardItem from "./NegEffectCardItem";

const NegEffectCard = ({analysis}) => {
    const [openIds, setOpenIds] = useState({}); // состояние каждого аккордеона.

    const clickHandler = (side_effect_index) => {
        setOpenIds(prevOpenIds => ({
            ...prevOpenIds,
            [`${side_effect_index}`]: !prevOpenIds[`${side_effect_index}`]
        }));
    };

    return (
        <div className={'neg_effect__intensity'}>
            {analysis.analysis.side_effects.map((side_effect, side_effect_index) => {
                const isOpen = openIds[`${side_effect_index}`];
                return(
                    <NegEffectCardItem
                        key={side_effect_index}
                        isOpen={isOpen}
                        onClick={() => clickHandler(side_effect_index)}
                        side_effect={side_effect}
                    />
                );
            })}
        </div>
    );
};

export default NegEffectCard;