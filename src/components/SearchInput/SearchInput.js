import React from 'react';
import "./SearchInput.css"

const SearchInput = () => {
    return (
        <div className={"serach__input__place"}>
            <label>Название</label>
            <input
                type={"search"}
            />
        </div>
    );
};

export default SearchInput;