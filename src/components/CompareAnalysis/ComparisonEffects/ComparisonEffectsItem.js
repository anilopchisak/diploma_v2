import React, {useRef} from 'react';
import {PiCaretDown, PiX} from "react-icons/pi";
import './ComparisonEffectsItem.css'

const ComparisonEffectsItem = ({isOpen, onClick, effect, unique_effect, unique_eff_num}) => {
    const itemRef = useRef(null);

    return (
        <div>
            {effect ?
                <div className={'accordion-item'}>
                    <button className={'accordion-header__comp'} onClick={() => onClick()}>
                        <div className={'accordion-header-intensity'}>{effect.intensity1.toLowerCase()}</div>
                        <div className={'accordion-header-name'}>{effect.effect}</div>
                        <div className={'accordion-header-intensity'}>{effect.intensity2.toLowerCase()}</div>
                        {/*<div>*/}
                        {/*    <PiCaretDown className={'accordion-icon__comp'}/>*/}
                        {/*</div>*/}
                    </button>

                    <div className={`accordion-collapse__comp accordion-collapse`}
                         style={
                             isOpen ? {height: itemRef.current.scrollHeight}
                                 :
                                 {height: "0px"}
                         }>
                        <div className={'accordion-body accordion-body__comp'} ref={itemRef}>
                            <div>
                                <ul>
                                    {effect.ingrs1.map((ingr, ingrIndex) =>
                                        <li className={'accordion-body__item accordion-body_item__comp'} key={ingrIndex}>
                                            {ingr}
                                        </li>
                                    )}
                                </ul>
                            </div>
                            <div>
                                <ul>
                                    {effect.ingrs2.map((ingr, ingrIndex) =>
                                        <li className={'accordion-body__item accordion-body_item__comp'} key={ingrIndex}>
                                            {ingr}
                                        </li>
                                    )}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                :
                <div className={'accordion-item'}>
                    { unique_eff_num === 1 ?
                        <div>
                            <button className={'accordion-header__comp'} onClick={() => onClick()}>
                                <div  className={'accordion-header-intensity'}>{unique_effect.intensity.toLowerCase()}</div>
                                <div className={'accordion-header-name'}>{unique_effect.effect}</div>
                                <div className={'accordion-header-intensity'}><PiX className={'accordion-body_item__comp'}/></div>
                            </button>

                            <div className={`accordion-collapse__comp accordion-collapse`}
                                 style={
                                     isOpen ? {height: itemRef.current.scrollHeight}
                                         :
                                         {height: "0px"}
                                 }>
                                <div className={'accordion-body accordion-body__comp'} ref={itemRef}>
                                    <div>
                                        <ul>
                                            {unique_effect.ingrs.map((ingr, ingrIndex) =>
                                                <li className={'accordion-body__item accordion-body_item__comp'} key={ingrIndex}>
                                                    {ingr}
                                                </li>
                                            )}
                                        </ul>
                                    </div>
                                    <div>
                                        -
                                    </div>
                                </div>
                            </div>
                        </div>
                        :
                        <div>
                            <button className={'accordion-header__comp'} onClick={() => onClick()}>
                                <div className={'accordion-header-intensity'}><PiX className={'accordion-body_item__comp'}/></div>
                                <div className={'accordion-header-name'}>{unique_effect.effect}</div>
                                <div className={'accordion-header-intensity'}>{unique_effect.intensity.toLowerCase()}</div>
                                {/*<div>*/}
                                {/*    <PiCaretDown className={'accordion-icon__comp'}/>*/}
                                {/*</div>*/}
                            </button>

                            <div className={`accordion-collapse__comp accordion-collapse`}
                                 style={
                                     isOpen ? {height: itemRef.current.scrollHeight}
                                         :
                                         {height: "0px"}
                                 }>
                                <div className={'accordion-body accordion-body__comp'} ref={itemRef}>
                                    <div>
                                        -
                                    </div>
                                    <div>
                                        <ul>
                                            {unique_effect.ingrs.map((ingr, ingrIndex) =>
                                                <li className={'accordion-body__item accordion-body_item__comp'} key={ingrIndex}>
                                                    {ingr}
                                                </li>
                                            )}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }

                </div>

            }

        </div>
    );
};

export default ComparisonEffectsItem;