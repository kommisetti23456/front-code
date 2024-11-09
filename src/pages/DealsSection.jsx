import React from 'react';
import dealsImg from "../assets/deals.png";

const DealsSection = () => {
    return (
        <section className='section__container deals__container'>
            <div className='deals__image'>
                <img src={dealsImg} alt="" />
            </div>
            <div className='deals__content'>
                <h5>Get Upto 30% discount</h5>
                <h4>Deals Of The Month</h4>
                <p>
                    Our women's Fashion Deals of the month are here to make your style dreams a reality without breaking the bank. Discover a curated collection of exquisite clothing, accessories, and footwear, all handpicked to elevate your wardrobe.
                </p>
            
            <div className='deals__countdown flex-wrap'>
                <div className='deals__countdown__card'>
                    <h4>14</h4>
                    <p>Days</p>
                </div>
                <div className='deals__countdown__card'>
                    <h4>20</h4>
                    <p>Hours</p>
                </div>
                <div className='deals__countdown__card'>
                    <h4>15</h4>
                    <p>Minutes</p>
                </div>
                <div className='deals__countdown__card'>
                    <h4>05</h4>
                    <p>Seconds</p>
                </div>
            </div>
            </div>
        </section>
    );
}

export default DealsSection;