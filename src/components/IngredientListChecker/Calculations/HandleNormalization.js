import HandleTypoCheck from "./HandleTypoCheck";
import {useContext} from "react";
import {Context} from "../../../index";

function processText(text) {
    // находит индекс первого вхождения символа : в строке
    const colonIndex = text.indexOf(':');
    if (colonIndex !== -1) {
        return text.substring(colonIndex + 1).trim();
    }
    return text;
}

function HandleNormalization(selectedText, ingr_names) {
    let normText;
    normText = processText(selectedText);

    normText = normText.toLowerCase();
    normText = normText.replace(/\n/g, ' ');
    normText = normText.split(', ');
    for (let i = 0; i < normText.length; i++) {

        normText[i] = normText[i].replace(/\(.+\)/,''); // ( )
        normText[i] = normText[i].replace(/\./g, ''); // points
        normText[i] = normText[i].replace(/\s+/g, ' ').trim(); // spaces
        normText[i] = HandleTypoCheck(normText[i], ingr_names);
    }
    normText = normText.filter(ingredient => ingredient.length > 0);

    const listWithConcentrations = normText.map(ingredient => ({ ingr_name: ingredient, concentration: 0 }));

    // console.log(normText);

    return(listWithConcentrations);
}

export default HandleNormalization;