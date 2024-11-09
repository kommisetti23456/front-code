import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';
import LoginForm from './pages/Login'; 
import TrendingProducts from './pages/shop/TrendingProducts';
import Banner from './pages/home/Banner';
import Search from './pages/Search';
import Categories from './pages/home/Categories';
import HeroSection from './pages/home/HeroSection';
import DealsSection from './pages/DealsSection';
import PromoBanner from './pages/PromoBanner';

const App = () => {
    const handleLogin = (data) => {
        console.log('User logged in:', data);
        // Here you can save the user data or perform additional actions
    };

    return (
        <>
            <Navbar />
            <Outlet context={{ onLogin: handleLogin }} />
            <Banner />
            <Categories/>
            <DealsSection/>
            <PromoBanner/>
            <HeroSection/>
            <Search/>
            <TrendingProducts/>
             
            <Footer />
        </>
    );
};

export default App;



