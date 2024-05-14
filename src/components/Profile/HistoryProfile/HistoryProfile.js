import React, {useContext, useEffect, useState} from 'react';
import {Context} from "../../../index";
import "./HistoryProfile.css"
import {LOADING_STATUS} from "../../../store/storeUtils";
import UserStore from "../../../store/UserStore";
import { PiHeart } from "react-icons/pi";

const HistoryItem = ({history}) => {
    return(
        <div key={history.id} className={"history__item"}>
            <div className={"icon__fav__wrapper"}><PiHeart className={"icon__fav"}/></div>
            <div>{history.date}</div>
            <div>{history.list}</div>
        </div>
    );
}

const HistoryProfile = () => {
    const {user: UserStore} = useContext(Context);

    if (!UserStore) return null;

    // useEffect(() => {
    //     if ([LOADING_STATUS.SUCCESS, LOADING_STATUS.LOADING].includes(IngrStore.ingrsLoadingStatus)) return;
    //     UserStore.fetchIngrs();
    // }, [])

    return (
        <div className={"history__wrapper"}>
            <div className={"history__row"}>
                <div className={"history__grid"}>
                    {UserStore.history.map( history =>
                        <HistoryItem key={history.id} history={history}/>
                    )}
                </div>
            </div>

        </div>
    );
};

export default HistoryProfile;