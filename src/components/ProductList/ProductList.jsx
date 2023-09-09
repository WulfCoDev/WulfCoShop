import { useState, useEffect } from "react";
import { fetchProducts } from "../../utils/api";

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
  
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
  
    return (
      <div>
        {products.length === 0 ? (
          <div>No products available</div>
        ) : (
          products.map((product) => (
            <div key={product.id}>
              <h2>{product.title}</h2>
              <h3>${product.price}</h3>
              <img src={product.image} alt={product.title} style={{ width: '100px', height: '100px' }} />
            </div>
          ))
        )}
      </div>
    );
  };
  
  export default ProductList;