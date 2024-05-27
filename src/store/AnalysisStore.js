import {makeAutoObservable} from "mobx";
import {LOADING_STATUS} from "./storeUtils";
import {fetchAnalysis, fetchComparison} from "../http/analysisAPI";

class AnalysisStore {
    analysisLoadingStatus = LOADING_STATUS.IDLE;
    comparisonLoadingStatus = LOADING_STATUS.IDLE;

    constructor() {
        // this._ingrList = [];
        this._analysis = {};
        this._comparison = {};
        makeAutoObservable(this); // следим за изменениями переменных
    }

    // setIngrList(ingrList) {
    //     this._ingrList = ingrList;
    // }

    setAnalysis(analysis) {
        this._analysis = analysis;
    }

    setComparison(comparison) {
        this._comparison = comparison;
    }

    // вызываются только в случае если переменная была изменена
    // get ingrList() {
    //     return this._ingrList;
    // }

    get analysis() {
        return this._analysis;
    }

    get comparison() {
        return this._comparison;
    }


    async fetchAnalysis(ingrs) {

        this.analysisLoadingStatus = LOADING_STATUS.LOADING;
        console.log(ingrs);

        try {
            const response = await fetchAnalysis(ingrs);
            this.setAnalysis(response);
            this.analysisLoadingStatus = LOADING_STATUS.SUCCESS;
        } catch(err) {
            console.log('analysis fetching err');
            this.analysisLoadingStatus = LOADING_STATUS.ERROR;
        }
    }

    async fetchComparison(ingrs1, ingrs2) {

        this.comparisonLoadingStatus = LOADING_STATUS.LOADING;

        let ingrs = ingrs1
        const to_compare1 = {ingrs};
        ingrs = ingrs2
        const to_compare2 = {ingrs};
        console.log(to_compare1, to_compare2);

        try {
            const response = await fetchComparison(to_compare1, to_compare2);
            this.setComparison(response);
            this.comparisonLoadingStatus = LOADING_STATUS.SUCCESS;
        } catch(err) {
            console.log('analysis fetching err');
            this.comparisonLoadingStatus = LOADING_STATUS.ERROR;
        }
    }

}

export default AnalysisStore;