import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import slugify from 'slugify';
import image from './image404.jpg'
import nts from './nts.png'
import './LandingPage.css'

function Bookmarks() {

    const apiKey = "e0e9872a83bd28fe24d2a0e74ec4ad49";

    const [bookmarks, setBookmarks] = useState([]);
    const [movieData, setMovieData] = useState([]);


    useEffect(()=> {
        var bookmarks = []
        for(var i in localStorage) {
            var number = parseInt(i)
            if(!isNaN(number))
                bookmarks.push(i)
        }
        setBookmarks(bookmarks)
    },[])

    useEffect(()=>{
            bookmarks.forEach(entry => {
                var link = `https://api.themoviedb.org/3/movie/${entry}?api_key=` + apiKey;
                
                fetch(link).then(response => {
                    if(response.ok){
                        return response.json()
                    }
                    else {
                        throw response
                    }
                }).then((retrivedData) => {
                    setMovieData((m)=> [...m,retrivedData])
                }).catch(err=>console.log(err))
            })      
    },[bookmarks])
    

    return (
        <div className="landing-page">
            
                <div className="header">
                    <div className="Banner">
                        Movinfo
                        <span className="des"> Bookmarks</span>
                    </div>
                </div>
                <div className="bookmark-container">
                    <div className="inner-bookmark-container">
                        {movieData.length>0 ? movieData.map((each, key)=>{
                            console.log(each)
                            var slugURL = slugify(each.original_title,"-").toLowerCase()
                            return(
                                <div key={key} className="cards">
                                    {each.original_title}
                                    <Link to={`/${slugURL}`}>
                                        <img src={"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/" + each.poster_path} className="image-bookmark" onError={(e)=>{e.target.onerror = null; e.target.src=image }}/>
                                    </Link>
                                </div>
                            )
                        }) : (
                            <div className="nts">
                                Nothing to Show
                                <img src={nts}></img>
                            </div>
                        )
                    }

                    </div>
                </div>

        </div>
    )
}

export default Bookmarks
