import React, { useState } from 'react';
import productsData from "../data/products.json";
import ProductCard from '../pages/ProductCard';

const Search = () => {
    const [search, setSearch] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]);

    const handleSearch = () => {
        const query = search.toLowerCase();
        const filtered = productsData.filter(product => 
            product.name.toLowerCase().includes(query) ||
            product.description.toLowerCase().includes(query)
        );

        setFilteredProducts(filtered);
    };

    return (
        <>
            <section className='section__container bg-primary-light'>
                <h2 className="section__header capitalize">Search Products</h2>
                <p className='section__subheader'>
                    Browse a diverse range of categories, from chic dresses to versatile accessories. Elevate your style today.
                </p>
            </section>
            <div className='w-full mb-12 flex items-center justify-center gap-4'>
                <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className='search-bar w-full max-w-4xl p-2 border rounded'
                    placeholder='search for products...'
                />
                <button
                    onClick={handleSearch}
                    className='search-button py-2 px-4 bg-primary text-white rounded w-35'
                >
                    Search
                </button>
            </div>
            <div className='w-full'>
                <ProductCard products={filteredProducts} />
            </div>
        </>
    );
}

export default Search;





       
