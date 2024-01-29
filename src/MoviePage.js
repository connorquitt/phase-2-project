import React from "react";
import { useState, useEffect } from "react";
import './App.css';
import MovieCard from "./MovieCard";
import NavBar from "./navbar";
import App from "./App";

function MoviePage() {
    const [movieList, setMovieList] = useState([]);
  
    useEffect(() => {
      fetch('http://localhost:3000/Movies')
        .then(res => res.json())
        .then(data => setMovieList(data))
    }, []);
  
    function handleLike(e) {
      const id = e.target.id;
      const updatedMovieList = movieList.map(movie => {
        if (movie.id === parseInt(id)) {
          return { ...movie, rating: movie.rating + 1 };
        }
        return movie;
      });
  
      fetch(`http://localhost:3000/Movies/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ rating: updatedMovieList.find(movie => movie.id === parseInt(id)).rating })
      })
        .then(res => res.json())
        .then(updatedMovie => {
          const updatedList = movieList.map(movie => {
            if (movie.id === updatedMovie.id) {
              return updatedMovie;
            }
            return movie;
          });
          setMovieList(updatedList);
        });
    }
  
    return (
      <div className="MovieHeader">
        <NavBar />
        <h1>Movie List</h1>
        <MovieCard movieList={movieList} handleLike={handleLike} />
      </div>
    );
  }
  
  export default MoviePage;
//make post thing work :(