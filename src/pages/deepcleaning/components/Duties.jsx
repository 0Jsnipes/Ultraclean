import '../styles/deepDutiesStyles.css';
import { useEffect, useState } from 'react';

const Duties = () => {
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const listItems = document.querySelectorAll('.duties-list li');
            listItems.forEach((li, index) => {
              li.style.setProperty('--li-index', index); // Assign index for animation delay
              li.classList.add('visible'); // Trigger animation
            });
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    const dutiesSection = document.querySelector('.duties-section');
    if (dutiesSection) {
      observer.observe(dutiesSection);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <section className="duties-section">
        <h2>What do we do?</h2>
        <div className="duties-content">
          <img
            src="/assets/deep-cleaning-duties2.webp"
            alt="Deep Cleaning Duties"
            className="duties-image"
          />
          <div className="duties-list-container">
            <ul className="duties-list">
              <li>Thorough cleaning of baseboards, corners, and hard-to-reach areas</li>
              <li>Scrubbing grout lines and detailed tile cleaning</li>
              <li>Cleaning behind and under appliances</li>
              <li>Dusting and wiping down high shelves and fixtures</li>
              <li>Sanitizing light switches, doorknobs, and handles</li>
              <li>Vacuuming and mopping all floors, including under furniture</li>
              <li>Washing windows and cleaning window tracks</li>
              <li>Deep cleaning of bathrooms, including grout and shower doors</li>
              <li>Removing buildup from kitchen cabinets and countertops</li>
              <li>Polishing stainless steel appliances and fixtures</li>
            </ul>
          </div>
          <button
            className="show-list-button"
            onClick={() => setShowOverlay(!showOverlay)}
          >
            {showOverlay ? 'Close List' : 'See Full List'}
          </button>
        </div>

        {/* Overlay for Small Screens */}
        <div className={`duties-overlay ${showOverlay ? 'active' : ''}`}>
          <button
            className="close-overlay-button"
            onClick={() => setShowOverlay(false)}
          >
            Close
          </button>
          <ul className="duties-list">
            <li>Thorough cleaning of baseboards, corners, and hard-to-reach areas</li>
            <li>Scrubbing grout lines and detailed tile cleaning</li>
            <li>Cleaning behind and under appliances</li>
            <li>Dusting and wiping down high shelves and fixtures</li>
            <li>Sanitizing light switches, doorknobs, and handles</li>
            <li>Vacuuming and mopping all floors, including under furniture</li>
            <li>Washing windows and cleaning window tracks</li>
            <li>Deep cleaning of bathrooms, including grout and shower doors</li>
            <li>Removing buildup from kitchen cabinets and countertops</li>
            <li>Polishing stainless steel appliances and fixtures</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Duties;
