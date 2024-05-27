import React from 'react';
import'./NaturalCard.css'
import { PiFlask, PiFlower, PiFlowerTulip, PiTree } from "react-icons/pi";
import {Chart as ChartJS} from 'chart.js/auto';
import {Doughnut} from "react-chartjs-2";

const NaturalCard = ({natural, styleType}) => {
    return (
        <div className={'natural-card__wrapper'}>
            <div className={styleType? 'natural__item' : 'natural__item__comparison'}>
                <Doughnut
                    data={{
                        labels: [
                            'Натуральные компоненты',
                            'Синтетические компоненты'
                        ],
                        datasets: [
                            {
                                label: "%",
                                data: [
                                    natural,
                                    100-natural
                                ]
                                ,
                                backgroundColor: [
                                    'rgba(235, 130, 165, 0.8)',
                                    'rgba(127, 111, 192, 0.8)',
                                ],
                                borderColor: [
                                    'rgba(0, 0, 0, 0)',
                                    'rgba(0, 0, 0, 0)'
                                ],

                                // hoverOffset: 4
                            },
                        ],
                    }}
                />
            </div>
        </div>
    );
};

export default NaturalCard;