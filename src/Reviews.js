import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import './App.css';
import NavBar from "./navbar";

function Reviews() {

    const [reviews, setReviews] = useState('')
    const params = useParams()

    useEffect(() =>{
        fetch(`http://localhost:3000/Movies/${params.id}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [params.id])


    return (
        <div className="Reviews">
            <NavBar />
            <h1>{reviews.title} | {reviews.rating}/100 </h1>
            <h2>Lead: {reviews.leads}</h2>
            <h2>Director: {reviews.director}</h2>
            <h3>Notes: {reviews.reviews}</h3>
        </div>
    )
}

export default Reviews;