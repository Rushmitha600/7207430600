import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          SmartHealth+
        </Link>
        
        <div className="nav-menu">
          <Link 
            to="/" 
            className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
          >
            Home
          </Link>
          <Link 
            to="/services" 
            className={`nav-link ${location.pathname === '/services' ? 'active' : ''}`}
          >
            Services
          </Link>
          <Link 
            to="/doctors" 
            className={`nav-link ${location.pathname === '/doctors' ? 'active' : ''}`}
          >
            Doctors
          </Link>
          <Link 
            to="/support" 
            className={`nav-link ${location.pathname === '/support' ? 'active' : ''}`}
          >
            Support
          </Link>
        </div>

        <div className="nav-actions">
          <Link to="/login" className="nav-btn login-btn">
            Log In
          </Link>
          <Link to="/signup" className="nav-btn signup-btn">
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;