import React from 'react';
import { useLocation } from 'react-router-dom';

function Checkout() {
  const location = useLocation();
  const price = location.state?.price || 0; // Default to 0 if price is not passed

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle form submission
  };

  return (
    <div className="container mt-5">
      <h2>Checkout</h2>
      <p>Price: {price}</p>
      <form onSubmit={handleSubmit}>
        {/* Form fields for shop address, mobile number, etc. */}
      </form>
    </div>
  );
}

export default Checkout;
