import { Link } from 'react-router-dom';
import '../../../styles/Hero.css';

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-image-overlay">
        <img alt="Cleaning Services" className="hero-image" src="/assets/home-hero.jpg" />
      </div>
      <div className="hero-content">
        <h1 className="hero-title">We Clean,</h1>
        <h1 className="hero-title">So You Don&apos;t Have To!</h1>
        <p className="hero-subtitle">
          Professional Cleaning Services for every space. Let us handle the mess while you
          relax.
        </p>
        <div className="hero-buttons">
          <Link to="/contact">
            <button className="hero-btn primary-btn" type="button">
              Book a Cleaning
            </button>
          </Link>
          <button
            className="hero-btn secondary-btn"
            onClick={() =>
              document.getElementById('cleaning-card-section')?.scrollIntoView({
                behavior: 'smooth',
              })
            }
            type="button"
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
