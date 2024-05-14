import React, {useContext, useState} from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import {observer} from "mobx-react-lite";

import {Context} from "../../index";
import {LOGIN_ROUTE, PROFILE_ROUTE, REG_ROUTE} from "../../utils/consts";

import "./RegAuth.css";
import "../../components/IngredientListChecker/IngredientListInput.css";

const RegAuth = observer (() => {
    const isLogin = window.location.pathname === LOGIN_ROUTE
    const {user} = useContext(Context);
    const navigate = useNavigate();
    const [login, setLogin] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordCheck, setPasswordCheck] = useState('');

    const checkData = async (login, username, email, password) => {
        try{
            if (isLogin){
                await user.login(login, password);
                // await user.login(login, password);
                // await login(username, email, password);
                // check().then(data =>{
                //     user.setUser(true);
                //     user.setIsAuth(true);
                // });
                alert("Вы успешно вошли в систему.");

            } else {
                await user.registration(username, email, password);
                // await registration(login, password);
                // check().then(data =>{
                //     user.setUser(true);
                //     user.setIsAuth(true);
                // });
                alert("Вы успешно зарегистрировались и вошли в систему.");
            }
            navigate(PROFILE_ROUTE);
        } catch(e){
            alert(e.response.data.message);
        }
    }

    return (
        <div className={"wrapper"}>
            <div className={'input__name'}><h3>
                { isLogin ?
                    "ВХОД"
                    :
                    "РЕГИСТРАЦИЯ"
                }
            </h3></div>

            <div className={"wrapper__input"}>

                <div className={"wrapper__regauth__input"}>
                    <form className={'regauth__card'}>
                        { isLogin ?
                            <div className={"auth__acccheck"}>Нет аккаунта?
                                <NavLink to={REG_ROUTE} className={'navlink__auth'}>Зарегистрироваться</NavLink>
                            </div>
                            :
                            <div className={"auth__acccheck"}>Есть аккаунт?
                                <NavLink to={LOGIN_ROUTE} className={'navlink__auth'}>Войти</NavLink>
                            </div>
                        }
                        { isLogin ?
                            <ul className={"input__auth__form"}>
                                <li>
                                    <input
                                        type="text"
                                        placeholder="Имя пользователя или email"
                                        className={"input__auth__place"}
                                        value={username}
                                        onChange={(e) => setLogin(e.target.value)}
                                    />
                                </li>
                                <li>
                                    <input
                                        type="password"
                                        placeholder="Пароль"
                                        value={password}
                                        className={"input__auth__place"}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </li>
                            </ul>
                            :
                            <ul className={"input__auth__form"}>
                                <li>
                                    <input
                                        type="text"
                                        placeholder="Имя пользователя"
                                        value={username}
                                        className={"input__auth__place"}
                                        onChange={(e) => setUsername(e.target.value)}
                                    />
                                </li>
                                <li>
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        value={email}
                                        className={"input__auth__place"}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </li>
                                <li>
                                    <input
                                        type="password"
                                        placeholder="Пароль"
                                        value={password}
                                        className={"input__auth__place"}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </li>
                                <li>
                                    <input
                                        type="password"
                                        placeholder="Повторите пароль"
                                        value={passwordCheck}
                                        className={"input__auth__place"}
                                        onChange={(e) => setPasswordCheck(e.target.value)}
                                    />
                                </li>
                            </ul>
                        }
                        <div className={"input__auth__btn"}>
                            <button className={'input__btn'} id={"auth__btn"} onClick={checkData}>
                                { isLogin ?
                                    'Войти'
                                    :
                                    'Зарегистрироваться'
                                }
                            </button>
                        </div>
                    </form>
                </div>
                <div className={"wrapper__input2"}>
                    <div className={"wrapper__instruction"}>
                        <div className={"name__instruction"}>Что дает регистрация?</div>
                        <div className={"list__instructions"}>
                            <div className={"list__instruction__name"}><mark>История поиска</mark></div>
                            <div className={"list__instruction__item"}>Захотели снова прочитать анализ? Посмотрите историю поиска!</div>
                        </div>
                        <div className={"list__instructions"}>
                            <div className={"list__instruction__name"}><mark>Избранные составы</mark></div>
                            <div className={"list__instruction__item"}>Быстрый доступ к любимым составам, чтобы были всегда под рукой</div>
                        </div>
                        <div className={"list__instructions"}>
                            <div className={"list__instruction__name"}><mark>Более удобный ввода составов</mark></div>
                            <div className={"list__instruction__item"}>Пользуйтесь подсказками при вводе составов для ускорения анализа и сравнения!</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default RegAuth;