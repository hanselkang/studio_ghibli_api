import React, { useState, useEffect } from 'react'
import FilmItem from './FilmItem'

const FilmList = ({ films, onFilmClick, onButtonClick, selectedFilm, favouriteArray }) => {

    
    const filmsArray = films.map((film, index) => {

        //isInFavorite = favoriteFilms.some( check if film is in this list alreqddy)
        return <FilmItem selectedFilm={selectedFilm} film={film} index={index} onFilmClick={onFilmClick} onButtonClick={onButtonClick} favouriteArray={favouriteArray} />

    })

    return (
        <>
            <div>
            <h3>Film List</h3>
                {filmsArray}
            </div>
        </>
    )
}

export default FilmList