import React, {useRef} from 'react';
import {PiCaretDown} from "react-icons/pi";

const IngrCardItem = ({isOpen, ingr, onClick}) => {
    const itemRef = useRef(null);

    return (
        <div className={'side_effect_item'}>
            <div className={'accordion-item'} id={'neg'}>
                <button className={'accordion-header'} onClick={() => onClick()}>
                    <div>{ingr.ingr_name}</div>
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
                        <li>
                            {ingr.inci_name}
                        </li>
                        <li>
                            {ingr.description}
                        </li>
                        <li>
                            {ingr.type_name}
                        </li>
                        <li>
                            {ingr.effect}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default IngrCardItem;