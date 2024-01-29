import React from "react";
import { useState, useEffect } from "react";
import './App.css';
import MovieCard from "./MovieCard";
import NavBar from "./navbar";
import App from "./App";

function MoviePage() {
    const [movieList, setMovieList] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/Movies')
    .then(res => res.json())
    .then(data => setMovieList(data))
    }, [])

    function handleLike(e) {
            let id = e.target.id
             let currentMovie = movieList.forEach((movie) => {
             if(e.target.id == movie.id) {
                movie.rating++
                return (
                    fetch(`http://localhost:3000/Movies/${id}`, {
                        method: 'PATCH',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(movie)
                    })
                    .then(res => res.json())
                    .then(data => console.log(data))
                )
            }
        })
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