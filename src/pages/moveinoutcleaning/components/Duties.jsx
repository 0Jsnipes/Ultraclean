import React from 'react';
import '../styles/Duties.css';

const Duties = () => {
  return (
    <section className="duties-section">
      <h2>Move In/Out Cleaning Tasks</h2>
      <div className="duties-content">
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
            <li>Dusting light fixtures, fans, and vents</li>
          </ul>
        </div>
        <p className="duties-note">
          Our move-in/out cleaning ensures every nook and cranny is spotless, making your move seamless and helping you secure your deposit.
        </p>
      </div>
    </section>
  );
};

export default Duties;
