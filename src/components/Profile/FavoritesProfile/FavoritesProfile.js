import React, {useContext, useEffect} from 'react';
import "../HistoryProfile/HistoryProfile.css"
import {LOADING_STATUS} from "../../../store/storeUtils";
import UserStore from "../../../store/UserStore";
import { PiHeart } from "react-icons/pi";
import {Context} from "../../../index";
import {observer} from "mobx-react-lite";

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
    const {user} = useContext(Context);

    useEffect( () => {
        if ([LOADING_STATUS.SUCCESS, LOADING_STATUS.LOADING].includes(user.favsLoadingStatus)) return;
        const fetchFavorites = async () => {
            try {
                await user.fetchFavs('favorites');
            } catch (err) {
                console.log(err);
            }
        }
        fetchFavorites();
    }, [user]);

    return (
        <div className={"history__wrapper"}>
            {
                user.favsLoadingStatus === LOADING_STATUS.LOADING && "Loading..."
            }
            {
                user.favsLoadingStatus === LOADING_STATUS.ERROR && "Error"
            }
            {
                user.favsLoadingStatus === LOADING_STATUS.IDLE && "No data"
            }
            {
                user.favsLoadingStatus === LOADING_STATUS.SUCCESS &&
                user.favs &&
                <div className={"history__row"}>
                    <div className={"history__grid"}>
                        {!user.favs ?
                            'У вас еще нет избранных составов'
                            :
                            <div>
                                {user.favs.records.map(fav =>
                                    <FavItem key={fav.id} favs={fav}/>
                                )}
                            </div>
                        }
                    </div>
                </div>
            }
        </div>
    );
};

export default FavoritesProfile;