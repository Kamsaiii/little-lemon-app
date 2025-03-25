import React from 'react';

function Chicago() {
  return (
    <section className="chicago-section">
      <div className="chicago-content">
        <div className="chicago-text">
          <h2 className="chicago-title">Little Lemon</h2>
          <h3 className="chicago-subtitle">Chicago</h3>
          <p>
          Welcome to Little Lemon — a cozy neighborhood bistro rooted in the heart of Chicago. We are a family-owned Mediterranean restaurant that takes pride in serving time-honored recipes passed down through generations.
          </p>
          <p>
          Every dish is prepared with fresh, locally-sourced ingredients and infused with bold, authentic flavors. Whether you're stopping by for a quick lunch or celebrating a special evening, our team is here to make you feel right at home.
          </p>
        </div>

        <div className="chicago-images">
          <img src="https://www.littlelemon.ie/wp-content/uploads/IMG_2588-1600x1196.jpg" alt="Restaurant inside" className="image image-back" />
          <img src="https://little-lemon-django-iota.vercel.app/static/img/opening_hours.webp" alt="Chef preparing food" className="image image-front" />
        </div>
      </div>
    </section>
  );
}

export default Chicago;