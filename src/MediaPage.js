import React from "react";
import { useState, useEffect } from "react";
import './App.css';
import MediaCard from "./MediaCard";
import NavBar from "./navbar";
import AddMedia from "./AddMedia";

function MediaPage() {
  //State Variables
    const [mediaList, setMediaList] = useState([]);
    const [title, setTitle] = useState('')
    const [mediaType, setMediaType] = useState('')
    const [creator, setCreator] = useState('')
    const [length, setLength] = useState('')
    const [rating, setRating] = useState('')
    const [thoughts, setThoughts] = useState('')
    const [newMedia, setNewMedia] = useState({
      title: '',
      mediaType: '',
      creator: '',
      length: '',
      rating: '',
      thoughts: ''
    });
    
    //useEffect/Fetches
    useEffect(() => {
      fetch('http://localhost:3000/Media')
        .then(res => res.json())
        .then(data => setMediaList(data))
    }, []);

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
          .then(data => setMediaList([...mediaList, data]))
      }
    }, [newMedia]);
  
    //functions
    function MediaCardList() {
        return (
            mediaList.map((media => {
                return <MediaCard media={media} key={media.id}/>
            })
        ))
    }

    function handleClick() { 
      setNewMedia({
        title: title,
        mediaType: mediaType,
        creator: creator,
        length: length,
        rating: rating,
        thoughts: thoughts
      });
    }
  
    return (
      <div className="MovieHeader">
        <NavBar />
        <h1>Movie List</h1>
        <div className='row'>
          <div className='column'>
          <MediaCardList />
          </div>
          <div className='column'>
            <AddMedia handleClick={handleClick}/>
          </div>
        </div>
      </div>
    );
  }
  
  export default MediaPage;