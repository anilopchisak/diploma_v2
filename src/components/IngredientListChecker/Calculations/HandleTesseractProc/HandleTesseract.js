import React, {useState} from 'react';
import Tesseract from 'tesseract.js';

const HandleTesseract = async ({image, setText, setTypeInput}) => {

    const { data } = await Tesseract.recognize(
        image,
        'eng+rus'
    );

    // if (data.text) {
    setText(data.text);
    // } else {
    //     setTypeInput('processing_error');
    //     // setText('');
    // }
}

export default HandleTesseract;


// import React, {useState} from 'react';
// import { createWorker } from 'tesseract.js';
//
// const HandleTesseract = async ({image}) => {
//     let recText = '';
//
//     try {
//         await (async () => {
//             const worker = await createWorker('eng');
//             const text = await worker.recognize(image);
//             console.log(text.data.text);
//             recText = text.data.text;
//             await worker.terminate();
//         })();
//     }
//
//     catch (error) {
//         console.error('Error during text recognition:', error);
//         recText = 'Error occurred during recognition';
//     }
//
//     return recText;
// };
//
// export default HandleTesseract;