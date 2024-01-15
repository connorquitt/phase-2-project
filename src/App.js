import React from 'react';
import { useState } from 'react';
import './App.css';
import HomePage from './HomePage';
import MoviePage from './MoviePage'
import Reviews from './Reviews';
import Login from './Login';
import Navbar from './Navbar';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <div >
      <Navbar />
      <Login />
      <header >
        <Reviews />
      </header>
    </div>
  );
}

export default App;
