import React from "react";
import { useState, useEffect } from "react";
import './App.css';

function MovieCard({ movieList, handleLike }) {

    function handleClick(e) {
        console.log(e.target)
    }


    return (
        movieList.map((movie) => {
            return (
                <div key={movie.id} className="card">
                    <h3>{movie.title}</h3>
                    <p>genres: add genres</p>
                    <p>length: {movie.length}</p>
                    <p>rating: {movie.rating} <button onClick={handleLike} id={movie.id}>👍</button> </p>
                    <button id={movie.id} onClick={handleClick}>More Info</button>
                </div>
            )
        })
    )
}

export default MovieCard;