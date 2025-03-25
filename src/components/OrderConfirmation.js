import React from 'react';
import { Link } from 'react-router-dom';

function OrderConfirmation() {
  return (
    <div className="order-confirmation">
      <h1>Order Confirmed!</h1>
      <p>Thank you for your order. We'll send you a confirmation email shortly.</p>
      <Link to="/" className="back-to-home">
        Back to Home
      </Link>
    </div>
  );
}

export default OrderConfirmation; 