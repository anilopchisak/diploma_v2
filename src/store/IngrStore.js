import {makeAutoObservable} from "mobx";
import {LOADING_STATUS} from "./storeUtils";
import {fetchIngrs} from "../http/IngrAPI";
import React from "react";

class IngrStore {
    ingrsLoadingStatus = LOADING_STATUS.IDLE;

    constructor() {
        this._property = [
            { id: 1, name: 'Питание кожи' },
            { id: 2, name: 'Смягчение кожи' },
            { id: 3, name: 'Увлажнение кожи' },
            { id: 4, name: 'Удержание влаги в коже' },
            { id: 5, name: 'Антибактериальное свойство' },
            { id: 6, name: 'Дезодорирующий эффект' },
            { id: 7, name: 'Очищение кожи' },
            { id: 8, name: 'Борьба с высыпаниями' }
        ];
        this._ingr = [
            { id: 1, name: 'aqua', description: 'дезодорирующий эффект, борьба с высыпаниями, очищение кожи' },
            { id: 2, name: 'caprylic/capric triglyceride', description: 'дезодорирующий эффект, борьба с высыпаниями, очищение кожи' },
            { id: 3, name: 'cetearyl glucoside', description: 'дезодорирующий эффект, борьба с высыпаниями, очищение кожи' },
            { id: 4, name: 'peg-100 stearate', description: 'дезодорирующий эффект, борьба с высыпаниями, очищение кожи' },
            { id: 5, name: '1,2-hexanediol', description: 'дезодорирующий эффект, борьба с высыпаниями, очищение кожи' },
            { id: 6, name: 'propylene glycol', description: 'дезодорирующий эффект, борьба с высыпаниями, очищение кожи' },
            { id: 7, name: 'phenoxyethanol', description: 'дезодорирующий эффект, борьба с высыпаниями, очищение кожи' },
            { id: 8, name: 'candida bombicola/glucose/methyl rapeseedate ferment', description: 'дезодорирующий эффект, борьба с высыпаниями, очищение кожи' },
            { id: 9, name: 'пэг-40 гидрогенизированное касторовое масло', description: 'дезодорирующий эффект, борьба с высыпаниями, очищение кожи' },
            { id: 10, name: 'метилизотиазолинон', description: 'дезодорирующий эффект, борьба с высыпаниями, очищение кожи' }
        ];
        makeAutoObservable(this); // следим за изменениями переменных
    }

    setIngr(ingr) {
        this._ingr = ingr;
    }
    setProperty(property) {
        this._properties = property;
    }
    // вызываются только в случае если переменная была изменена
    get ingr() {
        return this._ingr;
    }
    get property() {
        return this._property;
    }

    async fetchIngrs() {

        this.ingrsLoadingStatus = LOADING_STATUS.LOADING

        try {
            this._ingr = await fetchIngrs();
            this.ingrsLoadingStatus = LOADING_STATUS.SUCCESS;
        } catch(err) {
            console.log('Ingredients fetching err');
            this.ingrsLoadingStatus = LOADING_STATUS.ERROR
        }
    }

}

export default IngrStore;