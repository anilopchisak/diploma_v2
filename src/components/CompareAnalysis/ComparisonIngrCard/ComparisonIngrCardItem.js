import React, {useRef} from 'react';
import {PiCaretDown, PiCheck} from "react-icons/pi";

const ComparisonIngrCardItem = ({isOpen, onClick, ingr, shared}) => {
    const itemRef = useRef(null);

    return (
        <div>
            {shared ?
                <div className={'accordion-item'}>
                    <button className={'accordion-header'} onClick={() => onClick()}>
                        <div>{ingr.ingr_name1.toLowerCase()}</div>
                        <div>{ingr.ingr_name2.toLowerCase()}</div>
                    </button>

                    <div className={`accordion-collapse__comp accordion-collapse`}
                         style={
                             isOpen ? {height: itemRef.current.scrollHeight}
                                 :
                                 {height: "0px"}
                         }>
                        <div className={'accordion-body accordion-body__comp__ingr'} ref={itemRef}>
                            {ingr.recognized ?
                                <ul>
                                    <li>{ingr.inci_name}</li>
                                    <li>{ingr.description}</li>
                                </ul>
                                :
                                <ul>
                                    <li>Ингредиент не распознан</li>
                                </ul>
                            }
                        </div>
                    </div>
                </div>
                :
                <div>
                    <div className={'accordion-item'}>
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
                            <div className={'accordion-body'} ref={itemRef}>
                                {ingr.recognized ?
                                    <ul>
                                        <li>{ingr.inci_name}</li>
                                        <li>{ingr.description}</li>
                                    </ul>
                                    :
                                    <ul>
                                        <li>Ингредиент не распознан</li>
                                    </ul>
                                }
                            </div>
                        </div>
                    </div>
                </div>

            }
        </div>
    );
};

export default ComparisonIngrCardItem;