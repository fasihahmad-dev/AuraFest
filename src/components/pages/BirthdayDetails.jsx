import React, { useState } from 'react';
import '../styles/birthdayDetail.css';

const BirthdayEvents = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [events] = useState([
    {
      name: 'Elegant Birthday Party',
      price: 3000,
      venue: 'Grand Ballroom',
      food: 'Buffet, Cake, Soft Drinks',
      guests: '50-100',
      decorationCost: 500,
      image: '/images/elegantbirthday.jpg',
    },
    {
      name: 'Luxury Birthday Bash',
      price: 5000,
      venue: 'Crystal Palace',
      food: 'Gourmet Buffet, Cake, Champagne',
      guests: '100-200',
      decorationCost: 1000,
      image: '/images/luxurybirthday.jpg',
    },
    {
      name: 'Outdoor Picnic Party',
      price: 1500,
      venue: 'City Park',
      food: 'BBQ, Snacks, Drinks',
      guests: '20-50',
      decorationCost: 200,
      image: '/images/outdoorbirthday.jpg',
    },
    {
      name: 'Kids Funfair Birthday',
      price: 2500,
      venue: 'Funfair Park',
      food: 'Pizza, Cake, Ice Cream',
      guests: '50-100',
      decorationCost: 400,
      image: '/images/kidsbirthday.jpg',
    },
  ]);

  const filteredEvents = events.filter(
    (event) =>
      event.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.food.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const storeEventData = (event) => {
    localStorage.setItem('selectedEvent', JSON.stringify(event));
    window.location.href = '/birthday-booking'; 
  };

  return (
    <div className="birthday-events-page">
      <header>
        <h1>Aura Fest - Birthday Events</h1>
      </header>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search for birthday events..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>

      <section className="hero-section">
        <h1>Celebrate Your Special Day with Us</h1>
        <p>Choose from our unique birthday packages and make your day memorable.</p>
      </section>

      <section className="event-list">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event, index) => (
            <div className="event-card" key={index}>
              <img src={event.image} alt={event.name} />
              <h3>{event.name}</h3>
              <p>{event.description}</p>
              <p>
                <strong>Venue:</strong> {event.venue}
              </p>
              <p>
                <strong>Food Options:</strong> {event.food}
              </p>
              <p>
                <strong>Price:</strong> ${event.price}
              </p>
              <p>
                <strong>Guests:</strong> {event.guests}
              </p>
              <p>
                <strong>Total Decoration Cost:</strong> ${event.decorationCost}
              </p>
              <button
                className="book-button btn btn-primary"
                onClick={() => storeEventData(event)}
              >
                Book
              </button>
            </div>
          ))
        ) : (
          <div id="noEventMessage" className="no-events">
            No events found matching your search.
          </div>
        )}
      </section>

      <footer>
        <p>&copy; 2024 Aura Fest. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default BirthdayEvents;
