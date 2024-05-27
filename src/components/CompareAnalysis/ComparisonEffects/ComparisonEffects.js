import React, {useState} from 'react';
import ComparisonEffectsItem from "./ComparisonEffectsItem";
import ComparisonNegEffectsItem from "../ComparisonNegEffects/ComparisonNegEffectsItem";

const ComparisonEffects = ({comparison}) => {
    const [openIdsShared, setOpenIdsShared] = useState({});
    const [openIdsUnique1, setOpenIdsUnique1] = useState({});
    const [openIdsUnique2, setOpenIdsUnique2] = useState({});
    const clickHandler = (effectIndex, setOpenIds) => {
        setOpenIds(prevOpenIds => ({
            ...prevOpenIds,
            [`${effectIndex}`]: !prevOpenIds[`${effectIndex}`]
        }));
    };

    const set_openShared = (a) => {
        setOpenIdsShared(a);
    }
    const set_openUnique1 = (a) => {
        setOpenIdsUnique1(a);
    }
    const set_openUnique2 = (a) => {
        setOpenIdsUnique2(a);
    }

    return (
        <div>
            {comparison.shared_effects.map((effect, effectIndex) => {
                const isOpen = openIdsShared[`${effectIndex}`];
                return(
                        <ComparisonEffectsItem
                            isOpen={isOpen}
                            onClick={() => clickHandler(effectIndex, set_openShared)}
                            effect={effect}
                            unique_effect={null}
                            unique_eff_num={null}
                            key={effectIndex}
                        />
                    );
            })}
            {comparison.unique_effects1.map((effect, effectIndex) => {
                const isOpen = openIdsUnique1[`${effectIndex}`];
                return(
                    <ComparisonEffectsItem
                        isOpen={isOpen}
                        onClick={() => clickHandler(effectIndex,set_openUnique1)}
                        effect={null}
                        unique_effect={effect}
                        unique_eff_num={1}
                        key={effectIndex}
                    />
                );
            })}
            {comparison.unique_effects2.map((effect, effectIndex) => {
                const isOpen = openIdsUnique2[`${effectIndex}`];
                return(
                    <ComparisonEffectsItem
                        isOpen={isOpen}
                        onClick={() => clickHandler(effectIndex, set_openUnique2)}
                        effect={null}
                        unique_effect={effect}
                        unique_eff_num={2}
                        key={effectIndex}
                    />
                );
            })}
        </div>
    );
};

export default ComparisonEffects;