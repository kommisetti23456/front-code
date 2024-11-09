import React from 'react';

const ShopFiltering = ({ filters = { categories: [], colors: [], priceRanges: [] }, filtersState, setFiltersState, clearFilters }) => {
  return (
    <div className='space-y-5 flex-shrink-0'>
      <h3>Filters</h3>
      <div className='flex flex-col space-y-2'>
        <h4 className='font-medium text-lg'>Category</h4>
        <hr />
        {
          filters.categories.map((category) => (
            <label key={category} className='capitalize cursor-pointer'>
              <input 
                type="radio" 
                name="category" 
                id={`category-${category}`} 
                value={category} 
                checked={filtersState.category === category} 
                onChange={(e) => setFiltersState({ ...filtersState, category: e.target.value })} 
              />
              <span className='ml-1'>
                {category}
              </span>
            </label>
          ))
        }
      </div>

      <div className='flex flex-col space-y-2'>
        <h4 className='font-medium text-lg'>Colors</h4>
        <hr />
        {
          filters.colors.map((color) => (
            <label key={color} className='capitalize cursor-pointer'>
              <input 
                type="radio" 
                name="color" 
                id={`color-${color}`} 
                value={color} 
                checked={filtersState.color === color} 
                onChange={(e) => setFiltersState({ ...filtersState, color: e.target.value })} 
              />
              <span className='ml-1'>
                {color}
              </span>
            </label>
          ))
        }
      </div>

      <div className='flex flex-col space-y-2'>
        <h4 className='font-medium text-lg'>Price Range</h4>
        <hr />
        {
          filters.priceRanges.map((range, index) => (
            <label key={index} className='capitalize cursor-pointer'>
              <input 
                type="radio" 
                name="priceRange" 
                id={`priceRange-${index}`} 
                value={index} 
                checked={filtersState.priceRange === index.toString()} 
                onChange={(e) => setFiltersState({ ...filtersState, priceRange: e.target.value })} 
              />
              <span className='ml-1'>
                {range.label}
              </span>
            </label>
          ))
        }
      </div>

      <button 
        onClick={clearFilters} 
        className='w-175 py-1 px-1 bg-red-500 text-white rounded mt-4 text-xs' // Reduced padding and font size
      >
        Clear All
      </button>
    </div>
  );
};

export default ShopFiltering;






