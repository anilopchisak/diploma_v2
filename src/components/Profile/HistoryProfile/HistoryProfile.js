import React, {useContext, useEffect, useState} from 'react';
import {Context} from "../../../index";
import "./HistoryProfile.css"
import {LOADING_STATUS} from "../../../store/storeUtils";
import UserStore from "../../../store/UserStore";
import { PiHeart } from "react-icons/pi";
import IngrDetailItem from "../../IngrDetail/IngrDetailItem";
import {observer} from "mobx-react-lite";
import capitalizeFirstLetter from "../../capitalizeFirstLetter";
import DateConverter from "../DateConverter";

const HistoryItem = ({history}) => {
    return(
        <div className={"history__item"}>
            <div className={"icon__fav__wrapper"}><PiHeart className={"icon__fav"}/></div>
            <DateConverter dateString={history.date_time}/>
            <div>
                {history.ingrs && history.ingrs.ingrs.length > 0 &&
                    <p>
                        {history.ingrs.ingrs.map((ingr_name, ingr_nameIndex) => {
                            const style = {
                                paddingRight: '10px'
                            }
                            const displayName = capitalizeFirstLetter(ingr_name.ingr_name);

                            return (
                                <span key={ingr_nameIndex} style={style}>
                                        {displayName},
                                    </span>
                            );
                        })}
                    </p>
                }
            </div>

        </div>
    );
}

const HistoryProfile = ({user}) => {

    return (
        <div className={"history__wrapper"}>
            {user.history.records.length === 0 ?
                'У вас еще нет истории поиска'
                :
                <div>
                    {user.history.records.map((hist, histIndex) =>
                        <HistoryItem key={histIndex} history={hist}/>
                    )}
                </div>
            }
        </div>
    );
};

export default HistoryProfile;