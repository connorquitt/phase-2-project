import React from "react";
import { useState, useEffect } from "react";
import './App.css';
import MovieCard from "./MovieCard";

function MoviePage() {
    const [movieList, setMovieList] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/Movies')
    .then(res => res.json())
    .then(data => setMovieList(data))
    }, [])

    function handleLike(event) {
        console.log(event.target.id)
        let currentMovie = movieList.filter((movie) => {
            return event.target.id == movie.id
        })
         console.log(currentMovie)
    }

    return (
        <div className="MovieHeader">
            <button>Home</button>
            <h1>Movie List</h1>
            <MovieCard movieList={movieList} handleLike={handleLike}/>
        </div>
    )
}

export default MoviePage;

//make post thing work :(