import React from 'react';
import { Link } from 'react-router-dom';
import './CategoryGrid.css';

const CategoryGrid = () => {
  const categories = [
    { name: 'Electronics', route: '/category/electronics' },
    { name: 'Jewelery', route: '/category/jewelery' },
    { name: "Men's Clothing", route: '/category/mens-clothing' },
    { name: "Women's Clothing", route: '/category/womens-clothing' },
  ];

  return (
    <div className="category-grid">
      {categories.map((category, index) => (
        <Link to={category.route} key={index} className="category-tile">
          <div>
            <h3>{category.name}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CategoryGrid;