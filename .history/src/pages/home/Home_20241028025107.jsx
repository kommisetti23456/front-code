import React from 'react';
import Banner from './Banner';
import Categories from './Categories';
import HeroSection from './HeroSection';
import TrendingProducts from '../shop/TrendingProducts';
import DealsSection from '../DealsSection';
import PromoBanner from '../PromoBanner';
import CategoryPage from '../CategoryPage';
import Search from '../Search';

const Home = () => {
  return (
    <div>
      <Banner />
      <Categories />
      <HeroSection/>
      <Search/>
      <TrendingProducts/>
       <DealsSection/>
       <PromoBanner/>
       {/* <CategoryPage/> */}

    </div>
  );
};

export default Home;







