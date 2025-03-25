import React from 'react';
import headerImage from './logonotext.png';

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
                    <button className="cta-button">Reserve a Table</button>
                </div>
                <div className="header-image">
                    <img src={headerImage} alt="Little Lemon dish" />
                </div>
            </section>
        </header>
    );
}

export default Header;