import React from 'react';
import HeroHeader from './HeroHeader';
import ProductGrid from './ProductGrid';
import FeaturedItems from './FeaturedItems';
import CategoryGrid from './CategoryGrid';
import ShopAll from './ShopAllButton';

const Homepage = () => {
  return (
    <div>
      <HeroHeader />

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