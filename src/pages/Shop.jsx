import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link
import productsData from "../data/products.json"; // Ensure this data is correct
import ProductCard from '../pages/ProductCard'; // Ensure you import the ProductCard component
import ShopFiltering from "../pages/ShopFiltering";

const filter = {
  categories: ["all", "accessories", "dress", "jewellery", "cosmetics"],
  colors: ["all", "black", "red", "gold", "silver", "green"],
  priceRanges: [
    { label: 'Under $50', min: 0, max: 50 },
    { label: '$50 - $100', min: 50, max: 100 },
    { label: '$100 - $150', min: 100, max: 150 },
    { label: 'Above $150', min: 150, max: Infinity },
  ],
};

const Shop = () => {
  const [products, setProducts] = useState(productsData);
  const [filtersState, setFiltersState] = useState({
    category: "all",
    color: "all",
    priceRange: ""
  });

  useEffect(() => {
    applyFilters();
  }, [filtersState]);

  const applyFilters = () => {
    let filteredProducts = productsData;

    if (filtersState.category && filtersState.category !== "all") {
      filteredProducts = filteredProducts.filter(product => 
        product.category.toLowerCase() === filtersState.category.toLowerCase()
      );
    }

    if (filtersState.color && filtersState.color !== "all") {
      filteredProducts = filteredProducts.filter(product => 
        product.color.toLowerCase() === filtersState.color.toLowerCase()
      );
    }

    if (filtersState.priceRange) {
      const selectedRange = filter.priceRanges[parseInt(filtersState.priceRange)];
      if (selectedRange) {
        filteredProducts = filteredProducts.filter(product => 
          product.price >= selectedRange.min && product.price <= selectedRange.max
        );
      }
    }

    setProducts(filteredProducts);
  };

  const clearFilters = () => {
    setFiltersState({
      category: "all",
      color: "all",
      priceRange: ""
    });
  };

  return (
    <>
      <section className='section__container bg-primary-light'>
        <h2 className='section__header capitalize'>Shop Page</h2>
        <p className='section__subheader'>
          Browse a diverse range of categories, from chic dresses to versatile accessories. Elevate your style today.
        </p>
      </section>
      <section className='section__container'>
        <div className='flex flex-col md:flex-row md:gap-12 gap-8'>
          {/* Filter section */}
          <div className='w-full md:w-1/4 lg:w-1/3 p-4 bg-white shadow-md rounded'>
            <ShopFiltering filters={filter} filtersState={filtersState} setFiltersState={setFiltersState} clearFilters={clearFilters} />
          </div>
          {/* Products section */}
          <div className='w-full md:w-3/4 lg:w-2/3 p-4'>
            <h3 className='text-xl font-medium mb-4'>Products Available: {products.length}</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
              {products.map(product => (
                <Link to={`/shop/${product.id}`} key={product.id} className='border rounded-lg p-2 shadow-md'>
                  <img
                    src={product.image}
                    alt={product.name}
                    className='w-full h-40 object-cover mb-2'
                  />
                  <h4 className='text-md font-semibold'>{product.name}</h4>
                  <p className='text-sm'>{product.description}</p>
                  <p className='text-md font-bold'>${product.price}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Shop;










