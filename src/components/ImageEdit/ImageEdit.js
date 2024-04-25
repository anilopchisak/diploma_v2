import React, {useEffect, useState} from 'react';
import ReactEasyCrop from 'react-easy-crop';
import './ImageEdit.css'

import { PiCheck, PiX, PiArrowClockwise, PiArrowsOut, PiCaretDown } from "react-icons/pi";
import HandleTesseract from "../IngredientListChecker/Calculations/HandleTesseract";

const ImageEdit = ({setTypeInput, setImage, setCroppedImage, image}) => {
    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1);
    const [rotation, setRotation] = useState(0)
    const [aspect, setAspect] = useState(null);
    const [customAspect, setCustomAspect] = useState(null);

    const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

    // Вычисление соотношения сторон изображения
    useEffect(() => {
        const imageObj = new Image();
        imageObj.src = image;
        imageObj.onload = () => {
            const { naturalWidth, naturalHeight } = imageObj;
            const aspectRatio = naturalWidth / naturalHeight;
            setCustomAspect(aspectRatio);
            setAspect(aspectRatio)
        };
    }, [image]);

    const onCropChange = (crop, percentCrop) => {
        setCrop(crop);
    }

    const onZoomChange = zoom => {
        setZoom(zoom);
    }

    const onRotationChange = rotation => {
        setRotation(rotation);
    }

    const onAspectChange = aspect => {
        setAspect(aspect);
    }

    // useEffect(() => {
    //     if (aspect == null) {
    //         const { naturalWidth, naturalHeight } = image;
    //         const ratio = naturalWidth / naturalHeight;
    //         setAspect(ratio);
    //     }
    // }, [aspect]);

    const onCropComplete = (croppedArea, croppedAreaPixels) => {
        setCroppedAreaPixels(croppedAreaPixels);
        // console.log(croppedAreaPixels);
    }


    // Callback function when cropping is done
    const onSaveCrop = () => {
        if (croppedAreaPixels) {
            // Создание обрезанной версии изображения с помощью Canvas
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            const imageObj = new Image();
            imageObj.src = image;
            imageObj.onload = () => {
                canvas.width = croppedAreaPixels.width;
                canvas.height = croppedAreaPixels.height;
                ctx.drawImage(
                    imageObj,
                    croppedAreaPixels.x,
                    croppedAreaPixels.y,
                    croppedAreaPixels.width,
                    croppedAreaPixels.height,
                    0,
                    0,
                    croppedAreaPixels.width,
                    croppedAreaPixels.height
                );
                // Получение base64-представления обрезанного изображения
                const croppedDataURL = canvas.toDataURL('image/jpeg');
                setCroppedImage(croppedDataURL);
                // console.log('Cropped Image:', croppedDataURL);
                // Здесь вы можете отправить croppedDataURL на сервер или использовать его по своему усмотрению
            }
        }
    }

    // Callback function when cropping is canceled
    const onEditCancel = () => {
        setImage(null);
        setTypeInput("img");
    };

    return (
        <div className={"file__edit"}>
            <div className={"edit__place"}>
                <ReactEasyCrop
                    image={image}
                    crop={crop}
                    zoom={zoom}
                    rotation={rotation}
                    aspect={aspect}
                    onCropChange={onCropChange}
                    onZoomChange={onZoomChange}
                    onRotationChange={onRotationChange}
                    onAspectChange={onAspectChange}
                    onCropComplete={onCropComplete}
                    style={{
                        containerStyle: {
                            width: "100%",
                            height: "100%",
                            // backgroundColor: "#fff",
                        },
                    }}
                />
            </div>

            <div className={"edit__nav"}>
                <div>
                    <PiX className={"edit__nav__icons"}
                         onClick={onEditCancel}/>
                </div>

                <div className={"edit__nav__input"}>
                    <div>
                        <div className={"wrapper__input__range"}>
                            <div><PiArrowClockwise/></div>
                            <input
                                className={"input__range"}
                                type={"range"}
                                value={rotation}
                                min={"-180"}
                                max={"180"}
                                step={"1"}
                                onChange={(event) => onRotationChange(parseInt(event.target.value))}
                            />
                        </div>
                        <div className={"wrapper__input__range"}>
                            <div><PiArrowsOut/></div>
                            <input
                                className={"input__range"}
                                type={"range"}
                                value={zoom}
                                min={"1"}
                                max={"5"}
                                step={"0.01"}
                                onChange={(event) => onZoomChange(parseFloat(event.target.value))}
                            />
                        </div>
                    </div>
                    <div className={"wrapper__input__dropdown"}>
                        <select className={"input__dropdown"}
                                onChange={(event) => onAspectChange(parseFloat(event.target.value))}>
                            <option value={customAspect} name={"ratio"}>custom</option>
                            <option value={1 / 1} name={"ratio"}>1:1</option>
                            <option value={5 / 4} name={"ratio"}>5:4</option>
                            <option value={4 / 3} name={"ratio"}>4:3</option>
                            <option value={3 / 2} name={"ratio"}>3:2</option>
                            <option value={5 / 3} name={"ratio"}>5:3</option>
                            <option value={16 / 9} name={"ratio"}>16:9</option>
                            <option value={3 / 1} name={"ratio"}>3:1</option>
                        </select>
                        <div className={"input__dropdown__icon"}>
                            <PiCaretDown/>
                        </div>
                    </div>
                </div>

                <div>
                    <PiCheck className={"edit__nav__icons"} onClick={onSaveCrop}/>
                </div>
            </div>
        </div>
    );
};

export default ImageEdit;