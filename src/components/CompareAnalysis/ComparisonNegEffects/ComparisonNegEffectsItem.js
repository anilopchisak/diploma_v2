import React, {useRef} from 'react';
import {PiCheck, PiX, PiCircleBold} from "react-icons/pi";

const ComparisonNegEffectsItem = ({isOpen, onClick, effect, unique_effect, unique_eff_num}) => {
    const itemRef = useRef(null);

    return (
        <div>
            {effect ?
                <div className={'accordion-item'}>
                    <button className={'accordion-header__comp'} onClick={() => onClick()}>
                        <div className={'accordion-header-intensity'}><PiCircleBold/></div>
                        <div className={'accordion-header-name'}>{effect.side_effect}</div>
                        <div className={'accordion-header-intensity'}><PiCircleBold/></div>
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
                                <div className={'accordion-header-intensity'}><PiCircleBold/></div>
                                <div className={'accordion-header-name'}>{unique_effect.side_effect}</div>
                                <div className={'accordion-header-intensity'}><PiX/></div>
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
                                <div className={'accordion-header-intensity'}><PiX/></div>
                                <div className={'accordion-header-name'}>{unique_effect.side_effect}</div>
                                <div className={'accordion-header-intensity'}><PiCircleBold/></div>
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

export default ComparisonNegEffectsItem;