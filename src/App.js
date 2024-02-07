import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from "./HomePage";
import MediaPage from "./MediaPage";
import Reviews from "./Reviews";

export default function App() {
    const [hi, setHi] = useState('hello')
    const routes = createBrowserRouter([
        {
            path: '/',
            element: <HomePage hi={hi} setHi={setHi}/>
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
            <RouterProvider routes={routes}/>
        </div>
    )
}