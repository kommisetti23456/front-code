import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import products from "../data/products.json";
import ProductCard from '../pages/ProductCard'; // Ensure the import path is correct

const CategoryPage = () => {
    const { categoryName } = useParams(); // Get the category name from the URL
    const [filterProducts, setFilterProducts] = useState([]);

    useEffect(() => {
        if (categoryName) { // Check if categoryName is defined
            const filtered = products.filter((product) => product.category === categoryName.toLowerCase());
            setFilterProducts(filtered);
        } else {
            setFilterProducts([]); // Handle the case when categoryName is undefined
        }
    }, [categoryName]);

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top when the page loads
    }, []); // Add empty dependency array to run only on mount

    return (
        <>
            <section className='section__container bg-primary-light'>
                <h2 className='section__header capitalize'>{categoryName || "Category"}</h2> {/* Fallback text */}
                <p className='section__subheader'>
                    Browse a diverse range of categories, from chic dresses to versatile accessories. Elevate your style today.
                </p>
            </section>
            <div className='section__container'>
                <ProductCard products={filterProducts} />
            </div>
        </>
    );
};

export default CategoryPage;