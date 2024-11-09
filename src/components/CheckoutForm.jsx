 // src/components/CheckoutForm.js
import React, { useState } from 'react';
import './CheckoutForm.css'; // Add your styles here

const CheckoutForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: '',
        city: '',
        zip: '',
    });

    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        validateField(name, value);
    };

    const validateField = (name, value) => {
        let errorMsg = '';
        switch (name) {
            case 'name':
                errorMsg = value ? '' : 'Name is required';
                break;
            case 'email':
                errorMsg = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(value) ? '' : 'Invalid email';
                break;
            case 'address':
                errorMsg = value ? '' : 'Address is required';
                break;
            case 'city':
                errorMsg = value ? '' : 'City is required';
                break;
            case 'zip':
                errorMsg = /^\d{5}$/.test(value) ? '' : 'Invalid zip code';
                break;
            default:
                break;
        }
        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: errorMsg,
        }));
    };

    const handleCheckout = async () => {
        const hasErrors = Object.values(errors).some((error) => error);
        if (hasErrors) {
            alert('Please fix the errors in the form.');
            return;
        }

        setLoading(true);

        // Simulate form submission
        setTimeout(() => {
            setSubmitted(true);
            alert('Checkout successful! Your order has been placed.');
            setLoading(false);
        }, 1000); // Simulating a delay for submission
    };

    const isFormValid = Object.values(errors).every((error) => !error) && 
                        formData.name && formData.email && formData.address && 
                        formData.city && formData.zip;

    return (
        <div className="checkout-form">
            <h2>Checkout</h2>
            <form onSubmit={(e) => e.preventDefault()}>
                <div className={`form-group ${errors.name ? 'error' : ''}`}>
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    {errors.name && <span className="error-message">{errors.name}</span>}
                </div>
                <div className={`form-group ${errors.email ? 'error' : ''}`}>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    {errors.email && <span className="error-message">{errors.email}</span>}
                </div>
                <div className={`form-group ${errors.address ? 'error' : ''}`}>
                    <label>Address:</label>
                    <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                    />
                    {errors.address && <span className="error-message">{errors.address}</span>}
                </div>
                <div className={`form-group ${errors.city ? 'error' : ''}`}>
                    <label>City:</label>
                    <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                    />
                    {errors.city && <span className="error-message">{errors.city}</span>}
                </div>
                <div className={`form-group ${errors.zip ? 'error' : ''}`}>
                    <label>Zip Code:</label>
                    <input
                        type="text"
                        name="zip"
                        value={formData.zip}
                        onChange={handleChange}
                    />
                    {errors.zip && <span className="error-message">{errors.zip}</span>}
                </div>
                <button 
                    type="button" 
                    onClick={handleCheckout} 
                    disabled={loading || !isFormValid}
                    className={`checkout-button ${loading ? 'loading' : ''}`}
                >
                    {loading ? 'Processing...' : 'Checkout'}
                </button>
            </form>

            {submitted && (
                <div className="summary">
                    <h3>Order Summary</h3>
                    <p><strong>Name:</strong> {formData.name}</p>
                    <p><strong>Email:</strong> {formData.email}</p>
                    <p><strong>Address:</strong> {formData.address}</p>
                    <p><strong>City:</strong> {formData.city}</p>
                    <p><strong>Zip Code:</strong> {formData.zip}</p>
                </div>
            )}
        </div>
    );
};

export default CheckoutForm;
