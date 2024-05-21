import React, {useRef} from 'react';
import {PiCaretDown} from "react-icons/pi";
import '../../Accordion/Accordion.css'

const NegEffectCardItem = ({isOpen, onClick, side_effect}) => {
    const itemRef = useRef(null);

    return (
        <div className={'side_effect_item'}>
            <div className={'accordion-item'} id={'neg'}>
                <button className={'accordion-header'} onClick={() => onClick()}>
                    <div>{side_effect.side_effect}</div>
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
                        {side_effect.ingrs.map((ingr, ingrIndex) =>
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

export default NegEffectCardItem;