import React from "react";
import { useState, useEffect } from "react";
import './App.css';
import { NavLink } from "react-router-dom";

function MediaCard({ media }) {
    return (      
                <div key={media.id} className="card">
                    <h3>{media.title}</h3>
                    <p>Media Type: {media.mediaType}</p>
                    <p>length: {media.length}</p>
                    <p>rating: {media.rating}/10 </p>
                    <NavLink to={`/media/${media.id}`}><button id={media.id}>More Info</button></NavLink>
                </div>
    )
}

export default MediaCard;

