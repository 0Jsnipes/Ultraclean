import React from 'react';
import '../styles/Footer.css';
import { Link } from 'react-router-dom';
import { FaFacebook } from 'react-icons/fa'; // Import Facebook icon

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Contact Us Section */}
        <div className="footer-section">
          <h4>Contact Us</h4>
          <h5>
            <a href="tel:3366753700" className='tel'>
              Phone: (336) 675-3700
            </a>
          </h5>
          <h5>Email: <a href="mailto:mbultraclean@gmail.com" className="footer-link">mbultraclean@gmail.com</a></h5>
        </div>

        {/* Social Media Section */}
        <div className="footer-section">
          <h4>Follow Us</h4>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer-facebook">
            <FaFacebook /> Facebook
          </a>
        </div>

        {/* Our Services Section */}
        <div className="footer-section">
          <h4>Our Services</h4>
          <ul>
            <li><Link to="/commercial-cleaning" className="footer-link">Commercial Cleaning</Link></li>
            <li><Link to="/residential-cleaning" className="footer-link">Residential Cleaning</Link></li>
            <li><Link to="/deep-cleaning" className="footer-link">Deep Cleaning</Link></li>
            <li><Link to="/routine-cleaning" className="footer-link">Routine Cleaning</Link></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <h5>© 2025 MB Ultra Clean. All Rights Reserved.</h5>
      </div>
    </footer>
  );
};

export default Footer;
