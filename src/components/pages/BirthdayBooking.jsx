import React, { useEffect, useState } from "react";
import "../styles/birthdayBooking.css";

const BirthdayBooking = () => {
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [formData, setFormData] = useState({
        name: "",
        date: "",
        paymentMethod: "",
    });

    useEffect(() => {
        const event = JSON.parse(localStorage.getItem("selectedEvent"));
        if (event) {
            setSelectedEvent(event);
        }
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.name && formData.date && formData.paymentMethod) {
            alert(`Thank you, ${formData.name}! Your booking for "${selectedEvent.name}" on ${formData.date} has been successfully confirmed.`);
            localStorage.removeItem("selectedEvent"); 
            window.location.href = "/";
        } else {
            alert("Please fill out all required fields.");
        }
    };

    if (!selectedEvent) {
        return <div>Loading event details...</div>;
    }

    return (
        <div id="mainContent">
            <div className="birthdayBooking-form-container">
                <h2 className="text-center">Book Your Event</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="eventName" className="form-label">
                            Event Name
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="eventName"
                            value={selectedEvent.name}
                            disabled
                        />
                    </div>

                    <h3 className="birthdayBooking-your-details mt-4">Your Details</h3>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">
                            Your Name 
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="date" className="form-label">
                            Event Date
                        </label>
                        <input
                            type="date"
                            className="form-control"
                            name="date"
                            value={formData.date}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="paymentMethod" className="form-label">
                            Payment Method
                        </label>
                        <select
                            className="form-select"
                            name="paymentMethod"
                            value={formData.paymentMethod}
                            onChange={handleInputChange}
                            required
                        >
                            <option value="">Select Payment Method</option>
                            <option value="Credit Card">Credit Card</option>
                            <option value="PayPal">PayPal</option>
                            <option value="Bank Transfer">Bank Transfer</option>
                        </select>
                    </div>

                    <button type="submit" className="btn btn-primary w-100">
                        Book Event
                    </button>
                </form>
            </div>
        </div>
    );
};

export default BirthdayBooking;
