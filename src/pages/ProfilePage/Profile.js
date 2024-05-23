import React, {useContext, useEffect} from 'react';
import './Profile.css';
import {FAVS_ROUTE, HIST_ROUTE, LOGIN_ROUTE} from "../../utils/consts";
import HistoryProfile from "../../components/Profile/HistoryProfile/HistoryProfile";
import FavoritesProfile from "../../components/Profile/FavoritesProfile/FavoritesProfile";
import NavbarProfile from "../../components/Profile/NavbarProfile/NavbarProfile";
import {PiClockClockwise, PiHeart} from "react-icons/pi";
import {NavLink, useNavigate} from "react-router-dom";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import {LOADING_STATUS} from "../../store/storeUtils";

const Profile = observer(() => {
    const isOption = window.location.pathname === HIST_ROUTE;
    const {user} = useContext(Context);
    const navigate = useNavigate();

    if(!user) return null;

    const handleLogout = async () => {
        await user.logout();
        navigate(LOGIN_ROUTE);
    }

    useEffect(() => {
        if (user && [LOADING_STATUS.SUCCESS, LOADING_STATUS.LOADING].includes(user.historyLoadingStatus)) return;
        if ([LOADING_STATUS.SUCCESS, LOADING_STATUS.LOADING].includes(user.favsLoadingStatus)) return;
        const fetchHist = async () => {
            try {
                await user.fetchHistory('history');
            } catch (err) {
                console.log(err);
            }
        };
        const fetchFavorites = async () => {
            try {
                await user.fetchFavs('favorites');
            } catch (err) {
                console.log(err);
            }
        }
        fetchHist();
        fetchFavorites();
    }, [user]);

    return (
        <div className="wrapper">
            <div className="input__name"><h3>ПРОФИЛЬ</h3></div>

            <div className="navbarProfile__container">
                <div className="navProfile__item">
                    <div className="navProfile__link">
                        <PiHeart className="linkProfile__img" />
                        <NavLink to={FAVS_ROUTE} className="linkProfile__text nav__link">Избранное</NavLink>
                    </div>
                </div>
                <div className="navProfile__item">
                    <div className="navProfile__link">
                        <PiClockClockwise className="linkProfile__img" />
                        <NavLink to={HIST_ROUTE} className="linkProfile__text nav__link">История поиска</NavLink>
                    </div>
                </div>
                <div className="navProfile__item">
                    <button type="button" className="input__btn" id="auth__btn" onClick={handleLogout}>
                        Выйти из системы
                    </button>
                </div>
            </div>


            {isOption ?
                <div className={"wrapper"}>
                    <div className={'profile-tab'}><h1>История анализированных составов</h1></div>
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
                        <HistoryProfile user={user}/>
                    }
                </div>
                :
                <div className={"wrapper"}>
                    <div className={'profile-tab'}><h1>Избранные составы</h1></div>
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
                        <FavoritesProfile user={user}/>
                    }
                </div>
            }
        </div>
    );
});

export default Profile;
