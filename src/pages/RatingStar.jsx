import React from 'react';

const RatingStar = ({ rating = 0 }) => {
    // Create an array of stars based on the rating
    const stars = Array.from({ length: 5 }, (_, index) => (
        <span key={index} className={`ri-star${index < rating ? '-fill' : '-line'}`}></span>
    ));

    return (
        <div className="product__rating">
            {stars}
        </div>
    );
}

export default RatingStar;
