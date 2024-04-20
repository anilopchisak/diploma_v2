import React, {useCallback, useState} from 'react';
import {useDropzone} from 'react-dropzone'
import './Dropzone.css'
import IngredientListInput from "../IngredientListChecker/IngredientListInput";

import { PiWarningCircle } from "react-icons/pi";

const Dropzone = (set_typeInput) => {
    const [file, setFile] = useState();

    const onDrop = useCallback(acceptedFiles => {
        setFile(acceptedFiles);

        set_typeInput('edit');

        // console.log(acceptedFiles);
        }, []);

    const {
        getRootProps,
        getInputProps,
        isDragActive,
        isDragAccept,
        isDragReject
    } = useDropzone(
        {
            onDrop,
            accept: {'image/*': [] },
            maxFiles: 1,
            maxSize: 5242880
        }
    );

    const handleSubmit = () => {

    }

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
            {/*{*/}
            {/*    isDragActive ?*/}
            {/*        <div className={"dnd-area"} id={"drag"}>*/}
            {/*            .jpg, .jpeg, .png размером до 5Мб*/}
            {/*        </div> :*/}
            {/*        <div className={"dnd-area"}>*/}
            {/*            Перетащите изображение сюда или <p>выберите вручную</p>*/}
            {/*        </div>*/}
            {/*}*/}
        </div>
    );
};

export default Dropzone;