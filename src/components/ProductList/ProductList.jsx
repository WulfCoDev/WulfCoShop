import { useState, useEffect } from "react";
import { fetchProducts } from "../../utils/api";
import { useNavigate } from "react-router-dom";
import { useDispatchCart } from "../User/CartContext";
import './ProductList.css';

const ProductList = () => {
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
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
      const categories = new Set(data.map(product => product.category));
      setUniqueCategories([...categories]);
    };

    fetchData();
  }, []);

  // Sorting and filtering logic
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

      const addToCart = (product) => { // New function
        dispatch({ type: 'ADD_ITEM', item: { ...product, quantity: 1 } });
      };

    return (
        
      <div>
      {/* Updated Sort and Filter UI */}
      <div className="sort-filter-wrapper">
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
        <input
          type="number"
          placeholder="Min Price"
          onChange={e => setFilter({ ...filter, minPrice: Number(e.target.value) })}
        />
        <input
          type="number"
          placeholder="Max Price"
          onChange={e => setFilter({ ...filter, maxPrice: Number(e.target.value) })}
        />
      </div>

      {/* Existing code using filteredProducts instead of products */}
      {filteredProducts.length === 0 ? (
        <div>No products available</div>
      ) : (
        filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
                <img src={product.image} alt={product.title} style={{ width: '100px', height: '100px' }} />
              <h2>{product.title}</h2>
              <h3>${product.price}</h3>
              <button onClick={() => handleViewDetails(product.id)} className="view-details-btn">View Details</button>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
            
          ))
        )}
      </div>
    );
  };
  
  export default ProductList;