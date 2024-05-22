import {makeAutoObservable} from "mobx";
import {LOADING_STATUS} from "./storeUtils";
import {fetchAnalysis} from "../http/analysisAPI";
import {ANALYSIS_ROUTE} from "../utils/consts";

class AnalysisStore {
    analysisLoadingStatus = LOADING_STATUS.IDLE;

    constructor() {
        this._ingrList = [];
        this._analysis = {}
        makeAutoObservable(this); // следим за изменениями переменных
    }

    setIngrList(ingrList) {
        this._ingrList = ingrList;
    }

    setAnalysis(analysis) {
        this._analysis = analysis;
    }

    // вызываются только в случае если переменная была изменена
    get ingrList() {
        return this._ingrList;
    }

    get analysis() {
        return this._analysis;
    }


    async fetchAnalysis(ingrs) {

        this.analysisLoadingStatus = LOADING_STATUS.LOADING
        console.log(ingrs);

        try {
            const response = await fetchAnalysis(ingrs);
            this.setAnalysis(response);
            this.analysisLoadingStatus = LOADING_STATUS.SUCCESS;
        } catch(err) {
            console.log('analysis fetching err');
            this.analysisLoadingStatus = LOADING_STATUS.ERROR
        }
    }

}

export default AnalysisStore;