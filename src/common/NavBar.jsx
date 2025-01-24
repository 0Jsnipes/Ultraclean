import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaPhone } from 'react-icons/fa'; 
import '../styles/NavBar.css'

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo">
        <Link to="/" onClick={closeMenu}>MB Ultra Clean</Link>
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
            <Link to="/deep-cleaning" onClick={closeMenu}>Deep Cleaning</Link>
            <Link to="/routine-cleaning" onClick={closeMenu}>Routine Cleaning</Link>
            <Link to="/move-in-out-cleaning" onClick={closeMenu}>Move-in/Out Cleaning</Link>
            <Link to="/commercial-cleaning" onClick={closeMenu}>Commercial Cleaning</Link>
            <Link to="/residential-cleaning" onClick={closeMenu}>Residential Cleaning</Link>
          </div>
        </div>
        <div className="nav-dropdown">
          <button className="dropdown-button">Cleaning Process</button>
          <div className="dropdown-content">
            <Link to="/bathroom-cleaning" onClick={closeMenu}>Bathroom Cleaning</Link>
            <Link to="/bedroom-cleaning" onClick={closeMenu}>Bedroom Cleaning</Link>
            <Link to="/kitchen-cleaning" onClick={closeMenu}>Kitchen Cleaning</Link>
            <Link to="/livingroom-cleaning" onClick={closeMenu}>Living Room Cleaning</Link>
          </div>
        </div>
        <Link to="/contact" onClick={closeMenu}>Contact</Link>
        {/*<Link to="/faq">FAQ</Link>*/}

        {/* Phone Icon and Number */}
        <a href="tel:3366753700" className="navbar-phone" onClick={closeMenu}>
          <FaPhone className="phone-icon" /> (336) 675-3700
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
