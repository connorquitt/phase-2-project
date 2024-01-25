import React from "react";
import { useState } from "react";
import './App.css';
import Navbar from "./Navbar";

function HomePage({ isLoggedIn, setIsLoggedIn }) {
    const [username, setUsername] = useState('')

        function HandleChange(e) {
            setUsername(e.target.value)
        }

        function HandleClick(e) {
            console.log(e)
        }

    return (
        <div className="HomePage">
            <header className="HomeHeader">
                <h1 >SITE NAME</h1>
                <Navbar />
            </header>
        </div>
    )
}

export default HomePage;

//make sure to make 'check state' button clears the login bar and makes the pfp + username show up on the top and update the isLoggedIn state
