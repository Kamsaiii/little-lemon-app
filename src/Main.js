import React, { useReducer } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Homepage from './components/Homepage';
import BookingPage from './components/BookingPage';
import ConfirmedBooking from './components/ConfirmedBooking';
import { initializeTimes, updateTimes } from './bookingReducer';

function Main() {
  const navigate = useNavigate();

  const submitForm = async (formData) => {
    console.log("📤 Submitting booking...", formData);
    if (typeof window.submitAPI === 'function') {
      const success = await window.submitAPI(formData); // ✅ Await it
      console.log("✅ API Response:", success);
      
      if (success) {
        navigate('/confirmed');
      } else {
        console.error("Booking failed");
      }
    } else {
      console.error("submitAPI is not available on window");
    }
  };

  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

  return (
    <main>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/reservations"
          element={
            <BookingPage
              availableTimes={availableTimes}
              dispatch={dispatch}
              submitForm={submitForm} // ✅ passed here
            />
          }
        />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
      </Routes>
    </main>
  );
}

export default Main;