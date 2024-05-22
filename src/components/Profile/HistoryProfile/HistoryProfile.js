import React, {useContext, useEffect, useState} from 'react';
import {Context} from "../../../index";
import "./HistoryProfile.css"
import {LOADING_STATUS} from "../../../store/storeUtils";
import UserStore from "../../../store/UserStore";
import { PiHeart } from "react-icons/pi";
import IngrDetailItem from "../../IngrDetail/IngrDetailItem";
import {observer} from "mobx-react-lite";

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
    const {user} = useContext(Context);

    useEffect(() => {
        if (user && [LOADING_STATUS.SUCCESS, LOADING_STATUS.LOADING].includes(user.historyLoadingStatus)) return;
        const fetchHist = async () => {
            try {
                await user.fetchHistory('history');
            } catch (err) {
                console.log(err);
            }
        };
        fetchHist();
    }, [user]);

    if(!user) return null;

    return (
        <div className={"history__wrapper"}>
            {
                user.historyLoadingStatus === LOADING_STATUS.LOADING && "Loading..."
            }
            {
                user.historyLoadingStatus === LOADING_STATUS.ERROR && "Error"
            }
            {
                user.historyLoadingStatus === LOADING_STATUS.IDLE && "No data"
            }
            {
                user.historyLoadingStatus === LOADING_STATUS.SUCCESS &&
                user.history &&
                <div className={"history__row"}>
                    <div className={"history__grid"}>
                        {!user.history ?
                            'У вас еще нет истории поиска'
                            :
                            <div>
                                {user.history.records.map(hist =>
                                    <HistoryItem key={hist.id} favs={hist}/>
                                )}
                            </div>
                        }
                    </div>
                </div>
            }

        </div>
    );
};

export default HistoryProfile;