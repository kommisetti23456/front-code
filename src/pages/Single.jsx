import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import RatingStar from "../pages/RatingStar";
import productsData from "../data/products.json"; // Import the product data

const Single = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({ name: '', rating: 0, text: '', image: null });
  const [productImage, setProductImage] = useState(null);
  const [error, setError] = useState('');

  const product = productsData.find(p => p.id.toString() === id);

  // Load reviews for this product from localStorage
  useEffect(() => {
    const storedReviews = JSON.parse(localStorage.getItem('reviews')) || [];
    const productReviews = storedReviews.filter(review => review.productId === id);
    setReviews(productReviews);
  }, [id]);

  // Save reviews to localStorage whenever they change
  useEffect(() => {
    const storedReviews = JSON.parse(localStorage.getItem('reviews')) || [];
    localStorage.setItem('reviews', JSON.stringify([...storedReviews, ...reviews]));
  }, [reviews]);

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (newReview.name && newReview.rating && newReview.text) {
      const reviewWithProductId = { ...newReview, productImage, productId: id };
      setReviews([...reviews, reviewWithProductId]);
      setNewReview({ name: '', rating: 0, text: '', image: null });
      setProductImage(null);
      setError('');
    } else {
      setError('Name, rating, and review text are required.');
    }
  };

  const handleImageChange = (e) => {
    if (e.target.files.length > 0) {
      setNewReview({ ...newReview, image: URL.createObjectURL(e.target.files[0]) });
    }
  };

  const handleProductImageChange = (e) => {
    if (e.target.files.length > 0) {
      setProductImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleDeleteReview = (index) => {
    const updatedReviews = reviews.filter((_, i) => i !== index);
    setReviews(updatedReviews);
  };

  if (!product) return <p className='text-red-500 font-bold'>Product not found!</p>;

  return (
    <>
      <section className='bg-white shadow-md rounded-md p-6 mb-6'>
        <h2 className='text-3xl font-bold mb-4'>{product.name}</h2>
        <div className='flex space-x-4 mb-4'>
          <Link to="/" className='text-blue-600 hover:underline'>Home</Link>
          <span className='text-gray-500'> &gt; </span>
          <Link to="/shop" className='text-blue-600 hover:underline'>Shop</Link>
          <span className='text-gray-500'> &gt; </span>
          <span className='text-gray-700'>Product ID: {id}</span>
        </div>
      </section>
      <section className='mt-8 p-6 border border-gray-300 rounded-md shadow-sm'>
        <div className='flex flex-col md:flex-row items-start gap-8'>
          <div className='md:w-1/2 w-full flex justify-center'>
            <img 
              src={product.image.trim()} 
              alt={product.name}
              onError={(e) => { e.target.src = '/images/default.jpg'; }} 
              className='rounded-lg shadow-lg max-w-full h-auto object-contain' 
              style={{ maxHeight: '400px', width: 'auto' }}
            />
          </div>
          <div className='md:w-1/2 w-full'>
            <h3 className='text-2xl font-semibold mb-2'>{product.name}</h3>
            <p className='text-xl text-blue-600 mb-2'>
              ${product.price} <span className='text-gray-400 line-through'>${product.oldPrice}</span>
            </p>
            <p className='text-gray-700 mb-4'>{product.description}</p>
            <div className='flex mb-4 text-gray-700'>
              <p className='mr-4'><strong>Category:</strong> {product.category}</p>
              <p className='mr-4'><strong>Color:</strong> {product.color}</p>
              <div>
                <strong>Rating:</strong>
                <RatingStar rating={product.rating.toString()} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='mt-8 p-6 border border-gray-300 rounded-md shadow-sm'>
        <h3 className='text-xl font-semibold mb-4'>Customer Reviews</h3>
        <div className='mb-4'>
          {reviews.length > 0 ? (
            reviews.map((review, index) => (
              <div key={index} className='border p-4 mb-2 rounded-md shadow-sm bg-gray-50'>
                <div className="flex items-center mb-2">
                  {review.image && <img src={review.image} alt="Review" className="w-12 h-12 rounded-full object-cover mr-2" />}
                  <p className='font-semibold'>{review.name}</p>
                </div>
                <RatingStar rating={review.rating.toString()} />
                <p className='text-gray-600'>{review.text}</p>
                {review.productImage && (
                  <img src={review.productImage} alt="Product" className="mt-2 w-24 h-24 object-cover rounded" />
                )}
                {review.name === newReview.name && ( // Show delete button only for the author
                  <button 
                    onClick={() => handleDeleteReview(index)} 
                    className='mt-2 text-red-500 hover:underline'
                  >
                    Delete Review
                  </button>
                )}
              </div>
            ))
          ) : (
            <p className='text-gray-400'>No reviews yet.</p>
          )}
        </div>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleReviewSubmit} className='flex flex-col'>
          <label className='mb-2'>
            <strong>Name:</strong>
            <input
              type="text"
              value={newReview.name}
              onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
              className='border border-gray-300 rounded p-2'
              placeholder='Enter your name'
              required
            />
          </label>
          <label className='mb-2'>
            <strong>Rating:</strong>
            <select 
              value={newReview.rating} 
              onChange={(e) => setNewReview({ ...newReview, rating: parseInt(e.target.value) })}
              className='ml-2 border border-gray-300 rounded p-1'
            >
              <option value="0">Select a rating</option>
              <option value="1">1 Star</option>
              <option value="2">2 Stars</option>
              <option value="3">3 Stars</option>
              <option value="4">4 Stars</option>
              <option value="5">5 Stars</option>
            </select>
          </label>
          <label className='mb-2'>
            <strong>Review:</strong>
            <textarea 
              value={newReview.text} 
              onChange={(e) => setNewReview({ ...newReview, text: e.target.value })}
              className='border border-gray-300 p-2 rounded resize-none'
              rows="4"
              placeholder='Write your review here...'
              required
            />
          </label>
          <label className='mb-2'>
            <strong>Upload Review Image:</strong>
            <input 
              type="file" 
              accept="image/*" 
              onChange={handleImageChange}
              className='mt-1 border border-gray-300 rounded p-1'
            />
          </label>
          <label className='mb-2'>
            <strong>Upload Product Image:</strong>
            <input 
              type="file" 
              accept="image/*" 
              onChange={handleProductImageChange}
              className='mt-1 border border-gray-300 rounded p-1'
            />
          </label>
          <button 
            type='submit' 
            className='bg-blue-600 text-white py-1 px-2 rounded-md hover:bg-blue-700 transition w-32'
          >
            Submit Review
          </button>
        </form>
      </section>
    </>
  );
};

export default Single;













