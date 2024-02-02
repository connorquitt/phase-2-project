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
      fetch("http://localhost:3000/Media", {
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
    const newTitle = document.getElementById('title').value;
    const newMediaType = document.getElementById('mediaType').value;
    const newLength = document.getElementById('length').value;
    const newCreator = document.getElementById('creator').value;
    const newThoughts = document.getElementById('thoughts').value;
    const newRating = document.getElementById('rating').value;
  
    setNewMedia({
      title: newTitle,
      mediaType: newMediaType,
      creator: newCreator,
      length: newLength,
      rating: newRating,
      thoughts: newThoughts
    });
  
    document.getElementById('title').value = '';
    document.getElementById('mediaType').value = '';
    document.getElementById('length').value = '';
    document.getElementById('creator').value = '';
    document.getElementById('thoughts').value = '';
    document.getElementById('rating').value = '';
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
