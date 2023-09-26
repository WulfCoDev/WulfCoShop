import React, { useEffect, useState, useRef } from "react";
import { fetchFeaturedProducts } from "../../utils/api";
import "./FeaturedItems.css";

const FeaturedItems = () => {
  const [products, setProducts] = useState([]);
  const scrollRef = useRef(null);

  const scroll = (scrollOffset) => {
    scrollRef.current.scrollLeft += scrollOffset;
  };

  useEffect(() => {
    const fetchData = async () => {
      const featuredProducts = await fetchFeaturedProducts();
      setProducts(featuredProducts);
    };
    fetchData();
  }, []);

  return (
    <div className="featured-container">
        <h2 className="featured-title">Featured Items</h2>
        <div className="featured-items-wrapper">
      <button className="scroll-button" onClick={() => scroll(-300)}>
        &lt;
      </button>
      <div className="featured-items" ref={scrollRef}>
        {products.map((product) => (
          <div className="featured-item" key={product.id}>
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
      <button className="scroll-button" onClick={() => scroll(300)}>
        &gt;
      </button>
      </div>
    </div>
  );
};

export default FeaturedItems;