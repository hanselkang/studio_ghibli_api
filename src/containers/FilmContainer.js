import React, {useState, useEffect} from 'react'
import FilmList from '../components/FilmList'
import FilmDetail from '../components/FilmDetail'
// import FilmFavourite from '../components/FilmFavourite'

const FilmContainer = () => {

    const [films, setFilms] = useState([])
    const [selectedFilm, setSelectedFilm] = useState(null)
    const [favouriteArray, setFavouriteArray] = useState([])

    useEffect(()=> {
        getFilms()
    }, [])

    const getFilms = function(){
        fetch('https://ghibliapi.herokuapp.com/films/')
        .then(res => res.json())
        .then(films => setFilms(films))
    }

    const onFilmClick = (film) => {
        setSelectedFilm(film)
    }

    const onButtonClick = (fav) => {
        // setFavouriteArray(fav)
        const newArray = [...favouriteArray, fav]
        setFavouriteArray(newArray)
    }
    

    return (
        <>
         <h1>Studio Ghibli</h1>
            <h2>Favourite List
            </h2>
            {favouriteArray}
            <FilmList films={films} onFilmClick={onFilmClick} selectedFilm={selectedFilm} onButtonClick={onButtonClick} favouriteArray={favouriteArray}/>
            {selectedFilm ? <FilmDetail selectedFilm={selectedFilm}></FilmDetail> : null }
        </>
    )
}

export default FilmContainer