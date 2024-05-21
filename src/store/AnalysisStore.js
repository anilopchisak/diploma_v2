import {makeAutoObservable} from "mobx";
import {LOADING_STATUS} from "./storeUtils";

class AnalysisStore {
    analysisLoadingStatus = LOADING_STATUS.IDLE;

    constructor() {
        this._analysis =
        {
            "data": {
                "vegan": "Веганское (не содержит компонентов животного происхождения)",
                "natural": "20.0",
                "pregnant": "Безопасно для беременных",
                "hypoallergenic": "Не гипоаллергенное"
            },
            "effects": [
            {
                "intensity": "Сильное действие",
                "effect_with_ingrs": [
                    {
                        "effect": "питание кожи",
                        "ingrs": [
                            "caprylic/capric triglyceride"
                        ]
                    },
                    {
                        "effect": "увлажнение кожи",
                        "ingrs": [
                            "caprylic/capric triglyceride",
                            "cetearyl glucoside",
                            "1,2-hexanediol"
                        ]
                    },
                    {
                        "effect": "смягчение кожи",
                        "ingrs": [
                            "caprylic/capric triglyceride",
                            "peg-100 stearate"
                        ]
                    }
                ]
            },
            {
                "intensity": "Среднее действие",
                "effect_with_ingrs": [
                    {
                        "effect": "антибактериальное свойство",
                        "ingrs": [
                            "1,2-hexanediol",
                            "candida bombicola/glucose/methyl rapeseedate ferment"
                        ]
                    },
                    {
                        "effect": "удержание влаги в коже",
                        "ingrs": [
                            "propylene glycol"
                        ]
                    }
                ]
            },
            {
                "intensity": "Слабое действие",
                "effect_with_ingrs": [
                    {
                        "effect": "борьба с высыпаниями",
                        "ingrs": [
                            "candida bombicola/glucose/methyl rapeseedate ferment"
                        ]
                    },
                    {
                        "effect": "очищение кожи",
                        "ingrs": [
                            "candida bombicola/glucose/methyl rapeseedate ferment"
                        ]
                    },
                    {
                        "effect": "дезодорирующий эффект",
                        "ingrs": [
                            "candida bombicola/glucose/methyl rapeseedate ferment"
                        ]
                    }
                ]
            }
        ],
            "side_effects": [
            {
                "side_effect": "раздражение слизистых",
                "ingrs": [
                    "1,2-hexanediol"
                ]
            },
            {
                "side_effect": "раздражение кожи",
                "ingrs": [
                    "1,2-hexanediol",
                    "propylene glycol",
                    "phenoxyethanol"
                ]
            },
            {
                "side_effect": "аллергическая реакция",
                "ingrs": [
                    "1,2-hexanediol",
                    "propylene glycol",
                    "phenoxyethanol",
                    "метилизотиазолинон"
                ]
            }
        ],
            "recoms": [
            {
                "recom_text": "при нанесении избегать области глаз и губ"
            },
            {
                "recom_text": "протестировать в целях избежания аллергической реакции"
            }
        ],
            "ingrs": [
            {
                "ingr_name": "aqua",
                "inci_name": "INCI имя - WATER",
                "description": "Оcновной наполнитель средства",
                "type_name": "Используется как растворитель",
                "effect": ""
            },
            {
                "ingr_name": "caprylic/capric triglyceride",
                "inci_name": "INCI имя - Caprylic/Capric Triglyceride",
                "description": "Натуральный смягчитель, получаемый из кокосового масла",
                "type_name": "Используется как активный ингредиент",
                "effect": "Эффект: питание кожи, увлажнение кожи, смягчение кожи"
            },
            {
                "ingr_name": "cetearyl glucoside",
                "inci_name": "INCI имя - CETEARYL GLUCOSIDE",
                "description": "Cовременный эмульгатор с ценнейшим увлажняющим действием",
                "type_name": "Используется как эмульгатор",
                "effect": ""
            },
            {
                "ingr_name": "peg-100 stearate",
                "inci_name": "INCI имя - PEG-100 STEARATE",
                "description": "Эмульгатор, обеспечивает стабильность эмульсий в широком диапазоне рН",
                "type_name": "Используется как ПАВ и эмульгатор",
                "effect": ""
            },
            {
                "ingr_name": "1,2-hexanediol",
                "inci_name": "INCI имя - 1,2-Hexanediol",
                "description": "Синтетический заменитель парабенов",
                "type_name": "Используется как консервант",
                "effect": ""
            },
            {
                "ingr_name": "propylene glycol",
                "inci_name": "INCI имя - Propylene Glycol",
                "description": "Универсальный растворитель",
                "type_name": "Используется как консервант, эмульгатор и стабилизатор вязкости",
                "effect": ""
            },
            {
                "ingr_name": "phenoxyethanol",
                "inci_name": "INCI имя - Phenoxyethanol",
                "description": "Широко используемый консервант",
                "type_name": "Используется как консервант",
                "effect": ""
            },
            {
                "ingr_name": "candida bombicola/glucose/methyl rapeseedate ferment",
                "inci_name": "INCI имя - CANDIDA BOMBICOLA/GLUCOSE/METHYL RAPESEEDATE FERMENT",
                "description": "Натуральное биоповерхностное вещество, полученное с помощью ферментации",
                "type_name": "Используется как активный ингредиент",
                "effect": "Эффект: борьба с высыпаниями, очищение кожи, дезодорирующий эффект, антибактериальное свойство"
            },
            {
                "ingr_name": "пэг-40 гидрогенизированное касторовое масло",
                "inci_name": "INCI имя - гидрогенизированное касторовое масло ПЭГ-40",
                "description": "Комбинация синтетического полиэтиленгликоля и натурального касторового масла",
                "type_name": "Используется как эмульгатор",
                "effect": ""
            },
            {
                "ingr_name": "метилизотиазолинон",
                "inci_name": "INCI имя - METHYLISOTHIAZOLINONE",
                "description": "Консервант широко спектра действия против бактерий",
                "type_name": "Используется как консервант",
                "effect": ""
            }
        ],
            "combs": [
            {
                "comb_type": "Рекомендуется",
                "combination": [
                    {
                        "ingr_name": "TRALALA_1",
                        "description": "I have no idea"
                    }
                ]
            },
            {
                "comb_type": "Допустимо с осторожностью",
                "combination": [
                    {
                        "ingr_name": "TRALALA_2",
                        "description": "Absolutely nothing"
                    }
                ]
            },
            {
                "comb_type": "Не рекомендуется",
                "combination": [
                    {
                        "ingr_name": "TRALALA_3",
                        "description": "HELP ME"
                    },
                    {
                        "ingr_name": "TRALALA_4",
                        "description": "AAAAAAA"
                    }
                ]
            }
        ]
        };
        makeAutoObservable(this); // следим за изменениями переменных
    }

    setAnalysis(analysis) {
        this._analysis = analysis;
    }

    // вызываются только в случае если переменная была изменена
    get analysis() {
        return this._analysis;
    }


    async fetchAnalysis() {

        this.analysisLoadingStatus = LOADING_STATUS.LOADING

        try {
            // this._analysis = await fetchAnalysis();
            this.analysisLoadingStatus = LOADING_STATUS.SUCCESS;
        } catch(err) {
            console.log('analysis fetching err');
            this.analysisLoadingStatus = LOADING_STATUS.ERROR
        }
    }

}

export default AnalysisStore;