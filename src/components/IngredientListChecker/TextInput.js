import React, {useState} from "react";


import "./IngredientListChecker.modules.css";
import Normalization from "./Normalization";

const TextInput = () => {

    const [Text, setText] = useState(''); // chosen composition
    // const [Image, setImage] = useState(null); // chosen file
    const [normText, setNormText] = useState(''); // server answer

    const handleChange = (event) => {
        setText(event.target.value);
    }

    const handleNormalize = () => {
        setNormText(Normalization(Text));
        if (typeof normText === "undefined") {
            alert("Text is undefined! Check the console.log");
            console.log(normText);
            // return;
        }
    }

    return (
        <div className={"wrapper"}>
            <form className={"input_text"}>
                <label>Enter a composition:</label>
                <div>
                    <textarea
                        name='inputText'
                        value={Text}
                        onChange={handleChange}
                    />
                </div>

                <button type="button" onClick={handleNormalize}>Check text!</button>
            </form>
        </div>
    )

}

export default TextInput;