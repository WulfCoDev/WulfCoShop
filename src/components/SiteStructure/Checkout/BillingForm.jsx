import React from 'react';

const BillingForm = () => {
  return (
    <div className="form-container">
      <h3>Billing Method/Address</h3>
      <form>
        <h4>Card Details</h4>
        <input type="text" placeholder="Name on Card" required />
        <input type="text" placeholder="Card Number" required />
        <input type="text" placeholder="Expiration Date" required />
        <input type="text" placeholder="CVV" required />
        <h4>Billing Address</h4>
        <input type="text" placeholder="First Name" required />
        <input type="text" placeholder="Last Name" required />
        <input type="text" placeholder="Address" required />
        <input type="text" placeholder="City" required />
        <input type="text" placeholder="State" required />
        <input type="text" placeholder="Zipcode" required />
      </form>
    </div>
  );
};

export default BillingForm;