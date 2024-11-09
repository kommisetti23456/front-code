
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import CategoryPage from '../pages/CategoryPage';
import Search from '../pages/Search';
import Shop from '../pages/Shop';
import Single from '../pages/Single';
import Login from '../pages/Login';
import Register from '../pages/Register';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />, // Main app component
        children: [
            {
                path: '/',
                element: <Home/>, // Home component for the root path
            },
//             {
//                 path: '/categories/:categoryName',
//                 element: <CategoryPage />, // Matches category page
//             },
//             {
//                 path: '/search',
//                 element: <Search />,
//             },
//             {
//                 path: '/shop',
//                 element: <Shop />,
//             },
//             {
//                 path: '/shop/:id', 
//                 element: <Single />,
//             },
//         ],
//     },
//     {
//         path: '/login',
//         element: <Login />,
//     },
//     {
//         path: '/register',
//         element: <Register />,
//     },
]);

export default router;


 




