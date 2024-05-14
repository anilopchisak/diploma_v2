import React, {useState, useContext, useEffect} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import {LOADING_STATUS} from "../../store/storeUtils";

import SearchInput from "../../components/SearchInput/SearchInput";
import "./ComponentSearch.css"

import {PiCaretDown} from "react-icons/pi";
import IngrStore from "../../store/IngrStore";
import {useNavigate} from "react-router-dom";
import {INGR_DETAIL_ROUTE} from "../../utils/consts";
import ComponentSearchItem from "../../components/ComponentSearchItem/ComponentSearchItem";


const ComponentSearch = observer(() => {
    const [property, setProperty] = useState('');
    const {ingr: IngrStore} = useContext(Context);

    if (!IngrStore) return null;

    useEffect(() => {
        if ([LOADING_STATUS.SUCCESS, LOADING_STATUS.LOADING].includes(IngrStore.ingrsLoadingStatus)) return;
        IngrStore.fetchIngrs();
    }, [])

    const onPropertyChange = (property) => {
        setProperty(property);
    }

    return (
        <div className={"wrapper"}>
            <div className={'input__name'}><h3>ПОИСК КОМПОНЕНТА</h3></div>
            <div className={"wrapper__search"}>
                <div className={"search__input"}>
                    <SearchInput/>

                    <div className={"search__input__select"}>
                        <div><label>Полезный эффект</label></div>

                        <div className={"wrapper__search__input__dropdown"}>
                            <select className={"search__input__dropdown"}
                                    onChange={(event) => onPropertyChange(parseFloat(event.target.value))}>
                                <option value={property} name={"property"}>Не выбрано</option>
                                {
                                    IngrStore.property.map( property =>
                                        <option value={property.id} key={property.id}>
                                            {property.name}
                                        </option>
                                    )
                                }
                            </select>

                            <div className={"search__input__dropdown__icon"}>
                                <PiCaretDown/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"search__list"}>
                    {IngrStore.ingr.map( ingr =>
                        <ComponentSearchItem key={ingr.id} ingr={ingr}/>
                    )}
                </div>
            </div>
        </div>
    );
});

export default ComponentSearch;