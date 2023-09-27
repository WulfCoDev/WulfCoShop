import React from 'react';
import { useNavigate } from 'react-router-dom';
import ShippingForm from './ShippingForm';
import BillingForm from './BillingForm';
import ShippingOptionsForm from './ShippingOptionsForm';
import './CheckoutPage.css';
import { useDispatchCart } from '../../User/CartContext';

const CheckoutPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatchCart();

  const handlePlaceOrder = () => {
    dispatch({ type: 'CLEAR_CART' });
    navigate('/order-success');
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      <ShippingForm />
      <BillingForm />
      <ShippingOptionsForm />
      <button onClick={handlePlaceOrder}>Place Your Order</button>
    </div>
  );
};

export default CheckoutPage;