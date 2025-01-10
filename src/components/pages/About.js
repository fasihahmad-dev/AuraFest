import React from 'react';
import '../styles/aboutUs.css';

const AboutUs = () => {
    return (
        <div className="scrollable-container">
            {/* Header Section */}
            <header className="header">
                <h1>Aura Fest</h1>
                <p>Your Ultimate Event Experience</p>
            </header>

            {/* About Us Section */}
            <section className="about-section">
                <h2>About Us</h2>
                <p>
                    Welcome to Aura Fest, where we specialize in creating unique and unforgettable events. Whether it's a milestone birthday, a dream wedding, or an electrifying music event, Aura Fest ensures every occasion is nothing short of spectacular.
                </p>
                <img src="/images/main_img.jpg" alt="Aura Fest Event" className="about-image" />
            </section>

            {/* Mission Section */}
            <section className="mission">
                <div className="mission-item">
                    <h3>Our Mission</h3>
                    <p>
                        At Aura Fest, we are committed to delivering high-quality services that reflect the uniqueness of every client. We take pride in our ability to turn your ideas into reality and create events that will leave a lasting impression.
                    </p>
                </div>
                <div className="mission-item">
                    <h3>Our Vision</h3>
                    <p>
                        We envision a world where every event is a reflection of joy, unity, and creativity. Our goal is to bring people together through extraordinary events that captivate and inspire.
                    </p>
                </div>
            </section>

            {/* Services Section */}
            <section className="services">
                <h3>What We Offer</h3>
                <ul className="services-list">
                    <li>🎉 Birthday Events - Tailored celebrations for every age and taste</li>
                    <li>💍 Weddings - Dream weddings, from intimate ceremonies to grand celebrations</li>
                    <li>🎶 Music Events - Live performances and concerts that leave you electrified</li>
                </ul>
            </section>

            {/* Footer Section */}
            <footer className="footer">
                <p>&copy; 2024 Aura Fest. All rights reserved.</p>
                <p>
                    <a href="mailto:info@aurafest.com" className="contact-link">Contact Us</a>
                </p>
            </footer>
        </div>
    );
};

export default AboutUs;
