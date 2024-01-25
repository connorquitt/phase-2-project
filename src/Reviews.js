import React from "react";
import { useState, useEffect } from "react";
import './App.css';

function Reviews() {

    const [reviews, setReviews] = useState('')

    useEffect(() =>{
        fetch(`http://localhost:3000/Movies/3`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])


    function ReviewCard() {
        if(typeof reviews === 'string') {
           return <div>
                    <p>Reviews Loading...</p>
                </div>
        } else {
            return reviews.reviews.map((review, index) => {
                return (
                    <div key={index} className="card">
                        <h3>username 👤</h3>
                        <p>{review}</p>
                    </div>
                )
            })
        }
    }

    return (
        <div className="Reviews">
            <h1>{reviews.title} | {reviews.rating}⭐</h1>
            <ReviewCard />
        </div>
    )
}

export default Reviews;