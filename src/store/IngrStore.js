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
        this._property = [
            { id: 1, property_name: 'Питание кожи' },
            { id: 2, property_name: 'Смягчение кожи' },
            { id: 3, property_name: 'Увлажнение кожи' },
            { id: 4, property_name: 'Удержание влаги в коже' },
            { id: 5, property_name: 'Антибактериальное свойство' },
            { id: 6, property_name: 'Дезодорирующий эффект' },
            { id: 7, property_name: 'Очищение кожи' },
            { id: 8, property_name: 'Борьба с высыпаниями' }
        ];
        // { id: 1, property_name: 'Питание кожи' },
        // { id: 2, property_name: 'Смягчение кожи' },
        // { id: 3, property_name: 'Увлажнение кожи' },
        // { id: 4, property_name: 'Удержание влаги в коже' },
        // { id: 5, property_name: 'Антибактериальное свойство' },
        // { id: 6, property_name: 'Дезодорирующий эффект' },
        // { id: 7, property_name: 'Очищение кожи' },
        // { id: 8, property_name: 'Борьба с высыпаниями' }
        this._ingr = [
            { id: 1, ingr_name: 'aqua', description: 'дезодорирующий эффект, борьба с высыпаниями, очищение кожи' },
            { id: 2, ingr_name: 'caprylic/capric triglyceride', description: 'дезодорирующий эффект, борьба с высыпаниями, очищение кожи' },
            { id: 3, ingr_name: 'cetearyl glucoside', description: 'дезодорирующий эффект, борьба с высыпаниями, очищение кожи' },
            { id: 4, ingr_name: 'peg-100 stearate', description: 'дезодорирующий эффект, борьба с высыпаниями, очищение кожи' },
            { id: 5, ingr_name: '1,2-hexanediol', description: 'дезодорирующий эффект, борьба с высыпаниями, очищение кожи' },
            { id: 6, ingr_name: 'propylene glycol', description: 'дезодорирующий эффект, борьба с высыпаниями, очищение кожи' },
            { id: 7, ingr_name: 'phenoxyethanol', description: 'дезодорирующий эффект, борьба с высыпаниями, очищение кожи' },
            { id: 8, ingr_name: 'candida bombicola/glucose/methyl rapeseedate ferment', description: 'дезодорирующий эффект, борьба с высыпаниями, очищение кожи' },
            { id: 9, ingr_name: 'пэг-40 гидрогенизированное касторовое масло', description: 'дезодорирующий эффект, борьба с высыпаниями, очищение кожи' },
            { id: 10, ingr_name: 'метилизотиазолинон', description: 'дезодорирующий эффект, борьба с высыпаниями, очищение кожи' }
        ]; // for ComponentSearch
        // { id: 1, ingr_name: 'aqua', description: 'дезодорирующий эффект, борьба с высыпаниями, очищение кожи' },
        // { id: 2, ingr_name: 'caprylic/capric triglyceride', description: 'дезодорирующий эффект, борьба с высыпаниями, очищение кожи' },
        // { id: 3, ingr_name: 'cetearyl glucoside', description: 'дезодорирующий эффект, борьба с высыпаниями, очищение кожи' },
        // { id: 4, ingr_name: 'peg-100 stearate', description: 'дезодорирующий эффект, борьба с высыпаниями, очищение кожи' },
        // { id: 5, ingr_name: '1,2-hexanediol', description: 'дезодорирующий эффект, борьба с высыпаниями, очищение кожи' },
        // { id: 6, ingr_name: 'propylene glycol', description: 'дезодорирующий эффект, борьба с высыпаниями, очищение кожи' },
        // { id: 7, ingr_name: 'phenoxyethanol', description: 'дезодорирующий эффект, борьба с высыпаниями, очищение кожи' },
        // { id: 8, ingr_name: 'candida bombicola/glucose/methyl rapeseedate ferment', description: 'дезодорирующий эффект, борьба с высыпаниями, очищение кожи' },
        // { id: 9, ingr_name: 'пэг-40 гидрогенизированное касторовое масло', description: 'дезодорирующий эффект, борьба с высыпаниями, очищение кожи' },
        // { id: 10, ingr_name: 'метилизотиазолинон', description: 'дезодорирующий эффект, борьба с высыпаниями, очищение кожи' }
        this._ingrOne = [
            {   id: 1,
                ingr_name: 'aqua',
                synon: 'aqua, aqua, aqua, aqua, aqua, aqua, aqua, aqua, aqua, aqua, aqua, aqua, aqua, aqua, aqua, aqua, aqua',
                description: 'дезодорирующий эффект, борьба с высыпаниями, очищение кожи',
            },
        ]; // for IngredientCard
        this._ingrNames = []; // for TypoCheck

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
        // if (Array.isArray(ingrNames)) {
        //     this._ingrNames = ingrNames;
        // } else {
        //     console.error("ingrNames is not an array:", ingrNames);
        //     this._ingrNames = [];
        // }
        // this._ingrNames = ingrNames.map((name, index) => ({ id: index, name }));
        // this._ingrNames = ingrNames;
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
            // const response = await fetchIngr();
            // this.setIngr(response);
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
            this.ingrNamesLoadingStatus = LOADING_STATUS.SUCCESS;
        } catch(e) {
            console.log(e.message);
            this.ingrNamesLoadingStatus = LOADING_STATUS.ERROR;
        }
    }

}

export default IngrStore;