import React from "react";
import { useState, useEffect } from "react";
import './App.css';

function MovieCard({ movieList }) {

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
                    <p>rating: {movie.rating}⭐</p>
                </div>
            )
        })
    )
}

export default MovieCard;