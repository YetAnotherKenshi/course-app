import React from "react";
import PropTypes from "prop-types";
import Quality from "./quality";

const QualiitiesList = ({ qualities }) => {
    return (
        <>
            {qualities.map((qual) => (
                <Quality {...qual} key={qual._id} />
            ))}
        </>
    );
};

QualiitiesList.propTypes = {
    qualities: PropTypes.array.isRequired
};

export default QualiitiesList;
