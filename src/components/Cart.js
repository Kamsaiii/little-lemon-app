import React from 'react';
import { Link } from 'react-router-dom';

function Cart({ cartItems, removeFromCart, updateQuantity }) {
  const totalAmount = cartItems.reduce((total, item) => 
    total + (parseFloat(item.finalPrice) * item.quantity), 0
  );

  if (cartItems.length === 0) {
    return (
      <div className="cart-container">
        <h1>Your Cart</h1>
        <p className="empty-cart-message">Your cart is empty</p>
        <Link to="/orderonline" className="continue-shopping">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      <div className="cart-items">
        {cartItems.map((item, index) => (
          <div key={index} className="cart-item">
            <div className="item-info">
              <h3>{item.name}</h3>
              <p>${item.finalPrice}</p>
            </div>
            <div className="quantity-controls">
              <button 
                onClick={() => updateQuantity(item.name, item.quantity - 1)}
                disabled={item.quantity <= 1}
              >
                -
              </button>
              <span>{item.quantity}</span>
              <button onClick={() => updateQuantity(item.name, item.quantity + 1)}>
                +
              </button>
            </div>
            <div className="item-total">
              <p>${(parseFloat(item.finalPrice) * item.quantity).toFixed(2)}</p>
              <button 
                className="remove-btn"
                onClick={() => removeFromCart(item.name)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <div className="cart-total">
          <h3>Total:</h3>
          <h3>${totalAmount.toFixed(2)}</h3>
        </div>
        <Link to="/checkout" className="checkout-btn">
          Proceed to Checkout
        </Link>
        <Link to="/orderonline" className="continue-shopping">
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}

export default Cart; 