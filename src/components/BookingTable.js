import React from 'react';

function BookingTable({ bookings }) {
  return (
    <div style={{ marginTop: '2rem' }}>
      <h2>Current Bookings</h2>
      <table border="1" cellPadding="10" style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>Date</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {bookings.length === 0 ? (
            <tr>
              <td colSpan="2" style={{ textAlign: 'center' }}>No bookings yet.</td>
            </tr>
          ) : (
            bookings.map((booking, index) => (
              <tr key={index}>
                <td>{booking.date}</td>
                <td>{booking.time}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default BookingTable;
