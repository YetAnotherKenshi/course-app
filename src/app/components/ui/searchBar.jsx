import React from "react";
import PropTypes from "prop-types";

const SearchBar = ({ searchTerm, onChange }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
    };
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                id="searchbar"
                value={searchTerm}
                onChange={onChange}
                name="search"
                placeholder="Search..."
            />
        </form>
    );
};

SearchBar.propTypes = {
    searchTerm: PropTypes.string,
    onChange: PropTypes.func
};

export default SearchBar;
