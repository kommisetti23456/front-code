import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/features/cartSlice';
import RatingStar from '../pages/RatingStar';

const ProductCard = ({ products = [] }) => {
    const dispatch = useDispatch();
    const cartProducts = useSelector((state) => state.cart.items); // Get cart items
    const [message, setMessage] = useState('');

    const handleAddToCart = (product) => {
        const existingProduct = cartProducts.find(item => item.id === product.id);
        if (existingProduct) {
            setMessage('Item already added to cart!');
        } else {
            dispatch(addToCart({ ...product, quantity: 1 })); // Dispatch action with quantity
            setMessage('Item added to cart!');
        }
        setTimeout(() => setMessage(''), 2000);
    };

    if (!Array.isArray(products) || products.length === 0) {
        return <p>No products available.</p>;
    }

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
            {products.map(product => (
                <div key={product.id} className='relative product___card'>
                    <div className='p-4'>
                        <img src={product.image} alt={product.name} className='max-h-96 w-full object-cover hover:scale-105 transition-all duration-300' />
                        <div className='hover:block absolute top-3 right-3'>
                            <button 
                                style={{
                                    position: 'relative',
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    backgroundColor: 'white',
                                    border: '2px solid red',
                                    borderRadius: '50%',
                                    padding: '8px',
                                    transition: 'background-color 0.3s, transform 0.3s',
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor = '#ffcccc'; // Change on hover
                                    e.currentTarget.style.transform = 'scale(1.1)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor = 'white'; // Reset on leave
                                    e.currentTarget.style.transform = 'scale(1)';
                                }}
                                onClick={() => handleAddToCart(product)}
                            >
                                <i className="ri-shopping-cart-fill" style={{ fontSize: '24px', color: 'red' }}></i>
                            </button>
                        </div>
                    </div>
                    <div className='product__card__content text-center'>
                        <h1 className='text-lg font-semibold'>{product.name}</h1>
                        <p className='text-xl font-bold text-red-500'>${product.price.toFixed(2)}</p>
                        <RatingStar rating={product.rating} />
                    </div>
                </div>
            ))}
            {message && <div className='absolute top-0 right-0 bg-red-500 text-white p-2 rounded'>{message}</div>}
        </div>
    );
};

export default ProductCard;
