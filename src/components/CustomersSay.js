import React from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Alice',
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrrE3lhZDEsVDj2ajpzltU0Y3rySGkJwOIPQ&s",
    rating: 5,
    review: 'Absolutely loved the food and the cozy atmosphere!',
  },
  {
    id: 2,
    name: 'Belle',
    image: "https://hbz.h-cdn.co/assets/16/21/480x480/square-1464031666-hbz-belle.jpeg",
    rating: 5,
    review: 'Great service, and the bruschetta was top-notch.',
  },
  {
    id: 3,
    name: 'Cinderella',
    image: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/3E5AAE5368EA6FBF3F77CF43C23599EB18985A12326E8F0E2C388635F799550C/scale?width=440&aspectRatio=1.78&format=webp",
    rating: 5,
    review: 'One of my favorite places in Chicago. Highly recommend!',
  },
  {
    id: 4,
    name: 'Drizella',
    image: "https://www.cornel1801.com/disney/Cinderella-1950/characters/do-you-realise-what-you-just-said.jpg",
    rating: 4,
    review: 'Lovely family-owned restaurant. Will be back!',
  },
];

function CustomersSay() {
  return (
    <section className="testimonials-section">
      <h2 className="testimonials-title">Testimonials</h2>
      <div className="testimonials-container">
        {testimonials.map((customer) => (
          <div className="testimonial-card" key={customer.id}>
            <img src={customer.image} alt={customer.name} className="testimonial-avatar" />
            <div className="testimonial-rating">
              {'🍋'.repeat(customer.rating)}
            </div>
            <h4 className="testimonial-name">{customer.name}</h4>
            <p className="testimonial-review">{customer.review}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CustomersSay;