import {makeAutoObservable} from "mobx";

import {check, fetchFavs, fetchHistory, login, logout, registration} from "../http/userAPI";
import {LOADING_STATUS} from "./storeUtils";

class UserStore {
    userLoadingStatus = LOADING_STATUS.IDLE;
    favsLoadingStatus = LOADING_STATUS.IDLE;
    historyLoadingStatus = LOADING_STATUS.IDLE;

    constructor() {
        this._isAuth = false;
        this._user = {};
        this._history = [];
        this._favs = [];

        makeAutoObservable(this); // следим за изменениями переменных
    }

    // Actions - функции, которые меняют состояния (переменных)
    setIsAuth(bool) {
        this._isAuth = bool;
    }
    setUser(user) {
        this._user = user;
    }
    setHistory(history) {
        this._history = history;
    }
    setFavs(favs) {
        this._favs = favs;
    }

    // вызываются только в случае если переменная была изменена
    get isAuth() {
        return this._isAuth;
    }
    get user() {
        return this._user;
    }
    get history() {
        return this._history;
    }
    get favs() {
        return this._favs;
    }

    async register(username, email, pass, pass2) {
        try {
            const response = await registration(username, email, pass, pass2);
            console.log(response);
        } catch (e) {
            console.log(e.message);
        }
    }

    async checkAuth() {
        try {
            const response = await check(); // Вызываем функцию logout из userAPI.js
            console.log(response);
            localStorage.setItem('token', response.access); // Используем accessToken
            this.setIsAuth(true);
            this.setUser(response.user);

        } catch (e) {
            console.log(e.message);
        }
    }
    async login(username, email, pass) {
        try {
            const response = await login(username, email, pass);
            console.log(response);
            // localStorage.setItem('token', response.access); // Используем accessToken
            this.setIsAuth(true);
            this.setUser(response.user);

        } catch (e) {
            console.log(e.response?.data?.message);
        }
    }
    async logout() {
        try {
            await logout(); // Вызываем функцию logout из userAPI.js
            localStorage.removeItem('token');
            this.setIsAuth(false);
            this.setUser({});
        } catch (e) {
            console.log(e.response?.data?.message);
        }
    }

    async fetchFavs(option) {
        this.favsLoadingStatus = LOADING_STATUS.LOADING;

        try {
            const response = await fetchFavs(option);
            this.setFavs(response);
            this.favsLoadingStatus = LOADING_STATUS.SUCCESS;
        } catch(e) {
            console.log(e.message);
            this.favsLoadingStatus = LOADING_STATUS.ERROR;
        }
    }

    async fetchHistory(option) {
        this.historyLoadingStatus = LOADING_STATUS.LOADING;

        try {
            const response = await fetchHistory(option);
            this.setHistory(response);
            this.historyLoadingStatus = LOADING_STATUS.SUCCESS;
        } catch(e) {
            console.log(e.message);
            this.historyLoadingStatus = LOADING_STATUS.ERROR;
        }
    }

}

export default UserStore;