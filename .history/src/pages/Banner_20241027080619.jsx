 import React from 'react'
 
 const Banner = () => {
   return (
    <div className='section__container header__container'>
    <div>
      <h4>Up To 20% Discount on</h4>
      <h1>Girls Fashion</h1>
      <p>
        Fashion is also a powerful means of communication, allowing individuals to convey their identities and beliefs. Whether through bold statements or subtle nuances, what we wear can challenge norms and inspire change.
      </p>
      <button className='btn'>
        <Link to="/shop">Explore More</Link>
      </button>
    </div>
    <div>
      <img src={img} alt="Fashion header" />
    </div>
  </div>
);
};
   
 export default Banner



