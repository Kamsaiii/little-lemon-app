import React from 'react';
import './CustomersSay.css';

const testimonials = [
  {
    id: 1,
    name: 'Alice',
    image: '/images/user1.jpg',
    rating: 5,
    review: 'Absolutely loved the food and the cozy atmosphere!',
  },
  {
    id: 2,
    name: 'Brian',
    image: '/images/user2.jpg',
    rating: 4,
    review: 'Great service, and the bruschetta was top-notch.',
  },
  {
    id: 3,
    name: 'Clara',
    image: '/images/user3.jpg',
    rating: 5,
    review: 'One of my favorite places in Chicago. Highly recommend!',
  },
  {
    id: 4,
    name: 'Daniel',
    image: '/images/user4.jpg',
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
            <div className="testimonial-rating">
              {'⭐'.repeat(customer.rating)}
            </div>
            <img src={customer.image} alt={customer.name} className="testimonial-avatar" />
            <h4 className="testimonial-name">{customer.name}</h4>
            <p className="testimonial-review">{customer.review}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CustomersSay;