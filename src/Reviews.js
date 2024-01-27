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


    function ReviewCard() {
        if(typeof reviews === 'string') {
           return <div>
                    <p>Reviews Loading...</p>
                </div>
        } else {
            return reviews.reviews.map((review, index) => {
                return (
                    <div key={index} className="card">
                        <h3>👤</h3>
                        <p>{review}</p>
                    </div>
                )
            })
        }
    }

    return (
        <div className="Reviews">
            <NavBar />
            <h1>{reviews.title} | {reviews.rating} 👍</h1>
            <ReviewCard />
        </div>
    )
}

export default Reviews;