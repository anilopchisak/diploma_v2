import React, {useContext, useEffect, useState} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import {LOADING_STATUS} from "../../store/storeUtils";

import SearchInput from "../../components/SearchInput/SearchInput";
import "./ComponentSearch.css"

import {PiCaretDown} from "react-icons/pi";
import ComponentSearchItem from "../../components/ComponentSearchItem/ComponentSearchItem";

const ComponentSearch = observer(() => {
    const { ingr: IngrStore } = useContext(Context);
    const [property, setProperty] = useState('');
    const [search, setSearch] = useState('');
    // console.log(property);

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
    const onSearchChange = (search) => {
        setSearch(search);
    }

    return (
        <div className={"wrapper"}>
            <div className={'input__name'}><h3>ПОИСК КОМПОНЕНТА</h3></div>
            <div className={"wrapper__search"}>
                <div className={"search__input"}>
                    <SearchInput setSearch={onSearchChange}/>

                    <div className={"search__input__select"}>
                        <div><label>Полезный эффект</label></div>

                        <div className={"wrapper__search__input__dropdown"}>
                            <select className={"search__input__dropdown"}
                                    onChange={(event) => onPropertyChange(event.target.value)}> {/* Удалить parseFloat */}
                                <option value={''} name={"property"}>не выбрано</option>
                                {
                                    IngrStore.property.map((property, propertyIndex) =>
                                        <option
                                            value={property}
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
                            {property ?
                                <div>
                                    {IngrStore.ingr.ingredients.filter((item) =>
                                            item.synonyms.some((item2) =>
                                                item2.toLowerCase().includes(search)
                                            ) && item.effects.some((item3) =>
                                                item3.toLowerCase().includes(property)
                                            )
                                    ).map((ingr, ingrIndex) => (
                                        <ComponentSearchItem key={ingrIndex} ingr={ingr}/>
                                    ))}
                                </div>
                                :
                                <div>
                                    {IngrStore.ingr.ingredients.filter((item) =>
                                        item.synonyms.some((item2) =>
                                            item2.toLowerCase().includes(search)
                                        )
                                    ).map((ingr, ingrIndex) => (
                                        <ComponentSearchItem key={ingrIndex} ingr={ingr}/>
                                    ))}
                                </div>
                            }
                        </div>

                    }
                </div>
            </div>
        </div>
    );
});

export default ComponentSearch;

// {/*{IngrStore.ingr.ingredients.map((ingr, ingrIndex) => (*/}
// {/*    <ComponentSearchItem key={ingrIndex} ingr={ingr}/>*/}
// {/*))}*/}
// {/*{IngrStore.ingr.ingredients.filter((item) => {*/}
// {/*    handleSearch(item)*/}
// {/*}).map((ingr, ingrIndex) => (*/}
// {/*    <ComponentSearchItem key={ingrIndex} ingr={ingr}/>*/}
// {/*))}*/}
