import React, { useState } from "react";
import "../styles/events.css"; 

const EventManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const events = [
    {
      name: "Music Events",
      image: "/images/music.jpg",
      description: "Enjoy live music performances and unforgettable nights!",
      link: "/music-details",
    },
    {
      name: "Wedding Events",
      image: "/images/wedding.jpg",
      description: "Plan your dream wedding with our exclusive services.",
      link: "/wedding-details",
    },
    {
      name: "Birthday Events",
      image: "/images/birthday.jpg",
      description: "Celebrate birthdays with amazing themes and activities.",
      link: "/birthday-details",
    },
  ];

  const filteredEvents = events.filter((event) =>
    event.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="event-management">
      <header>
        <h1>Welcome to AURA FEST EVENTS</h1>
      </header>

      <nav>
        <a href="/">Home</a>
        <a href="/about-us">About Us</a>
        <a href="/events">Events</a>
        <a href="/contact-us">Contact Us</a>
      </nav>

      <section className="hero-section">
        <h1>Your One-Stop Platform for All Events</h1>
        <p>Explore upcoming events and manage your bookings easily.</p>
      </section>

      <div className="container my-4">
        <input
          type="text"
          className="form-control"
          placeholder="Search for events..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <section className="event-list">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event, index) => (
            <div className="event-card" key={index}>
              <img src={event.image} alt={event.name} />
              <h3>{event.name}</h3>
              <p>{event.description}</p>
              <a href={event.link} className="btn btn-primary text-decoration-none">
                View Details
              </a>
            </div>
          ))
        ) : (
          <div id="noEventMessage">
            <p>No events found matching your search.</p>
          </div>
        )}
      </section>

      <footer>
        <p>&copy; 2024 AURA FEST. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default EventManagement;
