import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

const Navbar = () => {
    const products = useSelector((state) => state.cart.items) || [];
    const [isCartOpen, setIsCartOpen] = useState(false);

    const toggleCart = () => {
        setIsCartOpen(!isCartOpen);
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
                                    <span style={{ marginLeft: '10px' }}>{product.quantity}</span>
                                </div>
                            ))}
                            <div style={{ fontWeight: 'bold', marginTop: '10px' }}>
                                Total: <span style={{ color: '#28a745' }}>${totalPrice}</span>
                            </div>
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









