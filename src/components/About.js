import React from 'react';

function About() {
  return (
    <div className="about-section">
      <div className="about-content">
        <div className="about-text">
          <h1 className="about-title">Little Lemon</h1>
          <h2 className="about-subtitle">Chicago</h2>
          <p>
            Little Lemon is a charming Mediterranean restaurant, focused on traditional 
            recipes served with a modern twist. Founded by two Italian brothers, Mario 
            and Adrian, the restaurant has been serving the Chicago area since 1995.
          </p>
          <p>
            Our menu is inspired by family recipes and features fresh, locally-sourced 
            ingredients. We pride ourselves on providing an authentic Mediterranean 
            dining experience in a comfortable, modern setting.
          </p>
        </div>
        <div className="about-images">
          <img 
            className="image image-front" 
            src="https://media-cdn.tripadvisor.com/media/photo-s/2a/33/db/6b/food-at-little-lemon.jpg" 
            alt="Little Lemon restaurant interior"
          />
          <img 
            className="image image-back" 
            src="https://little-lemon-django-iota.vercel.app/static/img/opening_hours.webp" 
            alt="Little Lemon chefs at work"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
