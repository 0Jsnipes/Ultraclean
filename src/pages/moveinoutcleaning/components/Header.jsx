import { Link } from 'react-router-dom'
import '../styles/movHeader.css';

const Header = () => {
  return (
    <header className="move-in-out-header">
      <div className="header-overlay">
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
