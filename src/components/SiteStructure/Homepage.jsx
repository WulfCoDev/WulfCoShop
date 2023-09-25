import React from 'react';
import HeroHeader from './HeroHeader';
import ProductGrid from './ProductGrid';

const Homepage = () => {
  return (
    <div>
      <HeroHeader />

      <section>
        <ProductGrid />
      </section>

    </div>
  );
};

export default Homepage;