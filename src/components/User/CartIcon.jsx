import { useCart, useDispatchCart } from './CartContext';
import { HiShoppingCart } from 'react-icons/hi2';
import './CartIcon.css';
import { useState } from 'react';
import CartSidebar from './CartSideBar';
import './CartSideBar.css';  // Add this line


const CartIcon = () => {
    const cart = useCart();
    const dispatch = useDispatchCart();
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

    

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  
    return (
      <div className="cart-icon">
        <button onClick={toggleSidebar}>
          <HiShoppingCart />
        </button>
        <span className="cart-count">{totalItems}</span>
        <CartSidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} cart={cart} />
      </div>
    );
  };
  
  export default CartIcon;