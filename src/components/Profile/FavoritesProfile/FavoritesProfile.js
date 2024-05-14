import React, {useContext} from 'react';
import "../HistoryProfile/HistoryProfile.css"
import {LOADING_STATUS} from "../../../store/storeUtils";
import UserStore from "../../../store/UserStore";
import { PiHeart } from "react-icons/pi";
import {Context} from "../../../index";

const FavItem = ({favs}) => {
    return(
        <div key={favs.id} className={"history__item"}>
            <div className={"icon__fav__wrapper"}><PiHeart className={"icon__fav"}/></div>
            <div>{favs.date}</div>
            <div>{favs.list}</div>
        </div>
    );
}

const FavoritesProfile = () => {
    const {user: UserStore} = useContext(Context);

    if (!UserStore) return null;

    return (
        <div className={"history__wrapper"}>
            <div className={"history__row"}>
                <div className={"history__grid"}>
                    {UserStore.favs.map( favs =>
                        <FavItem key={favs.id} favs={favs}/>
                    )}
                </div>
            </div>

        </div>
    );
};

export default FavoritesProfile;