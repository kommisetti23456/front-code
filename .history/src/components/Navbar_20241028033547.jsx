import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

const Navbar = () => {
    const products = useSelector((state) => state.cart.items) || []; // Default to an empty array if products is undefined
    const [isCartOpen, setIsCartOpen] = useState(false); // State to manage cart open/close

    const toggleCart = () => {
        setIsCartOpen(!isCartOpen); // Toggle cart open/close
    };

    const totalQuantity = products.reduce((total, product) => total + product.quantity, 0);
    const totalPrice = products.reduce((total, product) => total + (product.price * product.quantity), 0).toFixed(2);

    return (
        <header className='fixed-nav-bar w-nav'>
            <nav className="max-w-screen-2xl mx-auto px-4 flex justify-between items-center"> 
                <ul className='nav__links'>
                    <li className='link'><Link to="/">home</Link></li>
                    <li className='link'><Link to="/shop">shop</Link></li>
                    <li className='link'><Link to="/">pages</Link></li>
                    <li className='link'><Link to="/contact">contact</Link></li>
                </ul>
                <div className='nav__logo'></div>
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
                                {totalQuantity}
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
                <div className="cart-dropdown" style={{ position: 'absolute', right: '10px', backgroundColor: '#f8f9fa', padding: '10px', borderRadius: '5px', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)' }}>
                    <h2>Your Cart</h2>
                    {products.length === 0 ? (
                        <p>Your cart is empty.</p>
                    ) : (
                        <div>
                            {products.map((product) => (
                                <div key={product.id} className="cart-item" style={{ marginBottom: '10px', borderBottom: '1px solid #ccc', padding: '10px 0' }}>
                                    <span>{product.name} - {product.quantity}</span>
                                </div>
                            ))}
                            <div style={{ fontWeight: 'bold', marginTop: '10px' }}>
                                Total: ${totalPrice}
                            </div>
                            <Link to="/checkout">
                                <button className='bg-primary text-white p-2 rounded hover:bg-secondary transition duration-300' style={{ marginTop: '10px' }}>
                                    Checkout
                                </button>
                            </Link>
                        </div>
                    )}
                </div>
            )}
        </header>
    );
};

export default Navbar;








