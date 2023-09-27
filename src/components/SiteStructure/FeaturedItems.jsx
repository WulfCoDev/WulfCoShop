import React, { useEffect, useState, useRef } from "react";
import { fetchFeaturedProducts } from "../../utils/api";
import "./FeaturedItems.css";
import {HiEye, HiPlus} from 'react-icons/hi2';
import { useNavigate } from "react-router-dom";
import { useDispatchCart } from "../User/CartContext";

const FeaturedItems = () => {
  const [products, setProducts] = useState([]);
  const scrollRef = useRef(null);
  const navigate = useNavigate();
    const dispatch = useDispatchCart();

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

  const handleViewDetails = (productId) => {
    navigate (`/product/${productId}`);
    

      console.log(`Navigate to details of product with ID: ${productId}`);
    };

    const addToCart = (product) => {
      console.log("Adding item to cart:", product);
    
      if (typeof product.price !== 'undefined') {
        dispatch({ type: 'ADD_ITEM', item: { ...product, quantity: 1 } });
      } else {
        console.error("Product price is undefined:", product);
      }
    };    

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
            <div className='button--container'>
              <button onClick={addToCart} className="add_button">
                <div >
                    <HiPlus />
                </div>
            </button>
            <button onClick={()=> handleViewDetails(product.id)} className="details_button">
                <div >
                    <HiEye />
                </div>
            </button>
            </div>
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