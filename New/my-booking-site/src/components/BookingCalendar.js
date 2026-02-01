import React from 'react';
import './BookingCalendar.css';

function BookingCalendar() {
  const days = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
  const dates = Array.from({ length: 30 }, (_, i) => i + 1);

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <select><option>Sep 2025</option></select>
      </div>
      <div className="calendar-grid">
        {days.map(day => <div key={day} className="day-name">{day}</div>)}
        {dates.map(date => (
          <div key={date} className={`date-cell ${date === 14 ? 'selected' : ''}`}>
            {date}
          </div>
        ))}
      </div>
    </div>
  );
}

export default BookingCalendar;