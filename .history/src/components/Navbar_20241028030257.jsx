import React from 'react';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

const Navbar = () => {
    const totalQuantity = useSelector((state) => state.cart.totalQuantity); // Access total quantity

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
                    <Link to="/">Ecommerce <span>.</span></Link>
                </div>
                <div className='nav__icons relative'>
                    <span>
                        <Link to="/search">
                            <i className="ri-search-line"></i>
                        </Link>
                    </span>
                    <span>
                        <Link to="/cart"> {/* Link to cart page */}
                            <button className='hover:text-primary'>
                                <i className="ri-shopping-bag-line"></i>
                                {totalQuantity > 0 && ( // Display quantity if greater than 0
                                    <sup className='text-sm inline-block px-1.5 text-white rounded-full bg-primary text-center'>
                                        {totalQuantity}
                                    </sup>
                                )}
                            </button>
                        </Link>
                    </span>
                    <span>
                        <Link to="/login">
                            <i className="ri-user-line"></i>
                        </Link>
                    </span>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;














