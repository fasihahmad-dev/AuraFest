import React from 'react';
import '../styles/contactUs.css'; // Update the path based on your project structure

const ContactUs = () => {
    return (
        <div className="scrollable-container">
            {/* Header Section */}
            <header>
                <h1>Aura Fest</h1>
                <p>Your Event Planning Partner</p>
            </header>

            {/* Contact Container Section */}
            <section className="contact-container">
                <div className="contact-info">
                    <h2>Get in Touch</h2>
                    <p>
                        Have any questions or want to book your next event? We're here to help! Reach out to us through the contact form or use our contact information below.
                    </p>
                    <h3>Contact Information</h3>
                    <p><strong>Email:</strong> <a href="mailto:info@aurafest.com">info@aurafest.com</a></p>
                    <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                    <p><strong>Address:</strong> 123 Event Street, Fest City, FC 6789</p>
                </div>

                <div className="contact-form">
                    <h2>Contact Form</h2>
                    <form action="submit_contact_form.php" method="POST">
                        <input type="text" name="name" placeholder="Your Name" required />
                        <input type="email" name="email" placeholder="Your Email" required />
                        <textarea name="message" rows="6" placeholder="Your Message" required></textarea>
                        <button type="submit">Send Message</button>
                    </form>
                </div>
            </section>

            {/* Footer Section */}
            <footer>
                <p>&copy; 2024 Aura Fest. All rights reserved.</p>
                <p><a href="mailto:info@aurafest.com">Contact Us</a></p>
            </footer>
        </div>
    );
};

export default ContactUs;
