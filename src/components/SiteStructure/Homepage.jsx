import React from 'react';
import ProductGrid from './ProductGrid';
import FeaturedItems from './FeaturedItems';
import CategoryGrid from './CategoryGrid';
import ShopAll from './ShopAllButton';

const Homepage = () => {
  return (
    <div>

      <section>
        <FeaturedItems />
        <CategoryGrid />
        <ProductGrid />
        <ShopAll />
      </section>

    </div>
  );
};

export default Homepage;