import React, { useState, useEffect } from 'react';
import './Concentrations.css';

const Concentrations = ({ normText, setFinalList }) => {
    const [ingredientsWithConcentration, setIngredientsWithConcentration] = useState([]);

    useEffect(() => {
        setIngredientsWithConcentration(normText);
    }, [normText]);

    const handleChange = (event, ingr) => {
        const { value } = event.target;

        const updatedList = ingredientsWithConcentration.map(item => {
            if (item.ingr_name === ingr) {
                return { ...item, concentration: value };
            }
            return item;
        });

        setFinalList(updatedList);
        setIngredientsWithConcentration(updatedList);
    };

    const listItems = ingredientsWithConcentration.map((ingredient, index) =>
        <li className={"conc__item"} key={index}>
            <div className={"conc__item__input"}>
                <input
                    value={ingredient.concentration}
                    onChange={(event) => handleChange(event, ingredient.ingr_name)}
                    type={"number"}
                    min={"0"}
                />
            </div>
            <div className={"conc__item__ingr"}>{ingredient.ingr_name}</div>
        </li>
    );

    return (
        <div className={"conc__wrapper"}>
            <div className={"conc__instr"}>
                <mark>Введите концентрации ингредиентов (если необходимо):</mark>
            </div>
            <ul className={"conc__list"}>{listItems}</ul>
        </div>
    );
};

export default Concentrations;