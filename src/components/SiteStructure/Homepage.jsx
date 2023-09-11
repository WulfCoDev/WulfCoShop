import React from 'react';
import ProductList from '../ProductList/ProductList'

const Homepage = () => {
  return (
    <div>
      <h2>Welcome to WulfCo Shop!</h2>
      <p>Your one-stop shop for all your needs.</p>

      <section>
        <h3>Featured Products</h3>
        <ProductList />
      </section>

    </div>
  );
};

export default Homepage;