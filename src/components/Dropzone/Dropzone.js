import React, {useEffect, useState} from 'react';
import {useDropzone} from 'react-dropzone'
import './Dropzone.css'

import { PiWarningCircle } from "react-icons/pi";

const Dropzone = ({setImage}) => {
    // const [image, setImage] = useState(null);

    const onDrop = (acceptedFiles) => {
        const file = acceptedFiles[0];
        const reader = new FileReader();

        reader.onload = () => {
            setImage(reader.result);
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };

    // useState - это асинхронная операция, и изменения состояния не отражаются немедленно.
    // стоит использовать useEffect, чтобы реагировать на изменения состояния image
    // useEffect(() => {
    //     if (image !== null) {
    //         setImage(image);
    //         // set_typeInput('edit');
    //     }
    // }, [image]);

    const {
        getRootProps,
        getInputProps,
        isDragActive,
        isDragAccept,
        isDragReject
    } = useDropzone(
        {
            onDrop,
            accept: {'image/*': []},
            maxFiles: 1,
            maxSize: 5242880,
            multiple: false
        }
    );

    return (
        <div className={'file__upload'} {...getRootProps()}>
            <input {...getInputProps()} />
            {!isDragActive &&
                <div className={"dnd-area"}>
                    <div>Перетащите изображение сюда или <p>выберите вручную</p></div>
                    <div id={"file-req"}>(Только .jpg, jpeg, .png до 5Мб)</div>
                </div>
            }
            {isDragAccept &&
                <div className={"dnd-area"} id={"drag-accept"}>
                    <div>Отпустите файл для загрузки</div>
                </div>
            }
            {isDragReject &&
                <div className={"dnd-area"} id={"drag-reject"}>
                        <PiWarningCircle className={'warning-sign'}/>
                        Невозможно загрузить файл: только .jpg, .jpeg, .png размером до 5Мб
                </div>
            }
        </div>
    );
};

export default Dropzone;