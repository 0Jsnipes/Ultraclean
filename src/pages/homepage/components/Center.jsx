import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../../styles/Center.css';

const Center = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardFlip = (flipping) => {
    setIsFlipped(flipping);
  };

  return (
    <section className="center-section">
      <h2 className="center-heading">{isFlipped ? 'Cleaning Tips!' : 'We Clean So You Can...'}</h2>
      <div className="card-container">
        <Link
          className="card"
          onMouseEnter={() => handleCardFlip(true)}
          onMouseLeave={() => handleCardFlip(false)}
          to="/contact"
        >
          <div className="card-content">
            <div className="card-front">
              <img alt="Live" className="card-image" src="/assets/live.webp" />
              <h3 className="card-text"></h3>
            </div>
            <div className="card-back">
              <img alt="Live" className="card-back-image" src="/assets/live.webp" />
              <div className="card-tip-container">
                <p className="card-tip">
                  &ldquo;Routine Cleanings are recommended every 2 weeks to keep your house
                  efficiently cleaned!&rdquo;
                </p>
              </div>
            </div>
          </div>
        </Link>

        <Link
          className="card"
          onMouseEnter={() => handleCardFlip(true)}
          onMouseLeave={() => handleCardFlip(false)}
          to="/contact"
        >
          <div className="card-content">
            <div className="card-front">
              <img alt="Relax" className="card-image" src="/assets/relax.webp" />
              <h3 className="card-text"></h3>
            </div>
            <div className="card-back">
              <img alt="Relax" className="card-back-image" src="/assets/relax.webp" />
              <div className="card-tip-container">
                <p className="card-tip">
                  &ldquo;Decluttering your home can make routine cleaning faster and more
                  efficient!&rdquo;
                </p>
              </div>
            </div>
          </div>
        </Link>

        <Link
          className="card"
          onMouseEnter={() => handleCardFlip(true)}
          onMouseLeave={() => handleCardFlip(false)}
          to="/contact"
        >
          <div className="card-content">
            <div className="card-front">
              <img alt="Enjoy" className="card-image" src="/assets/enjoy.webp" />
              <h3 className="card-text"></h3>
            </div>
            <div className="card-back">
              <img alt="Enjoy" className="card-back-image" src="/assets/enjoy.webp" />
              <div className="card-tip-container">
                <p className="card-tip">
                  &ldquo;Using the right cleaning products for specific surfaces can prolong
                  their lifespan!&rdquo;
                </p>
              </div>
            </div>
          </div>
        </Link>
      </div>
      <div className="button-center">
        <Link to="/contact">Book Now</Link>
      </div>
    </section>
  );
};

export default Center;
