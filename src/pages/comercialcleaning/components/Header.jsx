import { Link } from 'react-router-dom'
import '../styles/comHeader.css';

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
      url('/assets/commercial-header.jpg')`
    }}>
      <div className="move-header-overlay">
        <h1>Commercial Cleaning Services</h1>
        <p>
        Ensure a pristine, professional environment with our comprehensive commercial cleaning services. 
        Whether preparing a new office space or revitalizing an existing one, our expert team delivers unmatched cleanliness 
        and attention to detail, setting the standard for a spotless and welcoming business atmosphere.
        </p>
       <Link to='/contact'>
        <button className='link'>We clean so you can focus on business</button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
