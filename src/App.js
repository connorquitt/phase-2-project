import React, { useContext, useState } from "react";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from "./HomePage";
import MediaPage from "./MediaPage";
import Reviews from "./Reviews";

export default function App() {
    const routes = createBrowserRouter([
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
    ])

    return(
        <div>
            <RouterProvider router={routes}/>
        </div>
    )
}