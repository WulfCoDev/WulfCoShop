import React from 'react';
import HeroHeader from './HeroHeader';
import ProductGrid from './ProductGrid';
import FeaturedItems from './FeaturedItems';

const Homepage = () => {
  return (
    <div>
      <HeroHeader />

      <section>
        <FeaturedItems />
        <ProductGrid />
      </section>

    </div>
  );
};

export default Homepage;