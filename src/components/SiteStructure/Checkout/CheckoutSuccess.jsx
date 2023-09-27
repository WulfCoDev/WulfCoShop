import './Checkoutsuccess.css';
import { useNavigate } from 'react-router-dom';

const CheckoutSucess = () => {
    const navigate = useNavigate();
    const returnHome = () => {
        navigate('/');
    };
    return (
        <div className="checkout--container">
            <p>Order Successfully placed!</p>
            <p>Order confirmation and tracking will be sent to your email</p>
            <button onClick={returnHome}>Return Home</button>
        </div>
    )
};

export default CheckoutSucess;