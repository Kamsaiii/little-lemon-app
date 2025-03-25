import React from 'react';
import logonotext from "./logonotext.png"

function Nav() {
    return(
        <nav className="Nav">
            <div className="nav-container">
            <img src={logonotext} alt="Little Lemon Logo" className="nav-logo" />
            <ul className="nav-list">
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/menu">Menu</a></li>
                <li><a href="/reservations">Reservations</a></li>
                <li><a href="/orderonline">Order Online</a></li>
                <li><a href="/login">Login</a></li>
            </ul>
            </div>
        </nav>
    );
}

export default Nav;