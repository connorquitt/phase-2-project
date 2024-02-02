import React from "react";
import HomePage from "./HomePage";
import MediaPage from "./MediaPage";
import Reviews from "./Reviews";

const routes = [
    {
        path: '/',
        element: <HomePage />
    },
    {
        path: '/media',
        element: <MediaPage />,
    },
    {
        path: '/media/:id',
        element: <Reviews />
    }
]

export default routes;