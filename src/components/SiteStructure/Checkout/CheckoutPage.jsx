import React from 'react';
import { useNavigate } from 'react-router-dom';
import ShippingForm from './ShippingForm';
import BillingForm from './BillingForm';
import ShippingOptionsForm from './ShippingOptionsForm';
import './CheckoutPage.css';

const CheckoutPage = () => {
  const navigate = useNavigate();

  const handlePlaceOrder = () => {
    // Do validation, API calls etc.
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