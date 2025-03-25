import { initializeTimes, updateTimes } from '../bookingReducer';

describe('Booking Reducer Functions', () => {
  beforeEach(() => {
    window.fetchAPI = jest.fn(() => ['17:00', '18:00', '19:00']);
  });

  test('initializeTimes returns times from fetchAPI', () => {
    const times = initializeTimes();
    expect(window.fetchAPI).toHaveBeenCalled();
    expect(times).toEqual(['17:00', '18:00', '19:00']);
  });

  test('updateTimes returns times from fetchAPI with selected date', () => {
    const action = { type: 'update', date: '2025-03-27' };
    const result = updateTimes([], action);
    expect(window.fetchAPI).toHaveBeenCalledWith(new Date('2025-03-27'));
    expect(result).toEqual(['17:00', '18:00', '19:00']);
  });
});

import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

test("Date input has required validation", () => {
  render(
    <BookingForm
      date=""
      setDate={() => {}}
      time=""
      setTime={() => {}}
      availableTimes={["17:00"]}
      dispatch={() => {}}
      onSubmit={() => {}}
    />
  );

  const dateInput = screen.getByLabelText(/Choose date/i);
  expect(dateInput).toHaveAttribute("required");
  expect(dateInput).toHaveAttribute("type", "date");
});

test("Time select has required validation", () => {
  render(
    <BookingForm
      date=""
      setDate={() => {}}
      time=""
      setTime={() => {}}
      availableTimes={["17:00"]}
      dispatch={() => {}}
      onSubmit={() => {}}
    />
  );

  const timeSelect = screen.getByLabelText(/Choose time/i);
  expect(timeSelect).toHaveAttribute("required");
});
