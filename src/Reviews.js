import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import './App.css';
import NavBar from "./navbar";

function Reviews() {

    const [reviews, setReviews] = useState('')
    const params = useParams()

    useEffect(() =>{
        fetch(`http://localhost:3000/Media/${params.id}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [params.id])


    return (
        <div className="Reviews">
            <NavBar />
            <h1>{reviews.title} | {reviews.rating}/10 </h1>
            <p>Creator: {reviews.creator}</p>
            <p>Thoughts: {reviews.thoughts}</p>
        </div>
    )
}

export default Reviews;