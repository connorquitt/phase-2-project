import React from 'react';
import { createBrowserRouter, BrowserRouter } from 'react-router-dom';
import './App.css';
import HomePage from './HomePage';
import MoviePage from './MoviePage'
import Reviews from './Reviews';

function App() {

  return (
    <div >
      <header >
        <MoviePage />
      </header>
    </div>
  );
}

export default App;
