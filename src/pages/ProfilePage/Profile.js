import React, {useState} from 'react';

import NavbarProfile from "../../components/Profile/NavbarProfile/NavbarProfile";
import FavoritesProfile from "../../components/Profile/FavoritesProfile/FavoritesProfile";
import HistoryProfile from "../../components/Profile/HistoryProfile/HistoryProfile";
import SettingsProfile from "../../components/Profile/SettingsProfile/SettingsProfile";

const Profile = () => {
    const [profileTab, setProfileTab] = useState('favorites'); // favorites, history, settings

    const set_profileTab = (profileTab) => {
        setProfileTab(profileTab);
    }

    return (
        <div className={"wrapper"}>
            <div className={'input__name'}><h3>ПРОФИЛЬ</h3></div>

            <NavbarProfile setProfileTab={set_profileTab}/>

            <div className={"profile__content"}>
                {profileTab === "favorites" &&
                    <FavoritesProfile/>
                }
                {profileTab === "history" &&
                    <HistoryProfile/>
                }
                {profileTab === "settings" &&
                    <SettingsProfile/>
                }
            </div>
        </div>
    );
};

export default Profile;