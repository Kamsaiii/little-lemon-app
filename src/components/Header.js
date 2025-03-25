import React from 'react';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  return (
    <header className="header">
      <section className="header-section">
        <div className="header-text">
          <h1 className="display-title">Little Lemon</h1>
          <h3 className="location">Chicago</h3>
          <p className="lead-text">
            We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
          </p>
          <button
            className="cta-button"
            onClick={() => navigate('/reservations')}
          >
            Reserve a Table
          </button>
        </div>

        <div className="header-image">
          <img
            src="https://www.themediterraneandish.com/wp-content/uploads/2023/07/TMD-Lemon-Garlic-Chicken-WEB-26.jpg"
            alt="Little Lemon dish"
          />
        </div>
      </section>
    </header>
  );
}

export default Header;