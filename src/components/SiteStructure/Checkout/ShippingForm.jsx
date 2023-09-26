import React from 'react';

const ShippingForm = () => {
  return (
    <div className="form-container">
      <h3>Shipping Information</h3>
      <form>
        <input type="text" placeholder="First Name" required />
        <input type="text" placeholder="Last Name" required />
        <input type="text" placeholder="Address" required />
        <input type="text" placeholder="City" required />
        <input type="text" placeholder="Postal Code" required />
        <input type="text" placeholder="Country" required />
      </form>
    </div>
  );
};

export default ShippingForm;