import { useParams } from "react-router-dom";
import { fetchSingleProduct } from "../../utils/api";
import { useEffect, useState } from "react";

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect (() => {
        const fetchData = async () => {
            try {
                const data = await fetchSingleProduct(id);
                console.log(data);
                setProduct(data);
                setLoading(false);
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

    return (
        <div>
            <img src={product.image} alt={product.title} />
            <h2>{product.title}</h2>
            <p>{product.rating.rate} {product.rating.count} Reviews</p>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
        </div>
    );
};

export default ProductDetails;