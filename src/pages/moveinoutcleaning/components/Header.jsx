import { Link } from 'react-router-dom'
import '../styles/movHeader.css';

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
      url('/assets/move-in-out-hero.jpg')`
    }}>
      <div className="move-header-overlay">
        <h1>Move In/Out Cleaning Services</h1>
        <p>
          Start fresh in your new space or leave your old one spotless with our
          comprehensive move-in/out cleaning services.
        </p>
       <Link to='/contact'>
        <button className='link'>Let's start fresh</button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
