import React, {useContext, useEffect} from 'react';
import "../HistoryProfile/HistoryProfile.css"
import {LOADING_STATUS} from "../../../store/storeUtils";
import UserStore from "../../../store/UserStore";
import { PiHeart } from "react-icons/pi";
import {Context} from "../../../index";
import {observer} from "mobx-react-lite";
import capitalizeFirstLetter from "../../capitalizeFirstLetter";
import DateConverter from "../DateConverter";

const FavItem = ({favs}) => {
    return(
        <div className={"history__item"}>
            <div className={"icon__fav__wrapper"}><PiHeart className={"icon__fav"}/></div>
            <DateConverter dateString={favs.date_time}/>
            {favs.ingrs && favs.ingrs.ingrs.length > 0 &&
                <p>
                    {/*<mark className={"card__item__name"}>Синонимы:</mark>*/}
                    {favs.ingrs.ingrs.map((ingr_name, ingr_nameIndex) => {
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
    );
}

const FavoritesProfile = ({user}) => {

    return (
        <div className={"history__wrapper"}>
            {user.favs.records.length === 0 ?
                'У вас еще нет избранных составов :('
                :
                <div>
                    {user.favs.records.map((fav, favIndex) =>
                        <FavItem key={favIndex} favs={fav}/>
                    )}
                </div>
            }
        </div>
    );
};

export default FavoritesProfile;