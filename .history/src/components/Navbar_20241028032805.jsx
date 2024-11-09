import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, clearCart } from '../redux/features/cartSlice';

const Navbar = () => {
    const cartItems = useSelector((state) => state.cart.items) || [];
    const totalQuantity = useSelector((state) => state.cart.totalQuantity);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const dispatch = useDispatch();

    const toggleCart = () => {
        setIsCartOpen(!isCartOpen);
    };

    const handleRemoveItem = (id) => {
        dispatch(removeItem({ id }));
    };

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <header style={{ position: 'relative', zIndex: 10 }}>
            <nav className="flex justify-between items-center bg-white shadow-md p-4">
                <ul className='flex space-x-4'>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/shop">Shop</Link></li>
                    <li><Link to="/">Pages</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
                <div className='flex items-center'>
                    <button onClick={toggleCart} style={{ position: 'relative' }}>
                        <i className="ri-shopping-bag-line"></i>
                        <sup style={{ position: 'absolute', top: '-5px', right: '-10px', backgroundColor: 'red', color: 'white', borderRadius: '50%', padding: '2px 5px' }}>
                            {totalQuantity}
                        </sup>
                    </button>
                    <Link to="/login" className="ml-4"><i className="ri-user-line"></i></Link>
                </div>
            </nav>

            {isCartOpen && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    right: 0,
                    width: '300px',
                    height: '100%',
                    backgroundColor: 'white',
                    boxShadow: '-2px 0 5px rgba(0, 0, 0, 0.5)',
                    padding: '20px',
                    overflowY: 'auto',
                    transition: 'transform 0.3s ease',
                }}>
                    <h2>Your Cart</h2>
                    {cartItems.length === 0 ? (
                        <p>Your cart is empty.</p>
                    ) : (
                        <div>
                            {cartItems.map((item) => (
                                <div key={item.id} className="flex justify-between items-center mb-4">
                                    <img src={item.image} alt={item.name} style={{ width: '50px', height: '50px', objectFit: 'cover' }} />
                                    <div style={{ flexGrow: 1, marginLeft: '10px' }}>
                                        <p>{item.name}</p>
                                        <p>Price: ${item.price.toFixed(2)}</p>
                                        <p>Quantity: {item.quantity}</p>
                                    </div>
                                    <button onClick={() => handleRemoveItem(item.id)} className="text-red-500">Remove</button>
                                </div>
                            ))}
                            <div style={{ marginTop: '20px', borderTop: '1px solid #ccc', paddingTop: '10px' }}>
                                <p>Total Price: ${totalPrice.toFixed(2)}</p>
                                <button onClick={handleClearCart} style={{ backgroundColor: 'red', color: 'white', borderRadius: '5px', padding: '5px 10px' }}>Clear Cart</button>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </header>
    );
};

export default Navbar;














