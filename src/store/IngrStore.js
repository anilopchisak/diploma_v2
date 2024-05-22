import {makeAutoObservable} from "mobx";
import {LOADING_STATUS} from "./storeUtils";
import {fetchIngrNames, fetchIngrs} from "../http/IngrAPI";
import React, {useEffect} from "react";

class IngrStore {
    propertyLoadingStatus = LOADING_STATUS.IDLE;
    ingrLoadingStatus = LOADING_STATUS.IDLE;
    ingrOneLoadingStatus = LOADING_STATUS.IDLE;
    ingrNamesLoadingStatus = LOADING_STATUS.IDLE;


    constructor() {
        this._property = []; // for ComponentSearch
        this._ingr = []; // for ComponentSearch
        this._ingrOne = {}; // for IngredientCard
        this._ingrNames = {        }; // for TypoCheck

        makeAutoObservable(this); // следим за изменениями переменных
    }

    setProperty(property) {
        this._property = property;
    }
    setIngr(ingr) {
        this._ingr = ingr;
    }
    setIngrOne(ingrOne) {
        this._ingrOne = ingrOne;
    }
    setIngrNames(ingrNames) {
        this._ingrNames = ingrNames;
    }

    // вызываются только в случае если переменная была изменена
    get property() {
        return this._property;
    }
    get ingr() {
        return this._ingr;
    }
    get ingrOne() {
        return this._ingrOne;
    }
    get ingrNames() {
        return this._ingrNames;
    }

    async fetchProperty() {

        this.propertyLoadingStatus = LOADING_STATUS.LOADING;

        try {
            // const response = await fetchProperty();
            // this.setProperty(response);
            this.propertyLoadingStatus = LOADING_STATUS.SUCCESS;
        } catch(e) {
            console.log(e.message);
            this.propertyLoadingStatus = LOADING_STATUS.ERROR;
        }
    }
    async fetchIngr() {

        this.ingrLoadingStatus = LOADING_STATUS.LOADING;

        try {
            const response = await fetchIngrs();
            this.setIngr(response);
            this.ingrLoadingStatus = LOADING_STATUS.SUCCESS;
        } catch(e) {
            console.log(e.message);
            this.ingrLoadingStatus = LOADING_STATUS.ERROR;
        }
    }
    async fetchIngrOne() {

        this.ingrOneLoadingStatus = LOADING_STATUS.LOADING;

        try {
            // const response = await fetchIngrOne();
            // this.setIngrOne(response);
            this.ingrOneLoadingStatus = LOADING_STATUS.SUCCESS;
        } catch(e) {
            console.log(e.message);
            this.ingrOneLoadingStatus = LOADING_STATUS.ERROR;
        }
    }
    async fetchIngrNames() {
        this.ingrNamesLoadingStatus = LOADING_STATUS.LOADING;

        try {
            const response = await fetchIngrNames();
            this.setIngrNames(response);
            console.log(this.ingrNames);
            this.ingrNamesLoadingStatus = LOADING_STATUS.SUCCESS;
        } catch(e) {
            console.log(e.message);
            this.ingrNamesLoadingStatus = LOADING_STATUS.ERROR;
        }
    }

}

export default IngrStore;