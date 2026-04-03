/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { FaArrowRight, FaPhoneAlt } from 'react-icons/fa';
import { businessInfo } from '../content/siteContent';

const PageHero = ({
  eyebrow,
  title,
  description,
  image,
  stats = [],
  primaryLabel = 'Request a Quote',
  primaryTo = '/contact',
  secondaryLabel = `Call ${businessInfo.phone}`,
  secondaryHref = businessInfo.phoneHref,
}) => {
  return (
    <section
      className="page-hero"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(12, 30, 34, 0.86), rgba(12, 30, 34, 0.58)), url('${image}')`,
      }}
    >
      <div className="page-hero__inner">
        <div className="page-hero__content">
          <span className="eyebrow">{eyebrow}</span>
          <h1>{title}</h1>
          <p>{description}</p>
          <div className="hero-actions">
            <Link className="button button--primary" to={primaryTo}>
              {primaryLabel}
              <FaArrowRight aria-hidden="true" />
            </Link>
            <a className="button button--secondary" href={secondaryHref}>
              <FaPhoneAlt aria-hidden="true" />
              {secondaryLabel}
            </a>
          </div>
        </div>

        {stats.length > 0 && (
          <aside className="page-hero__card">
            <p className="section-kicker">Common priorities</p>
            <ul className="tag-list">
              {stats.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </aside>
        )}
      </div>
    </section>
  );
};

export default PageHero;
