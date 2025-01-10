import React, { useEffect, useState } from 'react';
import '../styles/weddingbooking.css';

const WeddingBooking = () => {
    const [eventData, setEventData] = useState(null);
    const [userName, setUserName] = useState('');
    const [eventDate, setEventDate] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const data = localStorage.getItem('eventData');
        if (data) {
            setEventData(JSON.parse(data));
        } else {
            alert("No event data found! Please go back and select an event.");
            window.location.href = "/";
        }
        setLoading(false);
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();

        if (userName && eventDate && paymentMethod) {
            alert(
                `Thank you, ${userName}! Your booking for "${eventData.title}" on ${eventDate} is confirmed.`
            );
            localStorage.removeItem('eventData');
            window.location.href = "/";
        } else {
            alert("Please fill in all the required fields.");
        }
    };

    if (loading) {
        return <div className="wedding-loading">Loading...</div>;
    }

    if (!eventData) {
        return null; // Return nothing if no event data exists
    }

    return (
        <div className="wedding-booking-page">
            <header className="wedding-header">
                <h1>Wedding Booking</h1>
            </header>

            <main className="wedding-content">
                <section className="wedding-event-details">
                    <h2>Event Details</h2>
                </section>

                <section className="wedding-booking-form">
                    <h3>Booking Form</h3>
                    <form id="wedding-bookingForm" onSubmit={handleSubmit}>
                        <div className="wedding-form-group">
                            <label htmlFor="userName">Your Name:</label>
                            <input
                                id="userName"
                                type="text"
                                placeholder="Enter your name"
                                value={userName}
                                onChange={(e) => setUserName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="wedding-form-group">
                            <label htmlFor="eventDate">Event Date:</label>
                            <input
                                id="eventDate"
                                type="date"
                                value={eventDate}
                                onChange={(e) => setEventDate(e.target.value)}
                                required
                            />
                        </div>
                        <div className="wedding-form-group">
                            <label htmlFor="paymentMethod">Payment Method:</label>
                            <select
                                id="paymentMethod"
                                value={paymentMethod}
                                onChange={(e) => setPaymentMethod(e.target.value)}
                                required
                            >
                                <option value="">Select Payment Method</option>
                                <option value="Credit Card">Credit Card</option>
                                <option value="Debit Card">Debit Card</option>
                                <option value="PayPal">PayPal</option>
                            </select>
                        </div>
                        <button type="submit" className="wedding-submit-button">
                            Book
                        </button>
                    </form>
                </section>
            </main>

            <footer className="wedding-footer">
                <p>&copy; 2024 Aura Fest. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default WeddingBooking;
