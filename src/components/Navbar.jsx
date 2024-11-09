import React, { useState } from 'react';
import { Link, Navigate } from "react-router-dom"; // Import Navigate for redirection
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, clearCart } from '../redux/features/cartSlice';

const Navbar = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.cart.items) || [];
    const [isCartOpen, setIsCartOpen] = useState(false);
    
    // Assuming you have a 'user' state in your Redux store that indicates if the user is logged in
    // const isLoggedIn = useSelector((state) => state.user.isLoggedIn); // Adjust based on your actual state

    // if (!isLoggedIn) {
    //     return <Navigate to="/login" replace />; // Redirect to login if not logged in
    // }

    const toggleCart = () => {
        setIsCartOpen(!isCartOpen);
    };

    const totalQuantity = products.reduce((total, product) => total + product.quantity, 0);
    const totalPrice = products.reduce((total, product) => total + (product.price * product.quantity), 0).toFixed(2);

    const handleRemoveItem = (id) => {
        dispatch(removeItem({ id }));
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
                    {/* <span>
                        <Link to="/login">
                            <i className="ri-user-line"></i>
                        </Link>
                    </span> */}
                </div>
            </nav>
            {isCartOpen && (
                <div className="cart-dropdown" style={{
                    position: 'absolute',
                    right: '10px',
                    backgroundColor: '#fff',
                    padding: '15px',
                    borderRadius: '8px',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                    width: '300px',
                    zIndex: 1000
                }}>
                    <h2 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px' }}>Your Cart</h2>
                    {products.length === 0 ? (
                        <p style={{ color: '#6c757d' }}>Your cart is empty.</p>
                    ) : (
                        <div>
                            {products.map((product) => (
                                <div key={product.id} style={{
                                    marginBottom: '10px',
                                    padding: '10px 0',
                                    display: 'flex',
                                    alignItems: 'center',
                                    borderBottom: '1px solid #e9ecef'
                                }}>
                                    <img src={product.image} alt={product.name} style={{
                                        width: '50px',
                                        height: '50px',
                                        marginRight: '10px',
                                        borderRadius: '5px'
                                    }} />
                                    <span style={{ flex: 1, fontWeight: '500' }}>{product.name}</span>
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <button style={{
                                            backgroundColor: 'green',
                                            color: 'white',
                                            border: 'none',
                                            borderRadius: '3px',
                                            padding: '5px',
                                            cursor: 'pointer',
                                            marginRight: '5px'
                                        }} onClick={() => dispatch({ type: 'cart/updateItemQuantity', payload: { id: product.id, quantity: product.quantity + 1 } })}>
                                            +
                                        </button>
                                        <span>{product.quantity}</span>
                                        <button style={{
                                            backgroundColor: 'red',
                                            color: 'white',
                                            border: 'none',
                                            borderRadius: '3px',
                                            padding: '5px',
                                            cursor: 'pointer',
                                            marginLeft: '5px'
                                        }} onClick={() => dispatch({ type: 'cart/updateItemQuantity', payload: { id: product.id, quantity: product.quantity - 1 } })}>
                                            -
                                        </button>
                                        <button onClick={() => handleRemoveItem(product.id)} style={{
                                            marginLeft: '10px',
                                            backgroundColor: 'red',
                                            color: 'white',
                                            border: 'none',
                                            borderRadius: '3px',
                                            padding: '5px',
                                            cursor: 'pointer'
                                        }}>
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            ))}
                            <div style={{ fontWeight: 'bold', marginTop: '10px' }}>
                                Total: <span style={{ color: '#28a745' }}>${totalPrice}</span>
                            </div>
                            <button onClick={handleClearCart} style={{
                                backgroundColor: 'red',
                                color: '#fff',
                                padding: '10px',
                                borderRadius: '5px',
                                width: '100%',
                                marginTop: '10px',
                                border: 'none',
                                cursor: 'pointer'
                            }}>
                                Clear Cart
                            </button>
                            <Link to="/checkout">
                                <button style={{
                                    backgroundColor: '#007bff',
                                    color: '#fff',
                                    padding: '10px',
                                    borderRadius: '5px',
                                    width: '100%',
                                    marginTop: '10px',
                                    border: 'none',
                                    cursor: 'pointer',
                                    transition: 'background-color 0.3s'
                                }} onMouseEnter={(e) => e.target.style.backgroundColor = '#0056b3'}
                                    onMouseLeave={(e) => e.target.style.backgroundColor = '#007bff'}>
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









