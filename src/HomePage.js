import React, { useState, useEffect } from "react";
import NavBar from "./navbar";
import MovieCard from "./MovieCard";

function HomePage() {
  const [newMovie, setNewMovie] = useState({
    title: "",
    genres: "",
    lead: "NA",
    length: "",
    rating: "",
    reviews: "NA"
  });

  useEffect(() => {
    if (newMovie.title !== "") {
      fetch("http://localhost:3000/Movies", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newMovie)
      })
        .then(res => res.json())
        .then(data => console.log(data));
    }
  }, [newMovie]);

  function handleClick(e) {
    const title = document.getElementById("title").value;
    const genre = document.getElementById("genre").value;
    const length = document.getElementById("length").value;
    const rating = document.getElementById("rating").value;
    const lead = document.getElementById("lead").value;
    const director = document.getElementById("director").value;
    const review = document.getElementById("review").value;
    setNewMovie({
      title: title,
      genres: genre,
      director: director,
      leads: lead,
      length: length,
      rating: rating,
      reviews: review
    });
  }

  return (
    <div className="HomePage">
      <header className="HomeHeader">
        <NavBar />
        <h1>Movie Notes</h1>
      </header>
      <div className="Movie-Maker">
        Title: <input type="text" id="title" />
        Genre: <input type="text" id="genre" />
        Lead: <input type="text" id="lead"/>
        Length: <input type="text" id="length" />
        Director: <input type="text" id="director" />
        Rating: <input type="text" id="rating" />
        Review: <input type="text" id="review"/>
        <button onClick={handleClick}>Submit Movie</button>
      </div>
    </div>
  );
}

export default HomePage;
