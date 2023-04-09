import React from "react";
import TextField from "./textField";
import PropTypes from "prop-types";

const SearchBar = ({ searchTerm, onChange }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
    };
    return (
        <form onSubmit={handleSubmit}>
            <TextField
                label=""
                name="search"
                value={searchTerm}
                onChange={onChange}
            />
        </form>
    );
};

SearchBar.propTypes = {
    searchTerm: PropTypes.string,
    onChange: PropTypes.func
};

export default SearchBar;
