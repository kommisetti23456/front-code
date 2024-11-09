// src/components/ProductCard.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from './redux/features/cart/cartSlice';
import RatingStar from '../pages/RatingStar';

const ProductCard = ({ products = [] }) => {
    const dispatch = useDispatch();
    const cartProducts = useSelector((state) => state.cart.products); // Get cart products from the store
    const [message, setMessage] = useState('');

    const handleAddToCart = (product) => {
        const existingProduct = cartProducts.find(item => item.id === product.id);
        if (existingProduct) {
            setMessage('Item already added to cart!'); // Set message if item exists
        } else {
            dispatch(addToCart(product)); // Dispatch addToCart action
            setMessage('Item added to cart!'); // Set message if item is added
        }
        // Clear message after 2 seconds
        setTimeout(() => {
            setMessage('');
        }, 2000);
    };

    if (!Array.isArray(products) || products.length === 0) {
        return <p>No products available.</p>;
    }

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
            {products.map(product => (
                <div key={product.id} className='relative product___card'>
                    <div className='p-4'>
                        <img 
                            src={product.image} 
                            alt={product.name} 
                            className='max-h-96 w-full object-cover hover:scale-105 transition-all duration-300' 
                        />
                        <div className='hover:block absolute top-3 right-3'>
                            <button 
                                className='hover:text-red-500 transition-colors duration-300'
                                onClick={() => handleAddToCart(product)}
                            >
                                <i className="ri-shopping-cart-fill"></i>
                            </button>
                        </div>
                    </div>
                    <div className='product__card__content text-center'>
                        <h1 className='text-lg font-semibold'>{product.name}</h1>
                        <p className='text-xl font-bold'>${product.price.toFixed(2)}</p>
                        <RatingStar rating={product.rating} />
                    </div>
                </div>
            ))}
            {message && (
                <div className='absolute top-0 right-0 bg-red-500 text-white p-2 rounded'>
                    {message}
                </div>
            )}
        </div>
    );
};

export default ProductCard;










