import TypoCheck from "./TypoCheck";

const Normalization = (selectedText) => {

    let normText;
    normText = selectedText;

    if (typeof normText === "undefined") {
        alert("Text is undefined! Check the console.log");
        console.log(normText);
        return;
    }

    normText = normText.toLowerCase();
    normText = normText.split(', ');
    for (let i = 0; i < normText.length; i++) {
        normText[i] = normText[i].replace(/\(.+\)/,''); // ( )
        normText[i] = normText[i].replace(/\./g, ''); // points
        normText[i] = normText[i].replace(/\s+/g, ' ').trim(); // spaces
        normText[i] = TypoCheck(normText[i]);
    }

    console.log(normText);

    return(normText);
    // return(TypoCheck(normText));
}

export default Normalization;