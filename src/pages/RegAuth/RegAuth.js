import React, {useContext, useState} from 'react';
import {NavLink, useNavigate} from "react-router-dom";

import {Context} from "../../index";
import {HIST_ROUTE, LOGIN_ROUTE, PROFILE_ROUTE, REG_ROUTE} from "../../utils/consts";

import "./RegAuth.css";
import "../../components/IngredientListChecker/IngredientListInput.css";
import {observer} from "mobx-react-lite";

const RegAuth = observer(() => {
    const isLogin = window.location.pathname === LOGIN_ROUTE
    const {user} = useContext(Context);
    const navigate = useNavigate();

    const [login, setLogin] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordCheck, setPasswordCheck] = useState('');

    const checkData = async () => {
        try{
            if (isLogin){
                await user.login(username, email, password);
                navigate(HIST_ROUTE);

            } else {
                // console.log(username, email, password, passwordCheck)
                await user.register(username, email, password, passwordCheck);
                alert(" Проверьте свою почту и перейдите по ссылке в отправленном вам письме для завершения регистрации.");
            }
            // navigate(PROFILE_ROUTE);
        } catch(e){
            alert(e.message);
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
                                {/*<li>*/}
                                {/*    <input*/}
                                {/*        type="text"*/}
                                {/*        placeholder="Имя пользователя или email"*/}
                                {/*        className={"input__auth__place"}*/}
                                {/*        value={login}*/}
                                {/*        required*/}
                                {/*        onChange={(e) => setLogin(e.target.value)}*/}
                                {/*    />*/}
                                {/*</li>*/}
                                <li>
                                    <input
                                        type="text"
                                        placeholder="Имя пользователя"
                                        value={username}
                                        autoComplete="username"
                                        className={"input__auth__place"}
                                        required
                                        onChange={(e) => setUsername(e.target.value)}
                                    />
                                </li>
                                <li>
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        value={email}
                                        className={"input__auth__place"}
                                        required
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </li>
                                <li>
                                    <input
                                        type="password"
                                        placeholder="Пароль"
                                        value={password}
                                        autoComplete="current-password"
                                        className={"input__auth__place"}
                                        required
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
                                        autoComplete="username"
                                        className={"input__auth__place"}
                                        required
                                        onChange={(e) => setUsername(e.target.value)}
                                    />
                                </li>
                                <li>
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        value={email}
                                        className={"input__auth__place"}
                                        required
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </li>
                                <li>
                                    <input
                                        type="password"
                                        placeholder="Пароль"
                                        value={password}
                                        autoComplete="new-password"
                                        className={"input__auth__place"}
                                        required
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </li>
                                <li>
                                    <input
                                        type="password"
                                        placeholder="Повторите пароль"
                                        value={passwordCheck}
                                        className={"input__auth__place"}
                                        required
                                        onChange={(e) => setPasswordCheck(e.target.value)}
                                    />
                                </li>
                            </ul>
                        }
                        <div className={"input__auth__btn"}>
                            <button type={'button'} className={'input__btn'} id={"auth__btn"} onClick={checkData}>
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