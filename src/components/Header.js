import React from 'react';
import logo from './logo.svg';

function Header() {
    return (
        <header>
            <section>
                <div>
                    <h1>Little Lemon</h1>
                    <h3>Chicago</h3>
                    <p>We are family owned Meditteranean Restaurant</p>
                </div>
            <div>
            <img src={logo} alt="Little Lemon Logo" />
            </div>
            </section>
        </header>
    );
}

export default Header;