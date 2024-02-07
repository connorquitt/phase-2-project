import React, { useState, useEffect } from "react";
import NavBar from "./navbar";
import MediaCard from "./MediaCard";
import App from "./App";

function HomePage({ hi, setHi }) {
  const [mediaList, setMediaList] = useState([])
  const [filteredMediaList, setFilteredMediaList] = useState([])
  function handleChange(e) {
    const newList = mediaList.filter((media) => media.mediaType == e.target.value)
    setFilteredMediaList(newList)
  }

  useEffect(() => {
    fetch('http://localhost:3000/Media')
     .then(res => res.json())
     .then(data => setMediaList(data))
 }, [])

 function MediaCardList() {
  return (
      filteredMediaList.map((media => {
          return <MediaCard media={media} key={media.id}/>
      })
  ))
}

function checkState() {
  console.log(hi)
}


  return (
    <div className="HomePage">
      <header className="HomeHeader">
        <NavBar />
        <button onClick={checkState} value='hi'/>
        <h1>Media Notes</h1>
      </header>
      <label for='mediaType'>See Entries</label>
        <select id='mediaType' name='mediaType' onChange={handleChange}>
          <option value='Media Types'>Media Types</option>
          <option value='Movie'>Movie</option>
          <option value='Game'>Game</option>
        </select>
        <MediaCardList />
    </div>
  );
}

export default HomePage;
