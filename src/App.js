import React from 'react';
import { useState } from 'react';
import './App.css';
import HomePage from './HomePage';
import MoviePage from './MoviePage'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <div >
      <header >
        <MoviePage />
      </header>
    </div>
  );
}

export default App;
