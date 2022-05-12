import React from "react";

const FilmDetail =({selectedFilm}) => {
    return (
        <div>
        <p>Title : {selectedFilm.title} </p>
        <p>Original Title : {selectedFilm.original_title} </p>
            <img src={selectedFilm.image} width="300px" ></img>
        <p>Director : {selectedFilm.director} </p>
        <p>Release Year : {selectedFilm.release_date} </p>
        <p>Description : {selectedFilm.description} </p>
            <p>Review :{selectedFilm.rt_score} </p>
        </div>
    )
}

export default FilmDetail