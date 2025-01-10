import React, { useEffect, useState } from 'react';
import '../styles/booking_page.css'; 

const BookingPage = () => {
    const [eventDetails, setEventDetails] = useState({
        event: '',
        date: '',
        venue: '',
        price: 0,
    });
    const [userName, setUserName] = useState('');
    const [ticketQuantity, setTicketQuantity] = useState(1);
    const [paymentMethod, setPaymentMethod] = useState('');
    const [showModal, setShowModal] = useState(false);


    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        setEventDetails({
            event: urlParams.get('event'),
            date: urlParams.get('date'),
            venue: urlParams.get('venue'),
            price: parseFloat(urlParams.get('price')),
        });
    }, []);

    const totalPrice = eventDetails.price * ticketQuantity;

    const handleConfirmBooking = () => {
        alert("Congratulations! Your tickets have been booked.");
        setShowModal(false); 
    };

    return (
        <div>
            <header>
                <h1>Booking Details</h1>
            </header>

            <section className="booking-details">
                <h2>Confirm Your Booking</h2>
                <p><strong>Event:</strong> <span>{eventDetails.event}</span></p>
                <p><strong>Date:</strong> <span>{eventDetails.date}</span></p>
                <p><strong>Venue:</strong> <span>{eventDetails.venue}</span></p>
                <p className="price">Price: $<span>{eventDetails.price.toFixed(2)}</span></p>

                {/* User Details Form */}
                <div className="form-group">
                    <label htmlFor="user-name">Your Name</label>
                    <input 
                        type="text" 
                        id="user-name" 
                        placeholder="Enter your name" 
                        required 
                        value={userName} 
                        onChange={(e) => setUserName(e.target.value)} 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="ticket-quantity">Ticket Quantity</label>
                    <input 
                        type="number" 
                        id="ticket-quantity" 
                        placeholder="Enter number of tickets" 
                        min="1" 
                        required 
                        value={ticketQuantity} 
                        onChange={(e) => setTicketQuantity(parseInt(e.target.value))} 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="payment-method">Payment Method</label>
                    <select 
                        id="payment-method" 
                        required 
                        value={paymentMethod} 
                        onChange={(e) => setPaymentMethod(e.target.value)} 
                    >
                        <option value="">Select a payment method</option>
                        <option value="credit-card">Credit Card</option>
                        <option value="paypal">PayPal</option>
                        <option value="bank-transfer">Bank Transfer</option>
                    </select>
                </div>

                <button className="confirm-button" onClick={() => setShowModal(true)}>Confirm Booking</button>
            </section>

            {/* Confirmation Modal */}
            {showModal && (
                <div className="modal" style={{ display: 'flex' }}>
                    <div className="modal-content">
                        <h3>Confirm Your Booking</h3>
                        <p><strong>Event:</strong> <span>{eventDetails.event}</span></p>
                        <p><strong>Date:</strong> <span>{eventDetails.date}</span></p>
                        <p><strong>Venue:</strong> <span>{eventDetails.venue}</span></p>
                        <p><strong>Price:</strong> $<span>{eventDetails.price.toFixed(2)}</span></p>
                        <p><strong>Tickets:</strong> <span>{ticketQuantity}</span></p>
                        <p><strong>Total Price:</strong> $<span>{totalPrice.toFixed(2)}</span></p>
                        <p><strong>Payment Method:</strong> <span>{paymentMethod}</span></p>

                        <div className="modal-buttons">
                            <button className="modal-button cancel" onClick={() => setShowModal(false)}>Cancel</button>
                            <button className="modal-button" onClick={handleConfirmBooking}>Confirm</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default BookingPage;
