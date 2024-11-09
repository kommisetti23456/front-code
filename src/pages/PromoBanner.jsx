import React from 'react'

const PromoBanner = () => {
    return (
        <section className='section__container banner__container'>
            <div className='banner__card'>
                <span>
                    <i className="ri-truck-line"></i>
                    <h4>Free Delivery</h4>
                    <p>Offers convenience and the ability to shop from anywhere ,anytime</p>
                </span>
            </div>

            <div className='banner__card'>
                <span>
                    <i className="ri-money-dollar-circle-line"></i>
                    <h4>100%Money Back</h4>
                    <p>Offers convenience and the ability to shop from anywhere ,anytime</p>
                </span>
            </div>
            <div className='banner__card'>
                <span>
                    <i className="ri-user-voice-fill"></i>
                    <h4>Customer Support</h4>
                    <p>Offers convenience and the ability to shop from anywhere ,anytime</p>
                </span>
            </div>
        </section>
    )
}

export default PromoBanner