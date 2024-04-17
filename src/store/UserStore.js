import {makeAutoObservable} from "mobx";

class UserStore {

    constructor() {
        this._isAuth = false;
        this._user = false;
        this._id = 0;
        makeAutoObservable(this); // следим за изменениями переменных
    }

    // Actions - функции, которые меняют состояния (переменных)
    setIsAuth(bool) {
        this._isAuth = bool;
    }
    setUser(user) {
        this._user = user;
    }
    setId(id) {
        this._id = id;
    }

    // вызываются только в случае если переменная была изменена
    get isAuth() {
        return this._isAuth;
    }
    get user() {
        return this._user;
    }
    get userId() {
        return this._id;
    }

}

export default UserStore;