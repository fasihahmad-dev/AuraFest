// App.js: Main application component
import React from "react";
import { Routes, Route } from "react-router-dom";
import AboutUs from "./components/pages/About";
import ContactUs from "./components/pages/ContactUs";
import Events from "./components/pages/Event";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import MusicDetails from "./components/pages/MusicDetails";
import WeddingBooking from "./components/pages/WeedingBooking";
import WeddingDetails from "./components/pages/WeedingDetails";
import BirthdayBooking from "./components/pages/BirthdayBooking";
import BirthdayDetails from "./components/pages/BirthdayDetails";
import BookingPage from "./components/pages/BookingPages";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/events" element={<Events />} />
        <Route path="/login" element={<Login />} />
        <Route path="/music-details" element={<MusicDetails />} />
        <Route path="/wedding-booking" element={<WeddingBooking />} />
        <Route path="/wedding-details" element={<WeddingDetails />} />
        <Route path="/birthday-booking" element={<BirthdayBooking />} />
        <Route path="/birthday-details" element={<BirthdayDetails />} />
        <Route path="/booking-page" element={<BookingPage />} />
      </Routes>
    </div>
  );
}

export default App;
