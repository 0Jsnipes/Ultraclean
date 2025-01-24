import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../../../styles/CleaningCard.css';

const CleaningSections = () => {
  const [showButtons, setShowButtons] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    // Show buttons 2 seconds after the component loads
    const timer = setTimeout(() => {
      setShowButtons(true);
    }, 2000);

    return () => clearTimeout(timer); // Clean up the timer
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.8 && rect.bottom >= 0) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id='cleaning-card-section' className="cleaning-sections" ref={sectionRef}>
      {/* Deep Cleaning Section */}
      <div className={`cleaning-section ${isVisible ? 'visible' : ''}`}>
        <div className="cleaning-section-content">
          <Link to="/deep-cleaning" className="section-title">
            Deep Cleaning
          </Link>
          <p className="section-summary">
            Our Deep Cleaning service goes beyond the surface to ensure every corner of your space is left sparkling clean.
            We meticulously clean hard-to-reach areas, such as behind appliances, baseboards, and high shelving, while paying
            extra attention to commonly overlooked spots like grout lines, window tracks, and light fixtures. This service is
            perfect for individuals moving into a new home, moving out to leave a space spotless for the next occupant, or
            preparing for special occasions like family gatherings or holiday events. With our comprehensive approach,
            you can trust us to create a fresh, hygienic, and welcoming environment tailored to your needs.
          </p>
          {showButtons && (
            <button className="cleaning-button">
              <Link to="/contact">I Need Deep Cleaning</Link>
            </button>
          )}
        </div>
        <div className="cleaning-section-image">
          <img src="/assets/CleaningCard2.webp" alt="Deep Cleaning" />
        </div>
      </div>

      {/* Routine Cleaning Section */}
      <div className={`cleaning-section ${isVisible ? 'visible' : ''}`}>
        <div className="cleaning-section-content">
          <Link to="/routine-cleaning" className="section-title">
            Routine Cleaning
          </Link>
          <p className="section-summary">
            Our Routine Cleaning service is designed to keep your home or office consistently fresh,
            tidy, and inviting. With regular cleaning schedules tailored to your specific needs, we focus
            on maintaining the cleanliness and organization of high-traffic areas like kitchens, bathrooms,
            living spaces, and workstations. This service ensures that surfaces are dust-free, floors are spotless,
            and your space remains hygienic and welcoming. Whether you prefer weekly, bi-weekly, or monthly
            cleanings, we adapt to your lifestyle to help you enjoy a stress-free, well-maintained environment
            without the hassle of doing it yourself. Let us take care of the mess so you can focus on what matters most.
          </p>
          {showButtons && (
            <button className="cleaning-button">
              <Link to="/contact">I Need Routine Cleaning</Link>
            </button>
          )}
        </div>
        <div className="cleaning-section-image">
          <img src="/assets/CleaningCard6.webp" alt="Routine Cleaning" />
        </div>
      </div>
    </section>
  );
};

export default CleaningSections;
