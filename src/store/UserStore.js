import {makeAutoObservable} from "mobx";

import {check, login, logout, registration} from "../http/userAPI";

class UserStore {

    constructor() {
        this._isAuth = false;
        this._user = {};
        this._history = [
            { id: 1, date: '13:54 16/01/2024', list: 'aqua, caprylic/capric triglyceride, cetearyl glucoside, peg-100 stearate, 1,2-hexanediol, propylene glycol, phenoxyethanol, candida bombicola/glucose/methyl rapeseedate ferment, пэг-40 гидрогенизированное касторовое масло, метилизотиазолинон' },
            { id: 2, date: '13:54 16/01/2024', list: 'aqua, caprylic/capric triglyceride, cetearyl glucoside, peg-100 stearate, 1,2-hexanediol, propylene glycol, phenoxyethanol, candida bombicola/glucose/methyl rapeseedate ferment, пэг-40 гидрогенизированное касторовое масло, метилизотиазолинон' },
            { id: 3, date: '13:54 16/01/2024', list: 'aqua, caprylic/capric triglyceride, cetearyl glucoside, peg-100 stearate, 1,2-hexanediol, propylene glycol, phenoxyethanol, candida bombicola/glucose/methyl rapeseedate ferment, пэг-40 гидрогенизированное касторовое масло, метилизотиазолинон' },
            { id: 4, date: '13:54 16/01/2024', list: 'aqua, caprylic/capric triglyceride, cetearyl glucoside, peg-100 stearate, 1,2-hexanediol, propylene glycol, phenoxyethanol, candida bombicola/glucose/methyl rapeseedate ferment, пэг-40 гидрогенизированное касторовое масло, метилизотиазолинон' },
            { id: 5, date: '13:54 16/01/2024', list: 'aqua, caprylic/capric triglyceride, cetearyl glucoside, peg-100 stearate, 1,2-hexanediol, propylene glycol, phenoxyethanol, candida bombicola/glucose/methyl rapeseedate ferment, пэг-40 гидрогенизированное касторовое масло, метилизотиазолинон' },
            { id: 6, date: '13:54 16/01/2024', list: 'aqua, caprylic/capric triglyceride, cetearyl glucoside, peg-100 stearate, 1,2-hexanediol, propylene glycol, phenoxyethanol, candida bombicola/glucose/methyl rapeseedate ferment, пэг-40 гидрогенизированное касторовое масло, метилизотиазолинон' },
            { id: 7, date: '13:54 16/01/2024', list: 'aqua, caprylic/capric triglyceride, cetearyl glucoside, peg-100 stearate, 1,2-hexanediol, propylene glycol, phenoxyethanol, candida bombicola/glucose/methyl rapeseedate ferment, пэг-40 гидрогенизированное касторовое масло, метилизотиазолинон' },
            { id: 8, date: '13:54 16/01/2024', list: 'aqua, caprylic/capric triglyceride, cetearyl glucoside, peg-100 stearate, 1,2-hexanediol, propylene glycol, phenoxyethanol, candida bombicola/glucose/methyl rapeseedate ferment, пэг-40 гидрогенизированное касторовое масло, метилизотиазолинон' }
        ];
        this._favs = [
            { id: 1, date: '13:54 16/01/2024', list: 'aqua, caprylic/capric triglyceride, cetearyl glucoside, peg-100 stearate, 1,2-hexanediol, propylene glycol, phenoxyethanol, candida bombicola/glucose/methyl rapeseedate ferment, пэг-40 гидрогенизированное касторовое масло, метилизотиазолинон' },
            { id: 2, date: '13:54 16/01/2024', list: 'aqua, caprylic/capric triglyceride, cetearyl glucoside, peg-100 stearate, 1,2-hexanediol, propylene glycol, phenoxyethanol, candida bombicola/glucose/methyl rapeseedate ferment, пэг-40 гидрогенизированное касторовое масло, метилизотиазолинон' },
            { id: 3, date: '13:54 16/01/2024', list: 'aqua, caprylic/capric triglyceride, cetearyl glucoside, peg-100 stearate, 1,2-hexanediol, propylene glycol, phenoxyethanol, candida bombicola/glucose/methyl rapeseedate ferment, пэг-40 гидрогенизированное касторовое масло, метилизотиазолинон' },
            { id: 4, date: '13:54 16/01/2024', list: 'aqua, caprylic/capric triglyceride, cetearyl glucoside, peg-100 stearate, 1,2-hexanediol, propylene glycol, phenoxyethanol, candida bombicola/glucose/methyl rapeseedate ferment, пэг-40 гидрогенизированное касторовое масло, метилизотиазолинон' },
            { id: 5, date: '13:54 16/01/2024', list: 'aqua, caprylic/capric triglyceride, cetearyl glucoside, peg-100 stearate, 1,2-hexanediol, propylene glycol, phenoxyethanol, candida bombicola/glucose/methyl rapeseedate ferment, пэг-40 гидрогенизированное касторовое масло, метилизотиазолинон' },
            { id: 6, date: '13:54 16/01/2024', list: 'aqua, caprylic/capric triglyceride, cetearyl glucoside, peg-100 stearate, 1,2-hexanediol, propylene glycol, phenoxyethanol, candida bombicola/glucose/methyl rapeseedate ferment, пэг-40 гидрогенизированное касторовое масло, метилизотиазолинон' },
            { id: 7, date: '13:54 16/01/2024', list: 'aqua, caprylic/capric triglyceride, cetearyl glucoside, peg-100 stearate, 1,2-hexanediol, propylene glycol, phenoxyethanol, candida bombicola/glucose/methyl rapeseedate ferment, пэг-40 гидрогенизированное касторовое масло, метилизотиазолинон' },
            { id: 8, date: '13:54 16/01/2024', list: 'aqua, caprylic/capric triglyceride, cetearyl glucoside, peg-100 stearate, 1,2-hexanediol, propylene glycol, phenoxyethanol, candida bombicola/glucose/methyl rapeseedate ferment, пэг-40 гидрогенизированное касторовое масло, метилизотиазолинон' }
        ];
        // this._pass = {};
        // this._email = {};
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
    async registration(username, email, pass) {
        try {
            const response = await registration(username, email, pass);
            console.log(response);
            localStorage.setItem('token', response.accessToken); // Используем accessToken
            this.setIsAuth(true);
            this.setUser(response.user);
        } catch (e) {
            console.log(e.response?.data?.message);
        }
    }
    async login(log, pass) {
        try {
            const response = await login(log, pass);
            console.log(response);
            localStorage.setItem('token', response.accessToken); // Используем accessToken
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

    async checkAuth() {
        try {
            const response = await check(); // Вызываем функцию logout из userAPI.js
            console.log(response);
            localStorage.setItem('token', response.accessToken); // Используем accessToken
            this.setIsAuth(true);
            this.setUser(response.user);

        } catch (e) {
            console.log(e.response?.data?.message);
        }
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

}

export default UserStore;