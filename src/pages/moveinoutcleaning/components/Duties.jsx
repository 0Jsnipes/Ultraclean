import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/movDuties.css';

const Duties = () => {
  const [showOverlay, setShowOverlay] = useState(true);

 
  return (
    <section className="duties-section">
      <h2>Move In/Out Cleaning</h2>
      <div className="duties-content">
        {/* Photo goes here */}
        <div className="photo-container" style={{ position: 'relative' }}>
        <img src="/assets/moving-duties.jpg" alt="Cleaning Tasks" className="duties-photo" />
        {showOverlay && (
          <div className="overlay">
            <div className="duties-list-container">
              <ul className="duties-list">
            <li>Thorough cleaning of baseboards, corners, and hard-to-reach areas</li>
            <li>Detailed scrubbing of grout lines and tiles</li>
            <li>Cleaning inside cabinets, drawers, and closets</li>
            <li>Sanitizing kitchen appliances and countertops</li>
            <li>Deep cleaning of bathrooms, including tubs, showers, and toilets</li>
            <li>Vacuuming carpets and mopping hard floors</li>
            <li>Washing windows and cleaning window tracks</li>
            <li>Removing marks and stains from walls and doors</li>
              </ul>
            </div>
          </div>
        )}
        </div>
      </div>
          <Link to="/contact">
        <button className="duties-note">
         Our move-in/out cleaning ensures every nook and cranny is spotless, making your move seamless and helping you secure your deposit.
        </button>
          </Link>
    </section>
  );
};

export default Duties;
