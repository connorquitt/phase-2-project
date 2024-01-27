import React from "react";
import HomePage from "./HomePage";
import MoviePage from "./MoviePage";
import Reviews from "./Reviews";

const routes = [
    {
        path: '/',
        element: <HomePage />
    },
    {
        path: '/movies',
        element: <MoviePage />,
    },
    {
        path: '/movies/:id',
        element: <Reviews />
    }
]

export default routes;