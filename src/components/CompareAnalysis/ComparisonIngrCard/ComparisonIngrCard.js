import React, {useState} from 'react';
import ComparisonNegEffectsItem from "../ComparisonNegEffects/ComparisonNegEffectsItem";
import ComparisonEffectsItem from "../ComparisonEffects/ComparisonEffectsItem";
import ComparisonIngrCardItem from "./ComparisonIngrCardItem";

const ComparisonIngrCard = ({comparison}) => {
    const [openIdsShared, setOpenIdsShared] = useState({});
    const [openIdsUnique1, setOpenIdsUnique1] = useState({});
    const [openIdsUnique2, setOpenIdsUnique2] = useState({});
    const clickHandler = (ingrIndex, setOpenIds) => {
        setOpenIds(prevOpenIds => ({
            ...prevOpenIds,
            [`${ingrIndex}`]: !prevOpenIds[`${ingrIndex}`]
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
            {comparison.shared_ingredients.map((ingr, ingrIndex) => {
                const isOpen = openIdsShared[`${ingrIndex}`];
                return(
                    <ComparisonIngrCardItem
                        isOpen={isOpen}
                        onClick={() => clickHandler(ingrIndex, set_openShared)}
                        ingr={ingr}
                        shared={true}
                        key={ingrIndex}
                    />
                );
            })}
            <div className={'comapre_ingrs_unique'}>
                <div className={'comapre_ingrs_unique_item'} id={'unique1'}>
                    {comparison.unique_ingredients1.map((ingr, ingrIndex) => {
                        const isOpen = openIdsUnique1[`${ingrIndex}`];
                        return(
                            <ComparisonIngrCardItem
                                isOpen={isOpen}
                                onClick={() => clickHandler(ingrIndex, set_openUnique1)}
                                ingr={ingr}
                                shared={false}
                                key={ingrIndex}
                            />
                        );
                    })}
                </div>

                <div className={'comapre_ingrs_unique_item'}>
                    {comparison.unique_ingredients2.map((ingr, ingrIndex) => {
                        const isOpen = openIdsUnique2[`${ingrIndex}`];
                        return(
                            <ComparisonIngrCardItem
                                isOpen={isOpen}
                                onClick={() => clickHandler(ingrIndex, set_openUnique2)}
                                ingr={ingr}
                                shared={false}
                                key={ingrIndex}
                            />
                        );
                    })}
                </div>

            </div>
        </div>
    );
};

export default ComparisonIngrCard;