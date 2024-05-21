import React from 'react';
import './CombCard.css'

const CombCard = ({combs}) => {
    return (
        <div className={'effect__intensity'}>
            {combs.map((comb_type, comb_type_index) =>
                <div className={'effect__item'} key={comb_type_index}>
                    <div className={'effect__item__name'}>{comb_type.comb_type}</div>

                    {comb_type.combination.map((combination, combinationIndex) =>
                        <div className={'comb-item'} key={combinationIndex}>
                            <div className={'comb-name'}>
                                {combination.ingr_name.toUpperCase()}
                            </div>
                            <div className={'comb-desc'}>
                                {combination.description}
                            </div>
                        </div>

                    )}

                </div>
            )}
        </div>
    );
};

export default CombCard;