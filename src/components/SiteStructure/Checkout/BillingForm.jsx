import React from 'react';

const BillingForm = () => {
  return (
    <div className="form-container">
      <h3>Billing Method/Address</h3>
      <form>
        <input type="text" placeholder="Card Number" required />
        <input type="text" placeholder="Expiration Date" required />
        <input type="text" placeholder="CVV" required />
        <input type="text" placeholder="Billing Address" required />
      </form>
    </div>
  );
};

export default BillingForm;