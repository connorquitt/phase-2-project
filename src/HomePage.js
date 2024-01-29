import React from "react";
import { useState } from "react";
import './App.css';
import NavBar from "./navbar";
import MovieCard from "./MovieCard";

function HomePage() {

    const [newMovie, setNewMovie] = useState([])

    function MakeMovieCard(){
       return (
        <div className="Movie-Maker">
            Title: <input type='text' id='title'/>
            Genre: <input type='text' id='genre'/>
            Length: <input type='text' id='length'/>
            Rating <input type='text' id='rating'/>
            <button onClick={handleClick}>Submit Movie</button>
        </div>
       )
    }

    function handleClick(e) {
        const title = document.getElementById('title').value
        const genre = document.getElementById('genre').value
        const length = document.getElementById('length').value
        const rating = document.getElementById('rating').value
        setNewMovie([{
            title: title,
            genres: genre,
            director: 'NA',
            leads: 'NA',
            length: length,
            rating: rating,
            reviews: 'NA'
        }]) 
        return fetch('http://localhost:3000/Movies', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newMovie)
        })
        .then(res => res.json())
    }

    return (
        <div className="HomePage">
            <header className="HomeHeader">
                <NavBar />
                <h1 >Movie Notes</h1>
            </header>
            <MakeMovieCard />
        </div>
    )
}

export default HomePage;

// did this shit wrong, gonna make the homepage the spot to like add movies with a lil guy that lets you add the name length and rating and maybe a review or smthn but idk for sure
