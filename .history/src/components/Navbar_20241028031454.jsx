import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

const Navbar = () => {
    const products = useSelector((state) => state.cart.products) || []; // Default to an empty array if products is undefined
    const [isCartOpen, setIsCartOpen] = useState(false); // State to manage cart open/close

    const toggleCart = () => {
        setIsCartOpen(!isCartOpen); // Toggle cart open/close
    };

    return (
        <header className='fixed-nav-bar w-nav'>
            <nav className="max-w-screen-2xl mx-auto px-4 flex justify-between items-center"> 
                <ul className='nav__links'>
                    <li className='link'><Link to="/">home</Link></li>
                    <li className='link'><Link to="/shop">shop</Link></li>
                    <li className='link'><Link to="/">pages</Link></li>
                    <li className='link'><Link to="/contact">contact</Link></li>
                </ul>
                <div className='nav__logo'>
                    {/* Optional logo can be added here */}
                </div>
                <Link to="/">Ecommerce <span>.</span></Link>
                <div className='nav__icons relative'>
                    <span>
                        <Link to="/search">
                            <i className="ri-search-line"></i>
                        </Link>
                    </span>
                    <span>
                        <button className='hover:text-primary' onClick={toggleCart}>
                            <i className="ri-shopping-bag-line"></i>
                            <sup className='text-sm inline-block px-1.5 text-white rounded-full bg-primary text-center'>
                                {products.length} {/* Display number of products in cart */}
                            </sup>
                        </button>
                    </span>
                    <span>
                        <Link to="/login">
                            <i className="ri-user-line"></i>
                        </Link>
                    </span>
                </div>
            </nav>
            {isCartOpen && (
                <div className="cart-dropdown">
                    {/* Render your cart items or cart content here */}
                </div>
            )}
        </header>
    );
};

export default Navbar;















