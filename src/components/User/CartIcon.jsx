import { useCart } from './CartContext';
import './CartIcon.css';
import { Link } from 'react-router-dom';

const CartIcon = () => {
    const cart = useCart();
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  
    return (
        <Link to="/cart">
      <div className="cart-icon">
        <i className="fas fa-shopping-cart"></i> 
        <span className="cart-count">{totalItems}</span>
      </div>
      </Link>
    );
  };
  
  export default CartIcon;