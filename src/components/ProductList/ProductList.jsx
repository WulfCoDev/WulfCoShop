import { useState, useEffect } from "react";
import { fetchProducts } from "../../utils/api";
import { useNavigate } from "react-router-dom";
import { useDispatchCart } from "../User/CartContext";
import './ProductList.css';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const dispatch = useDispatchCart();
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const data = await fetchProducts();
          setProducts(data);
          setLoading(false);
        } catch (error) {
          console.error('Error fetching products:', error);
          setLoading(false);
        }
      };
      
      fetchData();
    }, []);
  
    if (loading) {
      return <div>Loading...</div>;
    }
  
    const handleViewDetails = (productId) => {
      navigate (`/product/${productId}`);
      

        console.log(`Navigate to details of product with ID: ${productId}`);
      };

      const addToCart = (product) => { // New function
        dispatch({ type: 'ADD_ITEM', item: { ...product, quantity: 1 } });
      };

    return (
        
      <div>
        {products.length === 0 ? (
          <div>No products available</div>
        ) : (
          products.map((product) => (
            <div className="product-list">
            <div key={product.id} className="product-card">
                <img src={product.image} alt={product.title} style={{ width: '100px', height: '100px' }} />
              <h2>{product.title}</h2>
              <h3>${product.price}</h3>
              <button onClick={() => handleViewDetails(product.id)} className="view-details-btn">View Details</button>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
            </div>
          ))
        )}
      </div>
    );
  };
  
  export default ProductList;