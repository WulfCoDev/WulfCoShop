import React from 'react';
import './CartSideBar.css';
import { useDispatchCart, useCart } from './CartContext';
import { useNavigate } from 'react-router-dom';

const CartSidebar = ({ isOpen, toggleSidebar, }) => {
    const cart = useCart();
    const dispatch = useDispatchCart();
    const navigate = useNavigate();
  
    // Calculate the total price of the cart items
    const totalCost = cart.reduce((acc, item) => 
      acc + (item?.price * item?.quantity || 0), 0).toFixed(2);
    
  
    console.log(cart.map(item => [item.price, item.quantity, typeof item.price, typeof item.quantity]));


    const toCheckout = () => {
      navigate ('/checkout');
    }

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
              <div className='image-title'> 
              <img src={item.image} alt={item.title} width="50" />
            <span className='item-title'>{item.title}<p className='item-price'>${item.price}</p></span>
            
            </div>
            <div> 
              <span className='total' >Total: ${(item.quantity * item.price).toFixed(2)}</span>
            <div className="quantity-control">
                <button className="increase" onClick={() => dispatch({ type: 'UPDATE_ITEM_QUANTITY', id: item.id, quantity: item.quantity + 1 })}>+</button>
                <span className="quantity">{item.quantity}</span>
                <button className='decrease' onClick={() => dispatch({ type: 'UPDATE_ITEM_QUANTITY', id: item.id, quantity: item.quantity - 1 })}>-</button>
            </div>
            </div>
           
           
            </div>
        </li>
        ))}
    </ul>
    )}
    {cart.length > 0 && <div>Total Price: ${totalCost}</div>}
    <button className="checkout-button" onClick={toCheckout}>Proceed to Checkout</button>
</div>
    );
};

export default CartSidebar;