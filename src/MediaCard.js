import React from "react";
import './App.css';
import { NavLink } from "react-router-dom";

function MediaCard({ media, setMediaList }) {

    function handleDelete() {
        fetch(`http://localhost:3000/Media/${media.id}`, {
            method: 'DELETE'
        })
        .then(setMediaList)
    }

    return (      
                <div key={media.id} className="card">
                    <button id='delete_button' onClick={handleDelete}>❌</button>
                    <h3>{media.title}</h3>
                    <p>Type: {media.mediaType}</p>
                    <p>length: {media.length}</p>
                    <p>rating: {media.rating}/10 </p>
                    <NavLink to={`/media/${media.id}`}><button id={media.id}>More Info</button></NavLink>
                </div>
    )
}

export default MediaCard;

