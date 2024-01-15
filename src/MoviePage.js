import React from "react";
import { useState, useEffect } from "react";
import './App.css';

function MoviePage() {
    const [movieList, setMovieList] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/Movies')
    .then(res => res.json())
    .then(data => setMovieList(data))
    }, [])


    function MovieCard() {

        function handleClick(e) {
            console.log(e.target)
        }

        return (
            movieList.map((movie) => {
                return (
                    <div key={movie.id} className="card" onClick={handleClick}>
                        <h3>{movie.title}</h3>
                        <p>genres: add genres</p>
                        <p>length: {movie.length}</p>
                        <p>rating: {movie.rating}/10</p>
                    </div>
                )
            })
        )
    }

    return (
        <div className="MovieHeader">
            <h1>Movie List</h1>
            <MovieCard />
        </div>
    )
}

export default MoviePage;