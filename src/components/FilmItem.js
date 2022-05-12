import React, { useState, useEffect } from 'react'


const FilmItem = ({ film, onFilmClick, onButtonClick, favouriteArray }) => {

    const handleClick = () => {
        onFilmClick(film)
    }

    const handleFavourite = (event) => {

        onButtonClick(event.target.value)
    }

    return (
        <>
            <li onClick={handleClick}>
                {film.title}
                {favouriteArray.includes(film.title) ? <button>❤️</button> : <button onClick={handleFavourite} value={film.title} >🤍</button>}
            </li>

        </>
    )
}

export default FilmItem