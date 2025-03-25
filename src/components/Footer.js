import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-logo">
                    <img src="https://littlelemon.cyruscsc.com/images/littlelemon-og-image.jpg" alt="Little Lemon Logo" />
                </div>

                <div className="footer-column">
                    <h4>Navigation</h4>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/menu">Menu</Link></li>
                        <li><Link to="/reservations">Reservations</Link></li>
                        <li><Link to="/orderonline">Order Online</Link></li>
                        <li><Link to="/login">Login</Link></li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h4>Contact</h4>
                    <ul>
                        <li>123 Lemon St, Chicago</li>
                        <li>(123) 456-7890</li>
                        <li>hello@littlelemon.com</li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h4>Social Media Links</h4>
                    <ul>
                        <li>Facebook</li>
                        <li>Instagram</li>
                        <li>Youtube</li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;