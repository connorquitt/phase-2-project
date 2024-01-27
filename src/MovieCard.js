import React from "react";
import { useState, useEffect } from "react";
import './App.css';
import { NavLink } from "react-router-dom";

function MovieCard({ setMovieList, movieList, handleLike }) {

    function handleClick(e) {
        console.log(e.target.id)
    }

    return (
        movieList.map((movie) => {
            return (
                <div key={movie.id} className="card">
                    <h3>{movie.title}</h3>
                    <p>genres: add genres</p>
                    <p>length: {movie.length}</p>
                    <p>rating: {movie.rating} <button onClick={handleLike} id={movie.id}>👍</button> </p>
                    <NavLink to={`/movies/${movie.id}`}><button id={movie.id} onClick={handleClick}>More Info</button></NavLink>
                </div>
            )
        })
    )
}
export default MovieCard;

