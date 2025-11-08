import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '../styles/homepage.css';

const Home = () => {
  return (
    <div className="homepage">
      <Navbar />
      
      <div className="hero">
        <h1>Your Health, Our Priority</h1>
        <p>SmartHealth+ connects you with healthcare professionals and support services to ensure you receive the best care possible, anytime, anywhere.</p>
      </div>

      <div className="options-container">
        <div className="option-card">
          <div className="option-icon"><i className="fas fa-user-md"></i></div>
          <h2>Find the Right Doctor</h2>
          <p>Connect with certified healthcare professionals specialized in your needs. Book appointments, get consultations, and receive personalized care.</p>
          <Link to="/doctors" className="option-btn">Find a Doctor</Link>
        </div>
        
        <div className="option-card">
          <div className="option-icon"><i className="fas fa-hands-helping"></i></div>
          <h2>Get Support</h2>
          <p>Access our 24/7 support system for any questions or concerns about your health journey. We're here to help you every step of the way.</p>
          <Link to="/support" className="option-btn">Get Support</Link>
        </div>
      </div>

      <div className="features">
        <h2>Why Choose SmartHealth+</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon"><i className="fas fa-clock"></i></div>
            <h3>24/7 Availability</h3>
            <p>Access healthcare services anytime, anywhere with our round-the-clock platform.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon"><i className="fas fa-shield-alt"></i></div>
            <h3>Secure & Private</h3>
            <p>Your health data is protected with enterprise-grade security and privacy measures.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon"><i className="fas fa-stethoscope"></i></div>
            <h3>Expert Doctors</h3>
            <p>Connect with board-certified physicians and specialists across all medical fields.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon"><i className="fas fa-mobile-alt"></i></div>
            <h3>Easy to Use</h3>
            <p>Our intuitive platform makes managing your healthcare simple and straightforward.</p>
          </div>
        </div>
      </div>

      <footer>© 2025 SmartHealth+. All rights reserved.</footer>
    </div>
  );
};

export default Home;