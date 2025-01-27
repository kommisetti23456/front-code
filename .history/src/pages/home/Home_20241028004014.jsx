import React from 'react';
import Banner from './Banner';
import Categories from './Categories';
import HeroSection from './HeroSection';
import TrendingProducts from '../shop/TrendingProducts';
import DealsSection from '../DealsSection';

const Home = () => {
  return (
    <div>
      <Banner />
      <Categories />
      <HeroSection/>
      <TrendingProducts/>
       <DealsSection/>
    </div>
  );
};

export default Home;







