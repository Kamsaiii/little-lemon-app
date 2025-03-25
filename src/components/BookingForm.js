import React from 'react';

function BookingForm({
  date,
  setDate,
  time,
  setTime,
  availableTimes,
  dispatch,
  onSubmit,
}) {
  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    if (typeof dispatch === 'function') {
      dispatch({ type: 'update', date: selectedDate });
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}
      aria-labelledby="booking-form-heading"
    >
      <h2 id="booking-form-heading" className="sr-only">Table Reservation Form</h2>

      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        name="reservation-date"
        value={date}
        onChange={handleDateChange}
        aria-required="true"
        aria-describedby="res-date-desc"
      />
      <span id="res-date-desc" className="sr-only">
        Select a date for your table reservation.
      </span>

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        name="reservation-time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        aria-required="true"
        aria-describedby="res-time-desc"
      >
        {availableTimes.map((t) => (
          <option key={t} value={t}>{t}</option>
        ))}
      </select>
      <span id="res-time-desc" className="sr-only">
        Select a time slot for your table.
      </span>

      <button type="submit" aria-label="Submit reservation">Submit</button>
    </form>
  );
}

export default BookingForm;