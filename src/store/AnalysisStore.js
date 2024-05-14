import {makeAutoObservable} from "mobx";
import {LOADING_STATUS} from "./storeUtils";

class IngrStore {

    constructor() {
        this._ingr = {};
        this._properties = [];
        this._ingrArray = [];
        this.ingrsLoadingStatus = LOADING_STATUS.IDLE;
        makeAutoObservable(this); // следим за изменениями переменных
    }

    setIngr(ingr) {
        this._ingr = ingr;
    }
    setProperties(properties) {
        this._properties = properties;
    }
    setIngrArray(ingrArray) {
        this._ingrArray = ingrArray;
    }
    // вызываются только в случае если переменная была изменена
    get ingr() {
        return this._ingr;
    }
    get properties() {
        return this._properties;
    }
    get ingrList() {
        return this._ingrArray;
    }

    async fetchIngrs() {

        this.ingrsLoadingStatus = LOADING_STATUS.LOADING

        try {
            this._product = await fetchIngrs();
            this.ingrsLoadingStatus = LOADING_STATUS.SUCCESS;
        } catch(err) {
            console.log('Ingredients fetching err');
            this.ingrsLoadingStatus = LOADING_STATUS.ERROR
        }
    }

}

export default IngrStore;