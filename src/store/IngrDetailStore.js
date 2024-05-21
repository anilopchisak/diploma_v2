import {makeAutoObservable} from "mobx";
import {LOADING_STATUS} from "./storeUtils";
import React from "react";

class IngrDetailStore {
    ingrDetailLoadingStatus = LOADING_STATUS.IDLE;

    constructor() {
        this._ingrDetail =
            {   id: 1,
                name: 'aqua',
                synonyms: 'aqua, aqua, aqua, aqua, aqua, aqua, aqua, aqua, aqua, aqua, aqua, aqua, aqua, aqua, aqua, aqua, aqua',

                description: 'дезодорирующий эффект, борьба с высыпаниями, очищение кожи',
            }; // for IngredientCard

        makeAutoObservable(this); // следим за изменениями переменных
    }

    setIngrDetail(ingrDetail) {
        this._ingrDetail = ingrDetail;
    }

    get ingrDetail() {
        return this._ingrDetail;
    }

    resetLoadingStatus() {
        this.ingrDetailLoadingStatus = LOADING_STATUS.IDLE
    }

    async fetchIngrDetail({ingrId}) {

        this.ingrDetailLoadingStatus = LOADING_STATUS.LOADING;

        try {
            // const response = await fetchIngrDetail({ingrId);
            // this.setIngrDetail(response);
            this.ingrDetailLoadingStatus = LOADING_STATUS.SUCCESS;
        } catch(e) {
            console.log(e.message);
            this.ingrDetailLoadingStatus = LOADING_STATUS.ERROR;
        }
    }

}

export default IngrDetailStore;