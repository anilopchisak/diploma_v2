import React, {useState} from 'react';
import NegEffectCardItem from "../NegEffectCard/NegEffectCardItem";
import IngrCardItem from "./IngrCardItem";

const IngrCard = ({ingrs}) => {
    const [openIds, setOpenIds] = useState({}); // состояние каждого аккордеона.

    const clickHandler = (ingr_index) => {
        setOpenIds(prevOpenIds => ({
            ...prevOpenIds,
            [`${ingr_index}`]: !prevOpenIds[`${ingr_index}`]
        }));
    };

    return (
        <div className={'neg_effect__intensity'}>
            {ingrs.map((ingr, ingr_index) => {
                const isOpen = openIds[`${ingr_index}`];
                return(
                    <IngrCardItem
                        key={ingr_index}
                        isOpen={isOpen}
                        onClick={() => clickHandler(ingr_index)}
                        ingr={ingr}
                    />
                );
            })}
        </div>
    );
};

export default IngrCard;