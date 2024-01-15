import React from "react";
import { useState } from "react";
import './App.css';

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
                <p>{username} 👤</p>
                <h1 >SITE NAME</h1>
            </header>
            <div className="Login">
                <h1>Login</h1>
                <input type="textbox" name='name' value={username} onChange={HandleChange} button={<input type='button' name='SubmitUsername' value='checkState' onClick={HandleClick}/> } />
                <input type='button' name='SubmitUsername' value='checkState' onClick={HandleClick}/> 
            </div>
        </div>
    )
}

export default HomePage;

//make sure to make 'check state' button clears the login bar and makes the pfp + username show up on the top and update the isLoggedIn state
