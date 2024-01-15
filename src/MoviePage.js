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

    return (
        <div className="MovieHeader">
            <h1>Movie List</h1>
            <MovieCard movieList={movieList}/>
        </div>
    )
}

export default MoviePage;