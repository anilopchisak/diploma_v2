import React, {useContext} from 'react';
import {Context} from "../../index";
import IngrDetailItem from "./IngrDetailItem";

const IngrDetailConst = () => {
    const {ingrDetail} = useContext(Context);

    return (
        <div>
            <IngrDetailItem ingr={ingrDetail.ingrDetail}/>
        </div>
    );
};

export default IngrDetailConst;