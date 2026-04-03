import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import '../../../styles/CleaningCard.css';

const CleaningSections = () => {
  const [showButtons, setShowButtons] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButtons(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) {
        return;
      }

      const rect = sectionRef.current.getBoundingClientRect();
      if (rect.top <= window.innerHeight * 0.8 && rect.bottom >= 0) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="cleaning-sections" id="cleaning-card-section" ref={sectionRef}>
      <div className={`cleaning-section ${isVisible ? 'visible' : ''}`}>
        <div className="cleaning-section-content">
          <Link className="section-title" to="/deep-cleaning">
            Deep Cleaning
          </Link>
          <p className="section-summary">
            Our Deep Cleaning service goes beyond the surface to ensure every corner of your
            space is left sparkling clean. We meticulously clean hard-to-reach areas, such as
            behind appliances, baseboards, and high shelving, while paying extra attention to
            commonly overlooked spots like grout lines, window tracks, and light fixtures.
            This service is perfect for individuals moving into a new home, moving out to
            leave a space spotless for the next occupant, or preparing for special occasions
            like family gatherings or holiday events. With our comprehensive approach, you can
            trust us to create a fresh, hygienic, and welcoming environment tailored to your
            needs.
          </p>
          {showButtons && (
            <button className="cleaning-button" type="button">
              <Link to="/contact">I Need Deep Cleaning</Link>
            </button>
          )}
        </div>
        <div className="cleaning-section-image">
          <img alt="Deep Cleaning" src="/assets/CleaningCard2.webp" />
        </div>
      </div>

      <div className={`cleaning-section ${isVisible ? 'visible' : ''}`}>
        <div className="cleaning-section-content">
          <Link className="section-title" to="/routine-cleaning">
            Routine Cleaning
          </Link>
          <p className="section-summary">
            Our Routine Cleaning service is designed to keep your home or office consistently
            fresh, tidy, and inviting. With regular cleaning schedules tailored to your
            specific needs, we focus on maintaining the cleanliness and organization of
            high-traffic areas like kitchens, bathrooms, living spaces, and workstations.
            This service ensures that surfaces are dust-free, floors are spotless, and your
            space remains hygienic and welcoming. Whether you prefer weekly, bi-weekly, or
            monthly cleanings, we adapt to your lifestyle to help you enjoy a stress-free,
            well-maintained environment without the hassle of doing it yourself.
          </p>
          {showButtons && (
            <button className="cleaning-button" type="button">
              <Link to="/contact">I Need Routine Cleaning</Link>
            </button>
          )}
        </div>
        <div className="cleaning-section-image">
          <img alt="Routine Cleaning" src="/assets/CleaningCard6.webp" />
        </div>
      </div>
    </section>
  );
};

export default CleaningSections;
