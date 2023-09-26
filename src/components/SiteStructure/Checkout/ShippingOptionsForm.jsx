import React from 'react';

const ShippingOptionsForm = () => {
  return (
    <div className="form-container">
      <h3>Shipping Options</h3>
      <form>
        <input type="radio" name="shipping" value="standard" /> Standard $9.99
        <input type="radio" name="shipping" value="express" /> Express $49.99
      </form>
    </div>
  );
};

export default ShippingOptionsForm;