import { useNavigate } from "react-router-dom";

const ShopAll = () => {
    const navigate = useNavigate();
    const handleShopAll = () => {
        navigate('/shopall');
    };
    return (
        <div>
            <button onClick={handleShopAll}>
                View All
            </button>
        </div>
    );
};

export default ShopAll;