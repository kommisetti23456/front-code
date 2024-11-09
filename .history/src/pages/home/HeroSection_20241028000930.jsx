 // src/components/HeroSection.jsx
import React from 'react';
import card1 from '../../assets/card-1.png'; // Import your images
import card2 from "../../assets/card-2.png";
import card3 from "../../assets/card-3.png";

const HeroSection = () => {
    const cards = [
        {
            id: 1,
            image: card1,
            trend: '2024 Trend',
            title: "Women's Shirt"
        },
        {
            id: 2,
            image: card2,
            trend: "2024 Trend",
            title: "Women's Dresses"
        },
        {
            id: 3,
            image: card3,
            trend: "2024 Trend",
            title: "Women's Casuals"
        }
    ];

    return (
        <section className='section__container hero__container'>
            {cards.map(card => ( // Use parentheses for return
                <div key={card.id} className='hero__card'>
                    <img src={card.image} alt={card.title} />
                    <div className='hero__content'>
                        <p>{card.trend}</p>
                        <h4>{card.title}</h4>
                        <a href="#">Discover More</a>
                    </div>
                </div>
            ))}
        </section>
    );
}

export default HeroSection; // Default export





