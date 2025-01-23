import { Link } from 'react-router-dom'
import "../styles/resHeader.css";

const Header = () => {
  return (
    <header className="move-in-out-header" style={{
        backgroundImage: `linear-gradient(
            to left,
            rgba(85, 53, 110, 0.8),
            rgba(85, 53, 110, 0.5),
            rgba(85, 53, 110, 0.2),
            rgba(0, 0, 0, 0)
          ),
          url('/assets/residential-header.jpg')` 
    }}>
      <div className="header-overlay">
        <h1>Residential Cleaning Services</h1>
        <p>
          Experience the comfort of a sparkling home with our premium residential cleaning services.
          From daily chores to deep cleaning, our dedicated team ensures your home is a sanctuary of cleanliness.
          We're committed to providing meticulous attention to detail in every room, giving you the freedom to relax and enjoy your space.
        </p>
        <Link to='/contact'>
          <button className='link'>We clean so you can enjoy your home</button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
