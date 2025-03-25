import React, { useState } from 'react';
import BookingForm from './BookingForm';

function BookingPage({ availableTimes, dispatch, submitForm }) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [guests, setGuests] = useState(1);


  const handleFormSubmit = async (e) => {
    e.preventDefault(); // always prevent default (we’re handling submission manually)
  
    const form = e.target;
  
    if (!form.checkValidity()) {
      form.reportValidity(); // ✅ force the browser to show validation tooltips
      return;
    }
  
    const formData = { name, email, guests, date, time };
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
        name={name}
        setName={setName}
        email={email}
        setEmail={setEmail}
        guests={guests}
        setGuests={setGuests}
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
