import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { FaBars, FaChevronDown, FaPhoneAlt, FaTimes } from 'react-icons/fa';
import {
  businessInfo,
  primaryServices,
  roomFocusPages,
} from '../content/siteContent';

const navigationGroups = [
  {
    label: 'Services',
    links: primaryServices.map((service) => ({
      title: service.title,
      to: service.to,
    })),
  },
  {
    label: 'Room Focus',
    links: roomFocusPages.map((room) => ({
      title: room.title,
      to: room.to,
    })),
  },
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState(null);
  const { pathname } = useLocation();

  const closeMenu = () => {
    setIsOpen(false);
    setOpenGroup(null);
  };

  const toggleGroup = (label) => {
    setOpenGroup((current) => (current === label ? null : label));
  };

  useEffect(() => {
    closeMenu();
  }, [pathname]);

  useEffect(() => {
    if (window.innerWidth > 960) {
      return undefined;
    }

    document.body.style.overflow = isOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 960) {
        closeMenu();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="site-header">
      <nav className="navbar">
        <Link className="navbar-brand" to="/" onClick={closeMenu}>
          <span>MB Ultra Clean</span>
          <small>{businessInfo.tagline}</small>
        </Link>

        <div className={`navbar-panel ${isOpen ? 'is-open' : ''}`}>
          <div className="navbar-links">
            {navigationGroups.map((group) => (
              <div
                className={`nav-group ${openGroup === group.label ? 'is-open' : ''}`}
                key={group.label}
              >
                <button
                  className="nav-group-button"
                  type="button"
                  onClick={() => toggleGroup(group.label)}
                >
                  {group.label}
                  <FaChevronDown aria-hidden="true" />
                </button>
                <div className="nav-group-menu">
                  {group.links.map((link) => (
                    <Link
                      className="nav-dropdown-link"
                      key={link.to}
                      onClick={closeMenu}
                      to={link.to}
                    >
                      {link.title}
                    </Link>
                  ))}
                </div>
              </div>
            ))}

            <NavLink className="nav-link" onClick={closeMenu} to="/about">
              About
            </NavLink>
            <NavLink className="nav-link" onClick={closeMenu} to="/faq">
              FAQ
            </NavLink>
            <NavLink className="nav-link nav-link--cta" onClick={closeMenu} to="/contact">
              Request a Quote
            </NavLink>
          </div>

          <a className="navbar-phone navbar-phone--mobile" href={businessInfo.phoneHref}>
            <FaPhoneAlt aria-hidden="true" />
            {businessInfo.phone}
          </a>
        </div>

        <div className="navbar-actions">
          <a className="navbar-phone navbar-phone--desktop" href={businessInfo.phoneHref}>
            <FaPhoneAlt aria-hidden="true" />
            {businessInfo.phone}
          </a>
          <button
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="navbar-toggle"
            onClick={() => setIsOpen((current) => !current)}
            type="button"
          >
            {isOpen ? <FaTimes aria-hidden="true" /> : <FaBars aria-hidden="true" />}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
