import React from 'react';
import './Movie.css';


const MovieContent = (props) => {
    return (
        <div className="movieName">
            <h4>{props.name}</h4>
            <img src={props.img} alt=""/>
            <p><b>Released: </b>{props.released}</p>
        </div>

    )
};

export default MovieContent;