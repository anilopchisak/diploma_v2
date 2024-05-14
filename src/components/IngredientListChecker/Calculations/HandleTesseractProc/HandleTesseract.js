import React, {useState} from 'react';
import Tesseract from 'tesseract.js';

const HandleTesseract = async ({image, setText}) => {

    const { createWorker } = Tesseract;

    const worker = await createWorker('eng+rus', 1);
    await worker.setParameters({
        tessedit_char_whitelist: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZабвгдеёжзийклмнопрстуфхцчшщъыьэюяАБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ0123456789-,()/: ',
    });
    const { data } = await worker.recognize(
        image,
        {imageColor: true, imageGrey: true, imageBinary: true}
    );
    setText(data.text);


    // const { data } = await Tesseract.recognize(
    //     image,
    //     'eng+rus'
    // );
    // setText(data.text);


}

export default HandleTesseract;