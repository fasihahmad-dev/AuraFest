import React, { useState } from 'react';
import '../styles/musicDetails.css';

const events = [
    {
        id: 1,
        image: '/images/music.jpg',
        title: 'Rock Night',
        description: 'Experience the electrifying performance by top rock bands. Join us for an unforgettable night!',
        date: 'March 10, 2024',
        venue: 'Rock City Hall',
        price: 50,
    },
    {
        id: 2,
        image: '/images/music2.jpg',
        title: 'Pop Concert',
        description: 'Join us for a mesmerizing evening with popular pop artists performing live.',
        date: 'April 5, 2024',
        venue: 'Star Dome Arena',
        price: 40,
    },
    {
        id: 3,
        image: '/images/music.jpg',
        title: 'Classical Symphony',
        description: 'Immerse yourself in the enchanting world of classical music by renowned orchestras.',
        date: 'May 15, 2024',
        venue: 'Grand Symphony Hall',
        price: 60,
    },
    {
        id: 4,
        image: '/images/music2.jpg',
        title: 'Jazz Night',
        description: 'Relax and enjoy the smooth tunes of talented jazz artists in a cozy atmosphere.',
        date: 'June 20, 2024',
        venue: 'Downtown Jazz Club',
        price: 45,
    },
    {
        id: 5,
        image: '/images/music.jpg',
        title: 'Electronic Dance Party',
        description: 'Get ready to dance the night away with electrifying beats and top EDM artists!',
        date: 'July 12, 2024',
        venue: 'Electric Avenue',
        price: 70,
    },
];

const MusicEvents = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredEvents, setFilteredEvents] = useState(events);

    const searchEvents = (e) => {
        const query = e.target.value.toLowerCase();
        setSearchQuery(query);
        const filtered = events.filter(
            (event) =>
                event.title.toLowerCase().includes(query) ||
                event.description.toLowerCase().includes(query)
        );
        setFilteredEvents(filtered);
    };

    return (
        <div className="event-management">
            <header>
                <h1>Aura Fest - Music Events</h1>
                <div className="search-container">
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={searchEvents}
                        className="search-bar"
                        placeholder="Search for events..."
                    />
                </div>
            </header>

            <section className="event-details">
                <div className="event-grid">
                    {filteredEvents.length > 0 ? (
                        filteredEvents.map((event) => (
                            <div className="event-card" key={event.id}>
                                <img src={event.image} alt={event.title} />
                                <h3>{event.title}</h3>
                                <p>{event.description}</p>
                                <p>
                                    <strong>Date:</strong> {event.date}
                                </p>
                                <p>
                                    <strong>Venue:</strong> {event.venue}
                                </p>
                                <p className="price">${event.price}</p>
                                <a
                                    href={`/booking-page?event=${encodeURIComponent(event.title)}&date=${encodeURIComponent(event.date)}&venue=${encodeURIComponent(event.venue)}&price=${event.price}`}
                                    className="book-button"
                                >
                                    Book Tickets
                                </a>
                            </div>
                        ))
                    ) : (
                        <div className="no-events">No events found matching your search.</div>
                    )}
                </div>
            </section>
            <footer>
                <p>&copy; 2024 AURA FEST. All Rights Reserved.</p>
            </footer>
        </div>
    );
};

export default MusicEvents;
