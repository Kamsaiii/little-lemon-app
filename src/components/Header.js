import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="header">
            <section className="header-section">
                <div className="header-text">
                    <h1 className="display-title">Little Lemon</h1>
                    <h3 className="location">Chicago</h3>
                    <p className="lead-text">
                        We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
                    </p>
                    <Link to="/reservations" className="cta-button">
                        Reserve a Table
                    </Link>
                </div>
                <div className="header-image">
                    <img src="https://www.themediterraneandish.com/wp-content/uploads/2023/07/TMD-Lemon-Garlic-Chicken-WEB-26.jpg" alt="Little Lemon dish" />
                </div>
            </section>
        </header>
    );
}

export default Header;