import React from 'react';
import './HandleTesseractProcessing.css'

const HandleTesseractProcessing = (typeInput) => {

    return (
        <div className={'tesseract__loading'}>
            {/*{ typeInput === 'processig' ?*/}
            <div className={'tesseract__loading__text'}>Processing...</div>
            {/*:*/}
            {/*    <div className={'tesseract__loading__text'}>К сожалению, мы не смогли распознать текст на изображении :(</div>*/}
            {/*}*/}
        </div>
    );
};

export default HandleTesseractProcessing;