import '../styles/DutiesStyles.css';
import { useEffect, useState } from 'react';

const Duties = () => {
  const [showOverlay, setShowOverlay] = useState(false);


  return (
    <section className="duties-section">
      <h2>What do we do?</h2>
      <div className="duties-content">
        <img
          src="/assets/routine-cleaning-duties.webp"
          alt="Routine Cleaning Duties"
          className="duties-image"
        />
        <div className="duties-list-container">
          <ul className="duties-list">
            <li>Dusting surfaces and furniture</li>
            <li>Vacuuming carpets and rugs</li>
            <li>Mopping hard floors</li>
            <li>Sanitizing kitchen countertops</li>
            <li>Cleaning and disinfecting bathrooms</li>
            <li>Emptying trash bins</li>
            <li>Wiping mirrors and glass surfaces</li>
            <li>Cleaning light switches and handles</li>
            <li>General tidying and organizing</li>
          </ul>
        </div>
        <button
          className="show-list-button"
          onClick={() => setShowOverlay(!showOverlay)}
        >
          {showOverlay ? 'Close List' : 'See Full List'}
        </button>
      </div>
      {showOverlay && (
        <div className="duties-overlay active">
          <button
            className="close-overlay-button"
            onClick={() => setShowOverlay(false)}
          >
            Close
          </button>
          <ul className="duties-list">
            <li>Dusting surfaces and furniture</li>
            <li>Vacuuming carpets and rugs</li>
            <li>Mopping hard floors</li>
            <li>Sanitizing kitchen countertops</li>
            <li>Cleaning and disinfecting bathrooms</li>
            <li>Emptying trash bins</li>
            <li>Wiping mirrors and glass surfaces</li>
            <li>Cleaning light switches and handles</li>
            <li>General tidying and organizing</li>
          </ul>
        </div>
      )}
    </section>
  );
};

export default Duties;
