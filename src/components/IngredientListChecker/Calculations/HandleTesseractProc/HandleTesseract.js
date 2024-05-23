import React, {useState} from 'react';
import Tesseract from 'tesseract.js';

const HandleTesseract = async ({image, setText, typeInput}) => {

    const { createWorker } = Tesseract;

    const worker = await createWorker('eng+rus', 1);
    await worker.setParameters({
        tessedit_char_whitelist: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZабвгдеёжзийклмнопрстуфхцчшщъыьэюяАБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ0123456789-,()/: ',
    });
    const { data } = await worker.recognize(
        image,
        {imageColor: true, imageGrey: true, imageBinary: true}
    );

    if(typeInput === 'processing') {
        setText(data.text);
    }

    await worker.terminate();
}

export default HandleTesseract;