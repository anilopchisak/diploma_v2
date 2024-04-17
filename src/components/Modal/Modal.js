import React from 'react';
import './Modal.css'

const Modal = ({active, setActive}) => {
    return (
        <div className={"modal"} onClick={e => e.stopPropagation()}>
            <div className={"modal__content"}>

            </div>
        </div>
    );
};

export default Modal;