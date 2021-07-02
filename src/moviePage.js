import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import slugify from 'slugify';
import image from './image404.jpg'
import './LandingPage.css'

function MoviePage() {
    
    const {id, slugPath} = useParams();
    const [isPresent, setIsPresent] = useState(false);
    const [movieData, setMovieData] = useState([])
    const [movieCred, setMovieCred] = useState([])
    const [filmCast, setFilmCast] = useState([])
    const [director, setMovieDirector] = useState(null)

    const apiKey = "e0e9872a83bd28fe24d2a0e74ec4ad49";
    const movieDetAPILink = `https://api.themoviedb.org/3/movie/${id}?api_key=` + apiKey;
    const movieCredsAPILink = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=` + apiKey;

    useEffect (()=>{
        fetch(movieDetAPILink).then(response => {
            if(response.ok)
                return response.json()
            else
                throw response;
        }).then((data)=> {
            setMovieData (data)

            if(localStorage.getItem(data.id)) {
                setIsPresent(true);
            } else {
                setIsPresent(false);
            }

            var rating = parseFloat(data.vote_average);

            rating = (rating / 10) * 100;

            document.querySelector (`.stars-inner`).style.width = rating + "%";
        })
    },[])

    useEffect (()=>{
        fetch(movieCredsAPILink).then(response => {
            if(response.ok)
                return response.json()
            else
                throw response;
        }).then((data)=> {
            setMovieCred (data);
            var FilmCastPop = data.cast;
            var sortedCast = sortJSON(FilmCastPop, "order", "123");

            setFilmCast (sortedCast)
            console.log (sortedCast)
        })
    },[])

    useEffect(()=>{
        if(movieCred && movieCred.crew) {
            var directorEntry = movieCred.crew.find(entry => entry.job === "Director")
            if(directorEntry) 
                setMovieDirector(directorEntry)
        }
    }, [movieCred])

    function sortJSON(arr, key, way) {
        return arr.sort(function(a, b) {
            var x = a[key]; var y = b[key];
            if (way === '123') { return ((x < y) ? -1 : ((x > y) ? 1 : 0)); }
            if (way === '321') { return ((x > y) ? -1 : ((x < y) ? 1 : 0)); }
        });
    }

    function bookmarkItem () {
        var sluggedTitle = slugify(movieData.original_title, "-")
        localStorage.setItem(movieData.id, sluggedTitle)
        setIsPresent(true)
    }
    
    function unbookmarkItem () {
        localStorage.removeItem(movieData.id)
        setIsPresent(false)
    }

    useEffect(()=> {
    
    },[localStorage])

    return (
        <div className="landing-page">
            {movieData && (
                <>
                <div className="header">
                    <div className="Banner">
                        Movinfo
                    </div>
                    {!isPresent ?  
                    (<div className="button-parent">
                        <button className="btn" onClick={()=>bookmarkItem()}>Bookmark</button>
                    </div>) :  (<div className="button-parent">
                        <button className="btn" onClick={()=>unbookmarkItem()}>Remove Bookmark</button>
                    </div>)}
                </div>
                <div className="movieBox">
                    <div className="movieContainer">
                        <div className="imageContainer">
                            <img src={"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/" + movieData.poster_path} className="image" onError={(e)=>{e.target.onerror = null; e.target.src=image }}/>
                        </div>
                        <div className="detailsContainer">
                            <div className="secondLevelContainer">
                                <div className="movie-heading">
                                    <div className="movie-title">
                                        {movieData.original_title} ( {movieData.vote_average==0?"Unrated" : parseFloat(movieData.vote_average)/2} )
                                    </div>
                                    <div class="stars-outer">
                                        <div class="stars-inner"></div>
                                    </div>
                                </div>
                                <div id="row2">
                                    {movieData.release_date && (`${movieData.release_date.slice(0,4)} | `)}{movieData.runtime && `${movieData.runtime} mins` + " | "}{director && director.name}
                                </div>
                                <div id="row3">
                                    <span className="row3-head">Cast:</span> 
                                    {filmCast && filmCast.length > 0 && filmCast.slice(0,4).map((castMember, key)=>{
                                        return (
                                            <span key={key}>
                                                {key<3 ? `${castMember.name}` + ", " : `${castMember.name}`}
                                            </span>
                                        )
                                    })}
                                </div>
                                <div id="row4">
                                    Plot: {movieData.overview}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </>
            )}
        </div>
    )
}

export default MoviePage
