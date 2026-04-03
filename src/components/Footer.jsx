import { Link } from 'react-router-dom';
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import {
  businessInfo,
  primaryServices,
  roomFocusPages,
} from '../content/siteContent';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="site-footer__grid">
        <div className="footer-brand-block">
          <Link className="footer-brand" to="/">
            {businessInfo.name}
          </Link>
          <p>{businessInfo.tagline}</p>
          <a className="footer-contact" href={businessInfo.phoneHref}>
            <FaPhoneAlt aria-hidden="true" />
            {businessInfo.phone}
          </a>
          <a className="footer-contact" href={businessInfo.emailHref}>
            <FaEnvelope aria-hidden="true" />
            {businessInfo.email}
          </a>
        </div>

        <div>
          <p className="footer-heading">Services</p>
          <div className="footer-links">
            {primaryServices.map((service) => (
              <Link key={service.to} to={service.to}>
                {service.title}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="footer-heading">Explore</p>
          <div className="footer-links">
            {roomFocusPages.map((room) => (
              <Link key={room.to} to={room.to}>
                {room.title}
              </Link>
            ))}
            <Link to="/about">About</Link>
            <Link to="/faq">FAQ</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </div>

      <div className="site-footer__bottom">
        <p>&copy; {new Date().getFullYear()} {businessInfo.name}. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
