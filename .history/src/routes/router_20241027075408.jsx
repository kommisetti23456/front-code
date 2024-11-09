
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from "../pages/Home"
 
const router = createBrowserRouter([
    {
        path: '/',
        element: <App />, // Main app component
        children: [
            {
                path: '/',
                element: <Home/>, // Home component for the root path
            },
            {
                path: '/categories/:categoryName',
                element: <CategoryPage />, // Matches category page
            },
            {
                path: '/search',
                element: <Search />,
            },
            {
                path: '/shop',
                element: <Shop />,
            },
            {
                path: '/shop/:id', 
                element: <Single />,
            },
        ],
    },
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/register',
        element: <Register />,
    },
]);

export default router;


 




