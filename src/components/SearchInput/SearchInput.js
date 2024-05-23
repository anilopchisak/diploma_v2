import React from 'react';
import "./SearchInput.css"

const SearchInput = ({setSearch}) => {
    return (
        <div className={"serach__input__place"}>
            <label>Название</label>
            <input
                type={"search"}
                onChange={(e) => setSearch(e.target.value)}
            />
        </div>
    );
};

export default SearchInput;