 // src/pages/TrendingProducts.jsx
import React, { useState } from 'react';
import products from "../data/products.json";
import ProductCard from '../pages/ProductCard';

const TrendingProducts = () => {
  const [visibleProducts, setVisibleProducts] = useState(3); // Set initial count to 3
  const loadMoreProducts = () => {
    setVisibleProducts(prevCount => prevCount + 4);
  };

  return (
    <section className='section__container product__container'>
      <h2 className='section__header'>Trending Products</h2>
      <p className='section__subheader mb-12'>Discover the picks: Elevate Your Styles with our Curated Collections of Trending Women's Fashion Products.</p>
      <div className='mt-12'>
        <ProductCard products={products.slice(0, visibleProducts)} />
      </div>
      <div className='product__btn'>
        {visibleProducts < products.length && (
          <button className='btn' onClick={loadMoreProducts}>Load More</button>
        )}
      </div>
    </section>
  );
}

export default TrendingProducts;

