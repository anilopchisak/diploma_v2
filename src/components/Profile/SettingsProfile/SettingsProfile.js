import React, {useState} from 'react';
import "./SettingsProfile.css";

const SettingsProfile = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [passwordOld, setPasswordOld] = useState('');
    const [passwordNew, setPasswordNew] = useState('');

    const handleSave = () => {
        console.log("save");
    }

    return (
        <div className={"settings__wrapper"}>
            <div className={"settings__wrapper__form"}>
                <div className={"settings__input"}>
                    <h3 className={"settings__input__name"}>Смена пароля</h3>
                    <ul className={"input__auth__form"}>
                        <li>
                            <input
                                type="password"
                                placeholder="Старый пароль"
                                value={passwordOld}
                                className={"input__auth__place"}
                                onChange={(e) => setPasswordOld(e.target.value)}
                            />
                        </li>
                        <li>
                            <input
                                type="password"
                                placeholder="Новый пароль"
                                value={passwordNew}
                                className={"input__auth__place"}
                                onChange={(e) => setPasswordNew(e.target.value)}
                            />
                        </li>
                    </ul>
                </div>

                <div className={"settings__input"}>
                    <h3 className={"settings__input__name"}>Смена email</h3>
                    <ul className={"input__auth__form"}>
                        <li>
                            <input
                                type="email"
                                placeholder="Email"
                                value={email}
                                className={"input__auth__place"}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </li>
                    </ul>
                </div>

                <div className={"input__auth__btn"} id={"settings"}>
                    <button className={'input__btn'} onClick={handleSave}>
                        Сохранить изменения
                    </button>
                </div>
            </div>

        </div>
    );
};

export default SettingsProfile;