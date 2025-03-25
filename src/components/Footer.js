import React from 'react';
import footerlogo from "./footerlogo.png";

const Footer = () => {
    return(
        <footer>
            <section>
                <div>
                    <img src={footerlogo} />
                </div>
                <div>
                    <h3>Navigation</h3>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Menu</li>
                        <li>Reservations</li>
                        <li>Order Online</li>
                        <li>Login</li>
                    </ul>
                </div>
                <div>
                    <h3>Contact</h3>
                    <ul>
                        <li>Address</li>
                        <li>Phone Number</li>
                        <li>Email</li>
                    </ul>
                </div>
                <div>
                <h3>Follow Us</h3>
                <ul>
                    <li>Instagram</li>
                    <li>Facebook</li>
                    <li>Youtube</li>
                </ul>
                </div>
            </section>
        </footer>
    )
}

export default Footer;