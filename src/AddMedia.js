import React, { useState } from "react";

export default function AddMedia({ setNewMedia }) {
    const [title, setTitle] = useState('')
    const [mediaType, setMediaType] = useState('')
    const [creator, setCreator] = useState('')
    const [length, setLength] = useState('')
    const [rating, setRating] = useState('')
    const [thoughts, setThoughts] = useState('')

    function handleSubmit(e) {
        e.preventDefault();
        setNewMedia({
          title: title,
          mediaType: mediaType,
          creator: creator,
          length: length,
          rating: rating,
          thoughts: thoughts
        })
        
        setTitle('')
        setMediaType('')
        setCreator('')
        setLength('')
        setRating('')
        setThoughts('')
        
      }

    return(
        <form className="Media-Maker" onSubmit={handleSubmit}>
            Title: <input type="text" value={title} onChange={(e) => {setTitle(e.target.value)}}/>
            Media Type: <input type="text" value={mediaType} onChange={(e) => {setMediaType(e.target.value)}}/>
            Creator: <input type="text" value={creator} onChange={(e) => {setCreator(e.target.value)}}/>
            Length: <input type="text" value={length} onChange={(e) => {setLength(e.target.value)}}/>
            Rating/10: <input type="text" value={rating} onChange={(e) => {setRating(e.target.value)}}/>
            Thoughts: <input type="text" value={thoughts} onChange={(e) => setThoughts(e.target.value)}/>
            <button>Create Review</button>
        </form>
    )
}


    