import React, {useContext, useEffect, useState} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import {LOADING_STATUS} from "../../store/storeUtils";

import SearchInput from "../../components/SearchInput/SearchInput";
import "./ComponentSearch.css"

import {PiCaretDown} from "react-icons/pi";
import ComponentSearchItem from "../../components/ComponentSearchItem/ComponentSearchItem";

const ComponentSearch = observer(() => {
    const [property, setProperty] = useState('');
    const { ingr: IngrStore } = useContext(Context);

    useEffect( () => {
        if ([LOADING_STATUS.SUCCESS, LOADING_STATUS.LOADING].includes(IngrStore.ingrLoadingStatus)) return;
        if ([LOADING_STATUS.SUCCESS, LOADING_STATUS.LOADING].includes(IngrStore.propertyLoadingStatus)) return;
        const fetchIngredients = async () => {
            try {
                await IngrStore.fetchIngr();
            } catch (err) {
                console.log(err);
            }
        }
        fetchIngredients();
    }, []);

    const onPropertyChange = (property) => {
        setProperty(property);
    }

    return (
        <div className={"wrapper"}>
            <div className={'input__name'}><h3>ПОИСК КОМПОНЕНТА</h3></div>
            <div className={"wrapper__search"}>
                <div className={"search__input"}>
                    <SearchInput />

                    <div className={"search__input__select"}>
                        <div><label>Полезный эффект</label></div>

                        <div className={"wrapper__search__input__dropdown"}>
                            <select className={"search__input__dropdown"}
                                    onChange={(event) => onPropertyChange(event.target.value)}> {/* Удалить parseFloat */}
                                <option value={property} name={"property"}>не выбрано</option>
                                {
                                    IngrStore.property.map((property, propertyIndex) =>
                                        <option
                                            value={propertyIndex}
                                            key={propertyIndex}>
                                            {property}
                                        </option>
                                    )
                                }
                            </select>

                            <div className={"search__input__dropdown__icon"}>
                                <PiCaretDown />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"search__list"}>
                    {IngrStore.ingr.length === 0 ?
                        <div>No ingredients found.</div>
                        :
                        <div>
                            {IngrStore.ingr.ingredients.map((ingr, ingrIndex) => (
                                <ComponentSearchItem key={ingrIndex} ingr={ingr} />
                            ))}
                        </div>
                    }
                </div>
            </div>
        </div>
    );
});

export default ComponentSearch;
