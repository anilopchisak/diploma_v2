import React, {useContext, useEffect} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import {LOADING_STATUS} from "../../store/storeUtils";
import IngrDetailItem from "../../components/IngrDetail/IngrDetailItem";
import {useParams} from "react-router-dom";


const IngredientCard = observer(() => {
    const {ingr} = useContext(Context);
    const {ingr_name} = useParams();

    useEffect( () => {
        const fetchIngredients = async () => {
            try {
                await ingr.fetchIngrOne(ingr_name);
            } catch (err) {
                console.log(err);
            }
        }
        fetchIngredients();
    }, []);


    return (
        <div className={"card__wrapper"}>
            {
                ingr.ingrOneLoadingStatus === LOADING_STATUS.LOADING && "Loading..."
            }
            {
                ingr.ingrOneLoadingStatus === LOADING_STATUS.ERROR && "Error"
            }
            {
                ingr.ingrOneLoadingStatus === LOADING_STATUS.IDLE && "No data"
            }
            {
                ingr.ingrOneLoadingStatus === LOADING_STATUS.SUCCESS &&
                ingr.ingrOne &&
                <IngrDetailItem ingr={ingr.ingrOne}/>
            }
        </div>
    );
});

export default IngredientCard;