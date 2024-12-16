import React from 'react';
import './BookingSection.css';

const BookingSection = () => {
  return (
    <div className="booking-section">
      <h2 className="booking-title">Book Your Adventure</h2>
      <div className="search-bar">
        <input type="text" placeholder="Where do you want to go?" className="search-input" />
        <input type="date" className="date-input" />
        <input type="number" placeholder="Number of guests" className="guests-input" min="1" />
        <button className="search-button">Search</button>
      </div>
    </div>
  );
};

export default BookingSection;