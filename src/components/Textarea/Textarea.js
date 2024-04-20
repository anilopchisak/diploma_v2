import React, {useState} from 'react';
import './Textarea.css'

const Textarea = ({handleNormalize}) => {
    const [Text, setText] = useState(''); // введенный состав

    const handleChange = (event) => {
        setText(event.target.value);
        handleNormalize(Text);
    }

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
};

export default Textarea;