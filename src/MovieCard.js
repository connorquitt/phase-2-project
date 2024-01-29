import React from "react";
import { useState, useEffect } from "react";
import './App.css';
import { NavLink } from "react-router-dom";

function MovieCard({ handleLike, movie }) {
    return (      
                <div key={movie.id} className="card">
                    <h3>{movie.title}</h3>
                    <p>genre: {movie.genres}</p>
                    <p>length: {movie.length} minutes</p>
                    <p>rating: {movie.rating}/100 <button onClick={handleLike} id={movie.id}>👍</button> </p>
                    <NavLink to={`/movies/${movie.id}`}><button id={movie.id}>More Info</button></NavLink>
                </div>
    )
}

export default MovieCard;

