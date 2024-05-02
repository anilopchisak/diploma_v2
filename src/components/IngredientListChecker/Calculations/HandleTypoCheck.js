
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
    let checkResult;
    let min = 0;

    for(let i = 0; i < jsonData.length; i++) {
        // Проведение сравнения с использованием Jaro-Winkler для каждого элемента
        const similarity = jaroWinkler(jsonData[i].name, inputString);
        console.log(inputString, similarity);
        if (similarity === 1)
        {
            return inputString;
        }
        else if (similarity > min && similarity > 0.8)
        {
            min = similarity;
            checkResult = jsonData[i].name;
        }
    }

    if (checkResult && min > 0.9)
    {
        return checkResult;
    }
    else
    {
        return inputString;
    }

}

export default HandleTypoCheck;