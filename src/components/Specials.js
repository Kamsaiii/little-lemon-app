import React from 'react';

function Specials() {
    return (
        <section className="specials-section">
            <div className="specials-header">
                <h2>Specials</h2>
                <button className="online-menu-btn">Online Menu</button>
            </div>

            <div className="specials-cards">
                {/* Card 1 */}
                <div className="special-card">
                    <img src="https://www.simplyrecipes.com/thmb/0NrKQlJ691l6L9tZXpL06uOuWis=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Easy-Greek-Salad-LEAD-2-4601eff771fd4de38f9722e8cafc897a.jpg" alt="Greek Salad" />
                    <div className="card-info">
                        <div className="card-title">
                            <h3>Greek salad</h3>
                            <span className="price">$12.99</span>
                        </div>
                        <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
                        <p className="order-link">Order a delivery 🛵</p>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="special-card">
                    <img src="https://www.simplyorganic.com/media/recipe/resized/520x520/wysiwyg/tmp/simply-oragnic-Roasted-Tomato-Bruschetta-1080x1080-thumbnail.jpg" alt="Bruschetta" />
                    <div className="card-info">
                        <div className="card-title">
                            <h3>Bruschetta</h3>
                            <span className="price">$5.99</span>
                        </div>
                        <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
                        <p className="order-link">Order a delivery 🛵</p>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="special-card">
                    <img src="https://hips.hearstapps.com/hmg-prod/images/lemon-desserts-atlantic-beach-pie-1676667974.jpeg?crop=1xw:1xh;center,top&resize=980:*" alt="Lemon Dessert" />
                    <div className="card-info">
                        <div className="card-title">
                            <h3>Lemon Dessert</h3>
                            <span className="price">$5.00</span>
                        </div>
                        <p>This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                        <p className="order-link">Order a delivery 🛵</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Specials;