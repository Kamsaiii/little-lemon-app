import { initializeTimes, updateTimes } from '../bookingReducer';
import { render, screen } from "@testing-library/react";
import BookingForm from './BookingForm';

test('Renders the BookingForm date label', () => {
  render(
    <BookingForm
      date=""
      setDate={() => {}}
      time=""
      setTime={() => {}}
      availableTimes={['17:00', '18:00']}
      dispatch={() => {}}
    />
  );

  const labelElement = screen.getByText("Choose date");
  expect(labelElement).toBeInTheDocument();
});

test('initializeTimes returns correct default times', () => {
    const result = initializeTimes();
    expect(result).toEqual(['17:00', '18:00', '19:00', '20:00', '21:00']);
  });

  test('updateTimes returns same list when given update action', () => {
    const currentState = ['17:00', '18:00'];
    const action = { type: 'update', date: '2025-03-25' };
    const result = updateTimes(currentState, action);
    expect(result).toEqual(['17:00', '18:00', '19:00', '20:00', '21:00']);
  });
  
