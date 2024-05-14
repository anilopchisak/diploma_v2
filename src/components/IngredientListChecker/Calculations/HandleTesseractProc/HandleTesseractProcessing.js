import React from 'react';
import './HandleTesseractProcessing.css'

const HandleTesseractProcessing = (typeInput) => {

    return (
        <div className={'tesseract__loading'}>
            <div className={'tesseract__loading__text'}>Processing...</div>
        </div>
    );
};

export default HandleTesseractProcessing;