 // src/components/Banner.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import bannerImg from '../assets/header.png'
const Banner = () => {
    return (
        <div className='section__container header__container'>
            <div className='header__content z-30'>
                <h4 className='uppercase'>Up to 20% Discount on</h4>
                <h1>Girls Fashion</h1>
                <p>Step into style with our latest collections, curated just for you! Whether you're looking for trendy apparel, chic accessories, or must-have home decor, we have something to elevate your wardrobe and lifestyle.</p>
                <button className='btn'>
                    <Link to="/shop">EXPLORE NOW</Link>
                </button>
            </div>
            {/* Add an image below */}
            <div className='header__image'>
                <img src={bannerImg} alt="Fashion Banner" />
            </div>
        </div>
    );
}

export default Banner;



