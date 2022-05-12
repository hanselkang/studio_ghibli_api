import React, {useState, useEffect} from 'react'
import FilmItem from './FilmItem'

const FilmList = ({films, onFilmClick}) => {

    const filmsArray = films.map((film, index) => {
            return <FilmItem film={film} index={index} onFilmClick={onFilmClick} />
            
    })

    return (
        <>
            {filmsArray}
        </>
    )
}

export default FilmList