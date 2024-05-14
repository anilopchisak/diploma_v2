import HandleTypoCheck from "./HandleTypoCheck";

const HandleNormalization = (selectedText) => {

    let normText;
    normText = selectedText;

    normText = normText.toLowerCase();
    normText = normText.replace(/\n/g, ' ');
    normText = normText.split(', ');
    for (let i = 0; i < normText.length; i++) {
        normText[i] = normText[i].replace(/\(.+\)/,''); // ( )
        normText[i] = normText[i].replace(/\./g, ''); // points
        normText[i] = normText[i].replace(/\s+/g, ' ').trim(); // spaces
        normText[i] = HandleTypoCheck(normText[i]);
    }

    const listWithConcentrations = normText.map(ingredient => ({ ingr_name: ingredient, concentration: 0 }));

    // console.log(normText);

    return(listWithConcentrations);
}

export default HandleNormalization;