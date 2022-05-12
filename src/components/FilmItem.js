import React, { useState, useEffect } from 'react'


const FilmItem = ({ film, onFilmClick }) => {
    const handleClick =()=>{
        onFilmClick(film)
    }
    return (
        <>
            <li onClick={handleClick}>{film.title}
                <button> Add to Favorite</button></li>
        </>
    )
}

export default FilmItem