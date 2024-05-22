import React from 'react';
import jaroWinkler from 'jaro-winkler';
import {useContext} from "react";
import {Context} from "../../../index";

function HandleTypoCheck(inputString, ingrNames) {

    if (!ingrNames || ingrNames.length === 0) {
        console.warn('Ingr is undefined or empty');
        return inputString;
    }

    let checkResult;
    let min = 0;

    for (let i = 0; i < ingrNames.length; i++) {
        // Проведение сравнения с использованием Jaro-Winkler для каждого элемента
        const similarity = jaroWinkler(ingrNames[i], inputString);
        console.log(inputString, similarity);
        if (similarity === 1) {
            return inputString;
        } else if (similarity > min && similarity > 0.8) {
            min = similarity;
            checkResult = ingrNames[i];
        }
    }

    if (checkResult && min > 0.9) {
        return checkResult;
    } else {
        return inputString;
    }
};

export default HandleTypoCheck;
