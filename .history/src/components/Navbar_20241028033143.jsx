import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../redux/features/cartSlice';

const Navbar = () => {
    const products = useSelector((state) => state.cart.items) || [];
    const totalQuantity = products.reduce((total, product) => total + product.quantity, 0);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const dispatch = useDispatch();

    const toggleCart = () => {
        setIsCartOpen(!isCartOpen);
    };

    const handleClearCart = () => {
        dispatch(clearCart());
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
                <div className="cart-dropdown" style={{
                    position: 'absolute', top: '50px', right: '0', 
                    backgroundColor: '#f8f9fa', color: '#343a40', 
                    padding: '15px', border: '1px solid #ccc', 
                    borderRadius: '5px', zIndex: 1000, width: '300px'
                }}>
                    <h2>Your Cart</h2>
                    {products.length === 0 ? (
                        <p>Your cart is empty.</p>
                    ) : (
                        products.map((product) => (
                            <div key={product.id} style={{ borderBottom: '1px solid #ccc', padding: '10px 0' }}>
                                <p>{product.name} - {product.quantity}</p>
                            </div>
                        ))
                    )}
                    <div style={{ marginTop: '10px', fontWeight: 'bold' }}>
                        Total: ${products.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}
                    </div>
                    <button 
                        onClick={handleClearCart} 
                        style={{ 
                            backgroundColor: 'red', color: 'white', 
                            border: 'none', padding: '10px', 
                            borderRadius: '5px', cursor: 'pointer', 
                            width: '100%', marginTop: '10px' 
                        }}
                    >
                        Clear Cart
                    </button>
                    <button 
                        style={{ 
                            backgroundColor: '#28a745', color: 'white', 
                            border: 'none', padding: '10px', 
                            borderRadius: '5px', cursor: 'pointer', 
                            width: '100%', marginTop: '10px' 
                        }}
                    >
                        Checkout
                    </button>
                </div>
            )}
        </header>
    );
};

export default Navbar;















