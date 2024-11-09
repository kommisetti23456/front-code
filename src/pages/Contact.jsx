// src/pages/Contact.js
import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [submitted, setSubmitted] = useState(false);
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
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
            case 'message':
                errorMsg = value ? '' : 'Message is required';
                break;
            default:
                break;
        }
        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: errorMsg,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const hasErrors = Object.values(errors).some((error) => error);
        if (!hasErrors) {
            // Simulate form submission
            setSubmitted(true);
            console.log('Form Data:', formData);
            alert('Message sent successfully!');
        } else {
            alert('Please fix the errors in the form.');
        }
    };

    return (
        <div className="contact-page">
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit}>
                <div className={`form-group ${errors.name ? 'error' : ''}`}>
                    <label>Name:</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} />
                    {errors.name && <span className="error-message">{errors.name}</span>}
                </div>
                <div className={`form-group ${errors.email ? 'error' : ''}`}>
                    <label>Email:</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} />
                    {errors.email && <span className="error-message">{errors.email}</span>}
                </div>
                <div className={`form-group ${errors.message ? 'error' : ''}`}>
                    <label>Message:</label>
                    <textarea name="message" value={formData.message} onChange={handleChange} />
                    {errors.message && <span className="error-message">{errors.message}</span>}
                </div>
                <button type="submit">Send Message</button>
            </form>

            {submitted && <p>Thank you for your message!</p>}
        </div>
    );
};

export default Contact;
