import { useParams } from "react-router-dom";
import { fetchSingleProduct } from "../../utils/api";
import { useEffect, useState } from "react";
import { useDispatchCart } from "../User/CartContext";
import './ProductDetails.css';
import { HiStar, HiMiniChatBubbleBottomCenterText, HiMiniArrowUturnLeft } from 'react-icons/hi2';
import { useNavigate } from "react-router-dom";

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatchCart();
    const navigate = useNavigate();

    useEffect (() => {
        const fetchData = async () => {
            try {
                const data = await fetchSingleProduct(id);
                
                setProduct(data);
                setLoading(false);
                console.log(data);
            } catch (error) {
                console.error ("Error fetching product details:", error);
                setLoading(false);
            }
        };
        fetchData();
    }, [id]);
    if (loading) {
        return <div>Loading...</div>;
    }

    if (!product) {
        return <div>Product not found</div>;
    }
    const addToCart = (product) => {
        dispatch({ type: 'ADD_ITEM', item: { ...product, quantity: 1 } });
      };
    const GoBack = () => {
        navigate('/');
    }
    return (
        <div className="product-details">
            <div className="return" onClick={GoBack}><HiMiniArrowUturnLeft /></div>
            
            <img src={product.image} alt={product.title} />
            <div className="product-info">
            <h2>{product.title}</h2>
            <p className="reviews"><HiStar /> {product.rating.rate} <HiMiniChatBubbleBottomCenterText /> {product.rating.count} Reviews</p>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <button className="add-to-cart-btn" onClick={addToCart}>Add to Cart</button>
            </div>
            
        </div>
    );
};

export default ProductDetails;