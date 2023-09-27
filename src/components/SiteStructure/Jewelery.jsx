import React, { useEffect, useState } from 'react';
import { fetchJewelryProducts } from '../../utils/api';
import './Jewelery.css';
import { useNavigate } from "react-router-dom";
import { useDispatchCart } from "../User/CartContext";
import {HiEye, HiPlus, HiMiniArrowUturnLeft} from 'react-icons/hi2';


const Jewelry = () => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();
    const dispatch = useDispatchCart();
    
  
    useEffect(() => {
      const fetchData = async () => {
        const JewelryProducts = await fetchJewelryProducts();
        setProducts(JewelryProducts);
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
      <div className="jewelry-container">
        <div className="return" onClick={GoBack}><HiMiniArrowUturnLeft /></div>
          <h2 className="jewelry-title">Jewelry Items</h2>
          <div className="jewelry-items-wrapper">
        <div className="jewelry-items">
          {products.map((product) => (
            <div className="jewelry-item" key={product.id}>
              <img src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
              <div className='button--container'><button onClick={() => addToCart(product)} className="add_button">
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
        </div>
      </div>
    );
};

export default Jewelry;