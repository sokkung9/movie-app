import React from 'react';
// import { Link } from 'react-router-dom';
import './Movie.css';
import PropTypes from 'prop-types';
import LinesEllipsis from 'react-lines-ellipsis';

function Movie({title, poster, genres, synopsis}) {
    return (
        <div className="Movie">
            <div className="Movie_Columm">
                <MoviePoster poster={poster} alt={title} />
            </div>
            <div className="Movie_Columm">
                <h1>{title}</h1>
                <div className="Movie_Genres">
                    {genres.map((genre, index) => {
                        return <MovieGenre genre={genre} key={index} />
                    })}
                </div>
                <p className="Movie_Sysnopsis">
                    <LinesEllipsis
                        text={synopsis}
                        maxLine='3'
                        ellipsis=' ...'
                        trimRight
                        basedOn='letters'
                    />
                </p>
            </div>
        </div> 
    )
}

function MovieGenre({genre}) {
    return (
        <span className="Movie_Genre">{genre} </span>
    )
}

function MoviePoster ({poster, alt}) { // props poster
    return (
        <img src={poster} alt={alt} title={alt} className="Movie_Poster"/>
    )   
}


Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.string.isRequired,
    synopsis: PropTypes.string.isRequired,
}

MoviePoster.propTypes = {
    poster: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
}

MovieGenre.propTypes = {
    genre: PropTypes.string.isRequired
}

export default Movie;