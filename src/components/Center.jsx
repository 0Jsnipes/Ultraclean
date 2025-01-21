import React, { useState } from 'react';
import '../styles/Center.css';
import { Link } from 'react-router-dom';

const Center = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardFlip = (flipping) => {
    setIsFlipped(flipping);
  };

  return (
    <section className="center-section">
      <h2 className="center-heading">{isFlipped ? "Cleaning Tips!" : "We Clean So You Can..."}</h2>
      <div className="card-container">
        <Link
          to="/contact"
          className="card"
          onMouseEnter={() => handleCardFlip(true)}
          onMouseLeave={() => handleCardFlip(false)}
        >
          <div className="card-content">
            <div className="card-front">
              <img
                src="../../public/assets/live.webp"
                alt="Live"
                className="card-image"
              />
              <h3 className="card-text"></h3>
            </div>
            <div className="card-back">
              <img
                src="../../public/assets/live.webp"
                alt="Live"
                className="card-back-image"
              />
              <div className="card-tip-container">
                <p className="card-tip">
                  "Routine Cleanings are recommended every 2 weeks to keep your house efficiently cleaned!"
                </p>
              </div>
            </div>
          </div>
        </Link>
        <Link
          to="/contact"
          className="card"
          onMouseEnter={() => handleCardFlip(true)}
          onMouseLeave={() => handleCardFlip(false)}
        >
          <div className="card-content">
            <div className="card-front">
              <img
                src="../../public/assets/relax.webp"
                alt="Relax"
                className="card-image"
              />
              <h3 className="card-text"></h3>
            </div>
            <div className="card-back">
              <img
                src="../../public/assets/relax.webp"
                alt="Relax"
                className="card-back-image"
              />
              <div className="card-tip-container">
                <p className="card-tip">
                  "Decluttering your home can make routine cleaning faster and more efficient!"
                </p>
              </div>
            </div>
          </div>
        </Link>
        <Link
          to="/contact"
          className="card"
          onMouseEnter={() => handleCardFlip(true)}
          onMouseLeave={() => handleCardFlip(false)}
        >
          <div className="card-content">
            <div className="card-front">
              <img
                src="../../public/assets/enjoy.webp"
                alt="Enjoy"
                className="card-image"
              />
              <h3 className="card-text"></h3>
            </div>
            <div className="card-back">
              <img
                src="../../public/assets/enjoy.webp"
                alt="Enjoy"
                className="card-back-image"
              />
              <div className="card-tip-container">
                <p className="card-tip">
                  "Using the right cleaning products for specific surfaces can prolong their lifespan!"
                </p>
              </div>
            </div>
          </div>
        </Link>
      </div>
        <div className='button-center'>
            <Link to='/contact'>
              Book Now
            </Link>
        </div>
    </section>
  );
};

export default Center;
