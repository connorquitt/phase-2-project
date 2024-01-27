import React from "react";
import { useState, useEffect } from "react";
import './App.css';
import MovieCard from "./MovieCard";
import NavBar from "./navbar";

function MoviePage() {
    const [movieList, setMovieList] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/Movies')
    .then(res => res.json())
    .then(data => setMovieList(data))
    }, [])

    function handleLike(event) {
        console.log(event.target.id)
        let currentMovie = movieList.forEach((movie) => {
             if(event.target.id == movie.id) {
                console.log(movie)
                console.log(movieList)
                return movie.rating++ 
            }
        })
        return movieList
    }

    return (
        <div className="MovieHeader">
            <NavBar />
            <h1>Movie List</h1>
            <MovieCard movieList={movieList} setMovieList={setMovieList} handleLike={handleLike}/>
        </div>
    )
}

export default MoviePage;

//make post thing work :(