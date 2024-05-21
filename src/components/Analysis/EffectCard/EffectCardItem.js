import React, {useRef} from 'react';
import {PiCaretDown} from "react-icons/pi";
import './EffectCard.css'

const EffectCardItem = ({effect, isOpen, onClick}) => {
    const itemRef = useRef(null);

    return (
        <div>
            <div className={'accordion-item'}>
                <button className={'accordion-header'} onClick={() => onClick()}>
                    <div>{effect.effect}</div>
                    <div>
                        <PiCaretDown className={'accordion-icon'}/>
                    </div>
                </button>

                <div className={`accordion-collapse`}
                    style={
                        isOpen ? {height: itemRef.current.scrollHeight}
                            :
                            {height: "0px"}
                    }>
                    <ul className={'accordion-body'} ref={itemRef}>
                        {effect.ingrs.map((ingr, ingrIndex) =>
                            <li className={'accordion-body__item'} key={ingrIndex}>
                                {ingr}
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </div>

    );
};

export default EffectCardItem;