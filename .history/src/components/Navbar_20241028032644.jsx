import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, clearCart } from '../redux/features/cartSlice';

const Navbar = () => {
    const cartItems = useSelector((state) => state.cart.items) || []; // Get cart items
    const totalQuantity = useSelector((state) => state.cart.totalQuantity); // Get total quantity
    const [isCartOpen, setIsCartOpen] = useState(false); // State to manage cart open/close
    const dispatch = useDispatch(); // Dispatch for actions

    const toggleCart = () => {
        setIsCartOpen(!isCartOpen); // Toggle cart open/close
    };

    const handleRemoveItem = (id) => {
        dispatch(removeItem({ id })); // Remove item from cart
    };

    const handleClearCart = () => {
        dispatch(clearCart()); // Clear the entire cart
    };

    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0); // Calculate total price

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
                                {totalQuantity} {/* Display number of products in cart */}
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
                    <h2>Your Cart</h2>
                    {cartItems.length === 0 ? (
                        <p>Your cart is empty.</p>
                    ) : (
                        <div>
                            {cartItems.map((item) => (
                                <div key={item.id} className="cart-item flex justify-between items-center">
                                    <img src={item.image} alt={item.name} className="w-16 h-16 object-cover" />
                                    <div className="flex-1 mx-4">
                                        <p>{item.name}</p>
                                        <p>Price: ${item.price.toFixed(2)}</p>
                                        <p>Quantity: {item.quantity}</p>
                                    </div>
                                    <button onClick={() => handleRemoveItem(item.id)} className="text-red-500">Remove</button>
                                </div>
                            ))}
                            <div className="cart-total">
                                <p>Total Price: ${totalPrice.toFixed(2)}</p>
                                <button onClick={handleClearCart} className="bg-red-500 text-white rounded px-2 py-1">Clear Cart</button>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </header>
    );
};

export default Navbar;















