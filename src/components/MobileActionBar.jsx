import { Link } from 'react-router-dom';
import { FaCalendarAlt, FaPhoneAlt } from 'react-icons/fa';
import { businessInfo } from '../content/siteContent';

const MobileActionBar = () => {
  return (
    <div className="mobile-action-bar">
      <a className="mobile-action-bar__button mobile-action-bar__button--call" href={businessInfo.phoneHref}>
        <FaPhoneAlt aria-hidden="true" />
        <span>Call Now</span>
      </a>
      <Link className="mobile-action-bar__button mobile-action-bar__button--quote" to="/contact">
        <FaCalendarAlt aria-hidden="true" />
        <span>Request Quote</span>
      </Link>
    </div>
  );
};

export default MobileActionBar;
