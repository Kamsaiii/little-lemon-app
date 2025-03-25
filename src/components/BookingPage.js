import React, { useState } from 'react';
import BookingForm from './BookingForm';

function BookingPage({ availableTimes, dispatch, submitForm }) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  // ✅ Mark this function as async so you can use await inside it
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const formData = { date, time };
    console.log("📅 Form submitted:", formData);

    if (typeof submitForm === 'function') {
      await submitForm(formData);
      console.log("📦 Form sent to submitForm()");
    }

  };

  return (
    <section className="booking-section">
      <h1>Reserve a Table</h1>

      <BookingForm
        date={date}
        setDate={setDate}
        time={time}
        setTime={setTime}
        availableTimes={availableTimes}
        dispatch={dispatch}
        onSubmit={handleFormSubmit}
      />
    </section>
  );
}

export default BookingPage;
