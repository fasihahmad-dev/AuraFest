import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Optional if using React Router
import "../styles/login.css"; // Adjust the path to your CSS file

const LoginSignup = () => {
  const [isSignup, setIsSignup] = useState(true); // Toggle between Sign Up and Sign In
  const navigate = useNavigate(); // For navigation (requires React Router)

  // Handle Sign Up form submission
  const handleSignUp = (event) => {
    event.preventDefault();
    alert("Registration successful!");
    navigate("/events"); // Redirect to events page
  };

  // Handle Login form submission
  const handleLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    if (email === "" || password === "") {
      alert("Please fill in all fields.");
      return;
    }

    alert("Login successful!");
    navigate("/events"); // Redirect to events page
  };

  // Toggle between forms
  const toggleForms = () => {
    setIsSignup(!isSignup);
  };

  return (
    <div className="center-wrapper">
      <div className="container">
        {/* Left Side - Aura Fest Text */}
        <div className="left-side">Aura Fest</div>
  
        {/* Right Side - Forms */}
        <div className="right-side">
          {isSignup ? (
            <div id="signup-form">
              <div className="form-title">Sign Up</div>
              <form onSubmit={handleSignUp}>
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input type="text" id="username" name="username" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input type="password" id="password" name="password" required />
                </div>
                <div className="form-group">
                  <button type="submit">Sign Up</button>
                </div>
              </form>
              <div className="toggle-link">
                <p>
                  Already have an account?{" "}
                  <button
                    type="button"
                    className="link-button"
                    onClick={toggleForms}
                  >
                    Sign In
                  </button>
                </p>
              </div>
            </div>
          ) : (
            <div id="login-form">
              <div className="form-title">Sign In</div>
              <form onSubmit={handleLogin}>
                <div className="form-group">
                  <label htmlFor="login-email">Email</label>
                  <input type="email" id="login-email" name="email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="login-password">Password</label>
                  <input
                    type="password"
                    id="login-password"
                    name="password"
                    required
                  />
                </div>
                <div className="form-group">
                  <button type="submit">Sign In</button>
                </div>
              </form>
              <div className="toggle-link">
                <p>
                  Don't have an account?{" "}
                  <button
                    type="button"
                    className="link-button"
                    onClick={toggleForms}
                  >
                    Sign Up
                  </button>
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
  
};

export default LoginSignup;
