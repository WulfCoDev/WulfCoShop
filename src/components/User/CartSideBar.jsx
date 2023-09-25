import React from 'react';
import './CartSideBar.css';
import { useDispatchCart, useCart } from './CartContext';

const CartSidebar = ({ isOpen, toggleSidebar, }) => {
    const cart = useCart();
    const dispatch = useDispatchCart();
  
    // Calculate the total price of the cart items
    const totalCost = cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
  
    // Function to remove an item from the cart
    const removeFromCart = (id) => {
      dispatch({ type: 'REMOVE_ITEM', id });
    };


  return (
    <div className={`cart-sidebar ${isOpen ? 'open' : ''}`}>
        <button className="close-button" onClick={toggleSidebar}>Close</button>
        <h2>Your Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                <div className='cart-item'>
                  <img src={item.image} alt={item.title} width="50" />
                  <span>{item.title}</span>
                  <span>Total: ${(item.quantity * item.price).toFixed(2)}</span>
              <button onClick={() => dispatch({ type: 'UPDATE_ITEM_QUANTITY', id: item.id, quantity: item.quantity + 1 })}>+</button>
              <button onClick={() => dispatch({ type: 'UPDATE_ITEM_QUANTITY', id: item.id, quantity: item.quantity - 1 })}>-</button>
            </div>
                
              </li>
            ))}
          </ul>
        )}
        {cart.length > 0 && <div>Total Price: ${totalCost}</div>}
        <button className="checkout-button">Proceed to Checkout</button>
      </div>
    );
};

export default CartSidebar;