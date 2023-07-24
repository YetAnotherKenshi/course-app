import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Quality from "./quality";
import { useSelector, useDispatch } from "react-redux";
import {
    getQualitesByIds,
    getQualitiesLoadingStatus,
    loadQualitiesList
} from "../../../store/qualities";

const QualitiesList = ({ qualities }) => {
    const dispatch = useDispatch();
    const isLoading = useSelector(getQualitiesLoadingStatus());
    useEffect(() => {
        dispatch(loadQualitiesList());
    }, []);
    if (isLoading) return "Loading...";
    const qualitiesList = useSelector(getQualitesByIds(qualities));
    return (
        <>
            {qualitiesList.map((qual) => (
                <Quality key={qual._id} {...qual} />
            ))}
        </>
    );
};

QualitiesList.propTypes = {
    qualities: PropTypes.array
};

export default QualitiesList;
