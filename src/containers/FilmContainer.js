import React, {useState, useEffect} from 'react'
import FilmList from '../components/FilmList'
import FilmDetail from '../components/FilmDetail'

const FilmContainer = () => {

    const [films, setFilms] = useState([])
    const [selectedFilm, setSelectedFilm] = useState(null)

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

    return (
        <>
         <h1>Studio Ghibli</h1>
         <FilmList films = {films} onFilmClick={onFilmClick} />
            {selectedFilm ? <FilmDetail selectedFilm={selectedFilm}></FilmDetail> : null }
         
        </>
    )
}

export default FilmContainer