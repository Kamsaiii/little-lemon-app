import React from 'react';
import BookingForm from './BookingForm';

function BookingPage() {
  return (
    <section className="booking-section">
      <h1>Reserve a Table</h1>
      <p>Please fill out the form below to book your table.</p>
      <BookingForm />
    </section>
  );
}

export default BookingPage;