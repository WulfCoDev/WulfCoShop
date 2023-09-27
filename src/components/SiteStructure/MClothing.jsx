import React, { useEffect, useState } from 'react';
import { fetchMensClothingProducts } from '../../utils/api';
import './MClothing.css';
import { useNavigate } from "react-router-dom";
import { useDispatchCart } from "../User/CartContext";
import {HiEye, HiPlus, HiMiniArrowUturnLeft} from 'react-icons/hi2';


const MensClothing = () => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();
    const dispatch = useDispatchCart();
    
  
    useEffect(() => {
      const fetchData = async () => {
        const MensclothingProducts = await fetchMensClothingProducts();
        setProducts(MensclothingProducts);
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
  

    const GoBack = () => {
      navigate('/');
  }
  
    return (
      <div className="mens-clothing-container">
        <div className="return" onClick={GoBack}><HiMiniArrowUturnLeft /></div>
          <h2 className="mens-clothing-title">Men's Clothing</h2>
          <div className="mens-clothing-items-wrapper">
        <div className="mens-clothing-items">
          {products.map((product) => (
            <div className="mens-clothing-item" key={product.id}>
              <img src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
              <p>${product.price}</p>
              <div className='button-container'>
              <button onClick={() => addToCart(product)} className="addbutton">
                <div >
                    <HiPlus />
                </div>
            </button>
            <button onClick={()=> handleViewDetails(product.id)} className="detailsbutton">
                <div >
                    <HiEye />
                </div>
            </button>
            </div>
              
            </div>
            
          ))}
        </div>
        </div>
      </div>
    );
};

export default MensClothing;