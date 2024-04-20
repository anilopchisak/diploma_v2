import React from 'react';
import './Instructions.css'

const Instructions = (typeInput) => {

    let _typeInput;
    _typeInput = typeInput.typeInput;

    return (
        <div className={"wrapper__instruction"}>
            {
                _typeInput === 'img' ?
                    <div>
                        <div className={"name__instruction"}>Перетащите изображение состава в поле или выберите вручную.</div>
                        <div className={"list__instructions"}>
                            <div className={"list__instruction__name"}><mark>Четкое изображение</mark></div>
                            <div className={"list__instruction__item"}>Размытые или размазанные изображения могут затруднить распознавание текста.</div>
                        </div>
                        <div className={"list__instructions"}>
                            <div className={"list__instruction__name"}><mark>Хорошая освещенность</mark></div>
                            <div className={"list__instruction__item"}>Фотография должна быть сделана при хорошем освещении. Избегайте слишком ярких или темных областей, так как это может повлиять на читаемость текста.</div>
                        </div>
                        <div className={"list__instructions"}>
                            <div className={"list__instruction__name"}><mark>Прямой угол съемки</mark></div>
                            <div className={"list__instruction__item"}>Фотография должна быть сделана под прямым углом к тексту. Избегайте наклона камеры или перспективных искажений, так как это может исказить текст и затруднить его распознавание.</div>
                        </div>
                    </div>
                :
                    <div>
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
            }

        </div>

    );
};

export default Instructions;