import React, { useEffect, useState } from "react";
import { fetchProducts } from "../../utils/api";
import { useNavigate } from "react-router-dom";
import { useDispatchCart } from "../User/CartContext";
import './ShopAll.css';
import {HiEye, HiPlus, HiMiniArrowUturnLeft} from 'react-icons/hi2';

const AllProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [sortType, setSortType] = useState('name'); // Sorting state
    const [filter, setFilter] = useState({ // Filtering state
      category: '',
      type: '',
      minPrice: 0,
      maxPrice: Infinity
    });
  
    const navigate = useNavigate();
    const dispatch = useDispatchCart();
    const [uniqueCategories, setUniqueCategories] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const data = await fetchProducts();
            setProducts(data);
            setLoading(false);
            const categories = new Set(data.map(product => product.category));
          setUniqueCategories([...categories]);
          } catch (error) {
            console.error('Error fetching products:', error);
            setLoading(false);
          }
          
        };
    
        fetchData();
      }, []);

  const sortedProducts = [...products].sort((a, b) => {
    if (sortType === 'name') {
      return a.title.localeCompare(b.title);
    }
    if (sortType === 'price') {
      return a.price - b.price;
    }
    return 0;
  });

  const filteredProducts = sortedProducts.filter(product => {
    return (
      product.category.includes(filter.category) &&
      product.price >= filter.minPrice &&
      product.price <= filter.maxPrice
    );
  });
  
    if (loading) {
      return <div>Loading...</div>;
    }

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
    <div className="shopAllContainer">
      <div className="return-arr" onClick={GoBack}><HiMiniArrowUturnLeft /></div>
        <div className="sort--filter-wrapper">
        <select onChange={e => setSortType(e.target.value)}>
          <option value="name">Sort by Name</option>
          <option value="price">Sort by Price</option>
        </select>
        <select
          onChange={e => setFilter({ ...filter, category: e.target.value })}
        >
          <option value="">All Categories</option>
          {uniqueCategories.map((category, index) => (
            <option key={index} value={category}>{category}</option>
          ))}
        </select>
        
      </div>
    <div className="--grid">
        
    {filteredProducts.length === 0 ? (
        <div>No products available</div>
      ) : (filteredProducts.map((product) => (
        <div className="product--tile" key={product.id}>
          <img src={product.image} alt={product.title} className="product--image"/>
          <div className="product--info">
            <h4>{product.category}</h4>
            <h3>{product.title}: <span>${product.price}</span></h3>
            
          </div>
          <div className="product--actions">
          <button onClick={() => addToCart(product)} className="add-button">
                <div >
                    <HiPlus />
                </div>
            </button>
            <button onClick={()=> handleViewDetails(product.id)} className="details--button">
                <div >
                    <HiEye />
                </div>
            </button>
          </div>
        </div>
      )))
}
    </div>
    </div>
  );
};

export default AllProducts;