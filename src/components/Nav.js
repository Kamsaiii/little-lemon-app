import React from 'react';
import logonotext from "./images/logonotext.png";
import { Link } from 'react-router-dom';

function Nav({ cartItems }) {
  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="Nav">
      <div className="nav-container">
        <img src={logonotext} alt="Little Lemon Logo" className="nav-logo" />
        <ul className="nav-list">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/menu">Menu</Link></li>
          <li><Link to="/reservations">Reservations</Link></li>
          <li><Link to="/orderonline">Order Online</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li className="cart-icon">
            <Link to="/cart">
              🛒 {cartItemCount > 0 && <span className="cart-count">{cartItemCount}</span>}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;