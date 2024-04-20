
import jaroWinkler from 'jaro-winkler';
// import axios from 'axios'; // Для выполнения HTTP-запросов к серверу

const jsonData = [
    { id: 1, name: 'aqua' },
    { id: 2, name: 'caprylic/capric triglyceride' },
    { id: 3, name: 'cetearyl glucoside' },
    { id: 4, name: 'peg-100 stearate' },
    { id: 5, name: '1,2-hexanediol' },
    { id: 6, name: 'propylene glycol' },
    { id: 7, name: 'phenoxyethanol' },
    { id: 8, name: 'candida bombicola/glucose/methyl rapeseedate ferment' },
    { id: 9, name: 'пэг-40 гидрогенизированное касторовое масло' },
    { id: 10, name: 'метилизотиазолинон' },
]

const HandleTypoCheck = (inputString) => {

    if (typeof inputString === "undefined")
    {
        alert("Text is undefined! Check the console.log");
        console.log(inputString);
        return;
    }

    console.log('The input:' + inputString);

    let checkResult;
    let min = 0;

    for(let i = 0; i < jsonData.length; i++) {
        // Проведение сравнения с использованием Jaro-Winkler для каждого элемента
        const similarity = jaroWinkler(jsonData[i].name, inputString);
        if (similarity === 1)
        {

            return inputString;
        }
        else if (similarity > min)
        {
            min = similarity;
            checkResult = jsonData[i].name;
            console.log(min, checkResult);
        }
    }

    if (checkResult)
    {
        // if( window.confirm("Change " + inputString + " to " + checkResult + "?"))
        // {
        //     return(checkResult);
        // }
        console.log('The result:' + checkResult);
        return checkResult;
    }

}

export default HandleTypoCheck;