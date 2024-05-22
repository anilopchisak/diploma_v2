import React, {useContext, useEffect, useState} from 'react';
import './Textarea.css'
import {Context} from "../../index";
import {observer} from "mobx-react-lite";

const Textarea = observer(({handleNormalize, recText, setTypeInput}) => {
    const [Text, setText] = useState(''); // введенный состав

    useEffect(() => {
        if(recText) {
            setText(recText);
        }
    }, [recText]);

    const handleChange = (event) => {
        setText(event.target.value);
    }
    useEffect(() => {
        if (Text) {
            handleNormalize(Text);
            setTypeInput('final');
        }
    }, [Text]);

    return (
        <div>
            <textarea className={'textarea_input'}
                      name='inputText'
                      value={Text}
                      onChange={handleChange}
                      placeholder={"Введите состав через запятую."}
            />
        </div>
    );
});

export default Textarea;