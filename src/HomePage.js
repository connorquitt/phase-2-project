import React, { useState, useEffect } from "react";
import NavBar from "./navbar";

function HomePage() {
  const [newMedia, setNewMedia] = useState({
    title: "",
    genre: "",
    playTime: "",
    thoughts: ""
  });
  const [title, setTitle] = useState('')
  const [mediaType, setMediaType] = useState('')
  const [length, setLength] = useState('')
  const [creator, setCreator] = useState('')
  const [thoughts, setThoughts] = useState('')
  const [rating, setRating] = useState('')

  useEffect(() => {
    if (newMedia.title !== "") {
      fetch("http://localhost:3000/Movies", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newMedia)
      })
        .then(res => res.json())
    }
  }, [newMedia]);

  function HandleClick(e) {
    setTitle(document.getElementById('title').value)
    setMediaType(document.getElementById('mediaType').value)
    setLength(document.getElementById('length').value)
    setCreator(document.getElementById('creator').value)
    setThoughts(document.getElementById('thoughts').value)
    setRating(document.getElementById('rating').value)

    return setNewMedia({
      title: title,
      mediaType: mediaType,
      creator: creator,
      length: length,
      rating: rating,
      thoughts: thoughts
    });
  }

  return (
    <div className="HomePage">
      <header className="HomeHeader">
        <NavBar />
        <h1>Media Notes</h1>
      </header>
      <div className="Movie-Maker">
        Title: <input type="text" id="title" />
        Media Type: <input type="text" id="mediaType" />
        Creator: <input type="text" id="creator" />
        Length: <input type="text" id="length" />
        Rating/10: <input type="text" id="rating" />
        Thoughts: <input type="text" id="thoughts" />
        <button onClick={HandleClick}>Create Review</button>
      </div>
    </div>
  );
}

export default HomePage;
