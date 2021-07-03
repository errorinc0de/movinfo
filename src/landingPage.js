import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import image from "./image404.jpg"
import './LandingPage.css';
import slugify from 'slugify';
import Bookmark from './bookmark-1.svg'

function LandingPage() {

    const [genre, setGenre] = useState([]);
    const [movieList, setMovieList] = useState([]);
    const [error, setError] = useState(null);
    const filterRef = useRef();
    const [options, setOptions] = useState([])

    const apiKey = "e0e9872a83bd28fe24d2a0e74ec4ad49";
    const genreRetrivalLink = "https://api.themoviedb.org/3/genre/movie/list?api_key=" + apiKey;
    const movieSpecificGenre = "https://api.themoviedb.org/3/discover/movie?api_key=" + apiKey + "&with_genres=";

    useEffect(() => {

        function retrieveGenres() {
            fetch(genreRetrivalLink).then((res) => {
                if (res.ok) {
                    return res.json();
                }
            }).then(data => {
                setGenre(data.genres);
            })
        }

        retrieveGenres();

    }, [])

    useEffect(() => {
        function retrieveMovieData() {
            
            var movListAllGenre = [];
            genre.forEach(genreEach => {
                const genreName = genreEach.name;
                movListAllGenre[genreEach] = [];
                var movieSpecificGenreLink = movieSpecificGenre + genreEach.id;
                fetch(movieSpecificGenreLink).then((response) => {
                    if (response.ok) {
                        return response.json();
                    }
                    else {
                        setError(response);
                    }
                }).then(movListGenre => {
                    if(movieList.length<genre.length){
                        setMovieList((prev) => [...prev, { genre: genreName, data: [movListGenre] }])
                    }
                })
            })
            setMovieList(movListAllGenre)
        }

        retrieveMovieData()

    }, [genre])

    function handleSearch(e) {
        e.preventDefault()
        fetch("https://api.themoviedb.org/3/search/movie?api_key="+apiKey+"&query="+filterRef.current.value).then(response => {
            if(response.ok) {
                return response.json();
            }
            else {
                setError(response);
            }
        }).then(data => {
            setOptions(data);
        })
    }

    return (
        <div className="landing-page">
            <div className="header">
                <div className="Banner">
                    Movinfo
                </div>
                <form onSubmit={handleSearch} className="search-bar">
                    <input type="text" className="search-input" placeholder="Enter movie name to search..." ref={filterRef}>  
                    </input>
                    <button type="submit" className="search-btn" onClick={handleSearch}>Search</button>
                </form>
            </div>
            <div className="genre-map">
                {options && options.results && options.results.length>0 &&(
                    <div className="genre-block">
                        <div className="genre-header">
                            Search Results ...
                        </div>
                        <div className="genre-movies">
                            {options.results && options.results.map((movie) => {
                                var slugPath = slugify(movie.original_title, "-")
                                slugPath = slugPath.toLowerCase()
                                return (
                                    <div className="movie">
                                        <Link to={`/${slugPath}/`} onClick={()=>{localStorage.setItem(slugPath,movie.id)}}>
                                            <img src={"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/" + movie.poster_path} className="movie-poster" onError={(e)=>{e.target.onerror = null; e.target.src=image }}/>
                                        </Link>
                                        {movie.original_title}{movie.release_date && (` (${movie.release_date.slice(0,4)})`)}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )}
                {movieList && movieList.length > 0 && movieList.map((entry, key) => {
                    return (
                        <div className="genre-block" key={key}>
                            <div className="genre-header">
                                {entry.genre}
                            </div>
                            <div className="genre-movies">
                                {entry.data[0].results && entry.data[0].results.map(movie => {
                                    var slugPath = slugify(movie.original_title, "-")
                                    slugPath = slugPath.toLowerCase()
                                    return (
                                        <div className="movie">
                                        <Link to={`/${slugPath}/`} onClick={()=>{localStorage.setItem(slugPath,movie.id)}}>
                                            <img src={"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/" + movie.poster_path} alt="image" className="movie-poster" onError={(e)=>{e.target.onerror = null; e.target.src=image }}/>
                                        </Link>
                                        {movie.original_title}{movie.release_date && (` (${movie.release_date.slice(0,4)})`)}
                                    </div>
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>
            <Link to="/bookmarks">
                <div className="bookmarks">
                    <img src={Bookmark} alt="image"></img>
                </div>
            </Link>
        </div>
    );
}

export default LandingPage;
