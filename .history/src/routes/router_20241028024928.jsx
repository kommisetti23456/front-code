import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/home/Home';
import "../App.css";
import CategoryPage from '../pages/CategoryPage';
import Search from '../pages/Search';
import Shop from '../pages/Shop';
import Single from '../pages/Single';
import CheckoutForm from '../components/CheckoutForm'; // Import CheckoutForm component
import Contact from '../pages/Contact'; // Import Contact component

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />, // Main app component
        children: [
            {
                path: '/',
                element: <Home />, // Home component for the root path
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
            {
                path: '/checkout', // Checkout page route
                element: <CheckoutForm />, // CheckoutForm component to render for /checkout
            },
            {
                path: '/contact', // Contact page route
                element: <Contact />, // Contact component to render for /contact
            },
        ],
    },
]);

export default router;





 




