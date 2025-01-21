import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaPhone } from 'react-icons/fa'; // Import icons
import '../styles/NavBar.css'

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo">
        <Link to="/">MB Ultra Clean</Link>
      </div>

      {/* Hamburger Menu Icon */}
      <div className="navbar-hamburger" onClick={toggleMenu}>
        {isOpen ? <FaTimes className="hamburger-icon" /> : <FaBars className="hamburger-icon" />}
      </div>

      {/* Navigation Links */}
      <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
               <div className="nav-dropdown">
          <button className="dropdown-button">Services</button>
          <div className="dropdown-content">
            <Link to="/deep-cleaning">Deep Cleaning</Link>
            <Link to="/routine-cleaning">Routine Cleaning</Link>
            <Link to="/move-in-out-cleaning">Move-in/Out Cleaning</Link>
            <Link to="/commercial-cleaning">Commercial Cleaning</Link>
            <Link to="/residential-cleaning">Residential Cleaning</Link>
          </div>
        </div>
        <div className="nav-dropdown">
          <button className="dropdown-button">Cleaning Process</button>
          <div className="dropdown-content">
            <Link to="/bathroom-cleaning">Bathroom Cleaning</Link>
            <Link to="/bedroom-cleaning">Bedroom Cleaning</Link>
            <Link to="/kitchen-cleaning">Kitchen Cleaning</Link>
            <Link to="/livingroom-cleaning">Living Room Cleaning</Link>
          </div>
        </div>
        <Link to="/contact">Contact</Link>
        <Link to="/faq">FAQ</Link>

        {/* Phone Icon and Number */}
        <a href="tel:3366753700" className="navbar-phone">
          <FaPhone className="phone-icon" /> (336) 675-3700
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
