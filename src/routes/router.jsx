import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/home/Home';
import "../App.css";
import CategoryPage from '../pages/CategoryPage';
import Search from '../pages/Search';
import Shop from '../pages/Shop';
import Single from '../pages/Single';
import Login from '../pages/Login';
import Register from '../pages/Register';
import CheckoutForm from '../components/CheckoutForm'; 
import Contact from '../pages/Contact'; 

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />, 
        children: [
            {
                path: '/home',
                element: <Home />, 
            },
            {
                path: '/categories/:categoryName',
                element: <CategoryPage />, 
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
            {
                path: '/checkout', 
                element: <CheckoutForm />, 
            },
            {
                path: '/contact', 
                element: <Contact />, 
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



 




