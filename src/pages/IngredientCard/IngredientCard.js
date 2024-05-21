import React, {useContext, useEffect} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import {LOADING_STATUS} from "../../store/storeUtils";
import IngrDetailItem from "../../components/IngrDetail/IngrDetailItem";
import {useParams} from "react-router-dom";
import IngrDetailConst from "../../components/IngrDetail/IngrDetailConst";


const IngredientCard = observer(() => {
    const {ingrDetail} = useContext(Context);
    const {id} = useParams();

    useEffect(() => {
        ingrDetail.fetchIngrDetail(id);

        return () => {
            ingrDetail.resetLoadingStatus();
        }
    }, [])


    return (
        <div className={"card__wrapper"}>
            {
                ingrDetail.ingrDetailLoadingStatus === LOADING_STATUS.LOADING && "Loading..."
            }
            {
                ingrDetail.ingrDetailLoadingStatus === LOADING_STATUS.ERROR && "Error"
            }
            {
                ingrDetail.ingrDetailLoadingStatus === LOADING_STATUS.IDLE && "No data"
            }
            {
                ingrDetail.ingrDetailLoadingStatus === LOADING_STATUS.SUCCESS && ingrDetail.ingrDetail && <IngrDetailConst/>
            }
        </div>
    );
});

export default IngredientCard;