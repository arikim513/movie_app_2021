import React from "react";
import PropTypes from "prop-types";
import PropsSample from "./Props";

function Movie({id,year,title,summary,poster}) {
    return <h5>{title}</h5>
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;