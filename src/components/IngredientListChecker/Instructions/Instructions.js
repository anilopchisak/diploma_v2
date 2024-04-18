import React from 'react';
import './Instructions.css'

const Instructions = (typeInput) => {
    return (
        <div className={"wrapper__instruction"}>
            <div className={"name__instruction"}>Скопируйте состав косметического средства и вставьте его в поле ввода.</div>
            <div className={"list__instructions"}>
                <div className={"list__instruction__name"}><mark>Разделители между ингредиентами</mark></div>
                <div className={"list__instruction__item"}>Состав должен содержать ингредиенты, разделенные запятыми.</div>
            </div>
            <div className={"list__instructions"}>
                <div className={"list__instruction__name"}><mark>Пояснения в скобках</mark></div>
                <div className={"list__instruction__item"}>Мы не пытаемся распознать все, что указано в скобках, содержимое скобок игнорируется. Если в скобках важные ингредиенты, то скобки нужно убрать, а ингредиенты разделить запятыми.</div>
            </div>
            <div className={"list__instructions"}>
                <div className={"list__instruction__name"}><mark>Опечатки в словах</mark></div>
                <div className={"list__instruction__item"}>К сожалению, на сайтах интернет-магазинов и производителей часты опечатки в составах. Наш алгоритм поиска и база знаний справляется со многими опечатками, но не со всеми. Иногда Вы сами можете исправить явную опечатку и повысить тем самым полноту анализа.</div>
            </div>
        </div>
    );
};

export default Instructions;