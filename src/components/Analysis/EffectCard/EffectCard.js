import React, {useState} from 'react';
import './EffectCard.css'
import '../../Accordion/Accordion.css'
import EffectCardItem from "./EffectCardItem";

const EffectCard = ({analysis}) => {
    const [openIds, setOpenIds] = useState({}); // состояние каждого аккордеона.

    const clickHandler = (intensityIndex, effectIndex) => {
        setOpenIds(prevOpenIds => ({
            ...prevOpenIds,
            [`${intensityIndex}-${effectIndex}`]: !prevOpenIds[`${intensityIndex}-${effectIndex}`]
        }));
    };

    return(
        <div className={'effect__intensity'}>
            {analysis.analysis.effects.map(
                (intensity, intensityIndex) =>
                { if(intensity && intensity.effect_with_ingrs.length > 0)
                    return(
                        <div className={'effect__item'} key={intensityIndex}>
                            <div className={'effect__item__name'}>{intensity.intensity}</div>
                            {/* accordion */}
                            <div>{intensity.effect_with_ingrs.map((effect, effectIndex) =>
                            {
                                const isOpen = openIds[`${intensityIndex}-${effectIndex}`];
                                return(
                                    <EffectCardItem
                                        key={effectIndex}
                                        isOpen={isOpen}
                                        onClick={() => clickHandler(intensityIndex, effectIndex)}
                                        effect={effect}
                                    />
                                );
                            })}</div>
                        </div>
                    )
                }

            )}
        </div>
    );
};

export default EffectCard;