import React from 'react';

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
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/menu">Menu</a></li>
                        <li><a href="/reservations">Reservations</a></li>
                        <li><a href="/orderonline">Order Online</a></li>
                        <li><a href="/login">Login</a></li>
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