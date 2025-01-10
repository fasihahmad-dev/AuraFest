import React, { useState } from 'react';
import '../styles/weddingDetail.css';

const WeddingEvents = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [events] = useState([
        {
            title: "Elegant Wedding",
            venue: "Crystal Ballroom",
            description: "Celebrate your big day in style with our elegant wedding package. Includes venue, catering, and decorations.",
            foodOptions: "Buffet, 3-Course Meal",
            price: "$5000",
            guests: "100-150",
            image: "/images/elegantwedding.avif"
        },
        {
            title: "Garden Wedding",
            venue: "Rose Garden",
            description: "Enjoy a serene outdoor wedding with stunning floral decorations and delicious outdoor catering.",
            foodOptions: "Finger Foods, Barbecue",
            price: "$4500",
            guests: "200-250",
            image: "/images/gardenwedding.jpg"
        },
        {
            title: "Luxury Wedding",
            venue: "Royal Palace",
            description: "Experience a luxurious wedding with exquisite venues, gourmet meals, and top-notch service.",
            foodOptions: "Fine Dining, Champagne",
            price: "$8000",
            guests: "300-350",
            image: "/images/luxurywedding.jpg"
        },
        {
            title: "Beach Wedding",
            venue: "Ocean Breeze Beach",
            description: "Say 'I Do' by the ocean with our beach wedding package, offering a beautiful sunset view and seafood catering.",
            foodOptions: "Seafood, Cocktail Hour",
            price: "$5500",
            guests: "150-200",
            image: "/images/beachwedding.jpg"
        },
    ]);

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value.toLowerCase());
    };

    const redirectToBookingPage = (eventData) => {
        localStorage.setItem('eventData', JSON.stringify(eventData));
        window.location.href = '/wedding-booking'; 
    };

    return (
        <div className="wedding-details-page">
            <header className="wedding-details-header">
                <h1>Aura Fest - Wedding Events</h1>
            </header>

            <div className="wedding-details-search-container">
                <input
                    type="text"
                    id="wedding-details-searchInput"
                    placeholder="Search for wedding events..."
                    onChange={handleSearchChange}
                />
            </div>

            <section className="wedding-details-hero-section">
                <h1>Make Your Dream Wedding Come True</h1>
                <p>Choose from our exquisite venues and services to create the perfect day.</p>
            </section>

            <section className="wedding-details-event-list">
                {events
                    .filter(event => 
                        event.title.toLowerCase().includes(searchQuery) || 
                        event.description.toLowerCase().includes(searchQuery)
                    )
                    .map((event, index) => (
                        <div className="wedding-details-event-card" key={index}>
                            <img src={event.image} alt={event.title} />
                            <h3>{event.title}</h3>
                            <p>{event.description}</p>
                            <p><strong>Venue:</strong> {event.venue}</p>
                            <p><strong>Food Options:</strong> {event.foodOptions}</p>
                            <p><strong>Price:</strong> {event.price}</p>
                            <p><strong>Guests:</strong> {event.guests}</p>
                            <button
                                onClick={() => redirectToBookingPage(event)}
                                className="wedding-details-btn wedding-details-btn-primary"
                            >
                                Book
                            </button>
                        </div>
                    ))}
                {events.every(event => 
                    !event.title.toLowerCase().includes(searchQuery) && 
                    !event.description.toLowerCase().includes(searchQuery)
                ) && (
                    <div id="wedding-details-noEventMessage" className="wedding-details-no-events">
                        No events found matching your search.
                    </div>
                )}
            </section>
        </div>
    );
};

export default WeddingEvents;
