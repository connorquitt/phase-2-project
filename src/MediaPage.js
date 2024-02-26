import React from "react";
import { useState, useEffect } from "react";
import './App.css';
import MediaCard from "./MediaCard";
import NavBar from "./navbar";
import AddMedia from "./AddMedia";

function MediaPage() {
  //State Variables
    const [mediaList, setMediaList] = useState([])
    
    //useEffect/Fetches
    useEffect(() => {
      fetch('http://localhost:3000/Media')
        .then(res => res.json())
        .then(data => setMediaList(data))
    }, []);
  
    //functions
    function MediaCardList() {
        return (
            mediaList.map((media => {
                return <MediaCard media={media} key={media.id}/>
            })
        ))
    }
  
    return (
      <div className="MovieHeader">
        <NavBar />
        <h1>Media List</h1>
        <div className='row'>
          <div className='column'>
          <MediaCardList />
          </div>
          <div className='column'>
          <AddMedia mediaList={mediaList} setMediaList={setMediaList} />
          </div>
        </div>
      </div>
    );
  }
  
  export default MediaPage;
