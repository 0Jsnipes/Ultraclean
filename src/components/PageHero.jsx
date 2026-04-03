/* eslint-disable react/prop-types */
import { motion, useReducedMotion } from 'framer-motion';
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
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.section
      animate={{ opacity: 1, y: 0 }}
      className="page-hero"
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 28 }}
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(var(--ink-rgb), 0.9), rgba(var(--accent-dark-rgb), 0.58)), url('${image}')`,
      }}
      transition={{
        duration: shouldReduceMotion ? 0.24 : 0.82,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div className="page-hero__inner">
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="page-hero__content"
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 24 }}
          transition={{
            delay: shouldReduceMotion ? 0 : 0.08,
            duration: shouldReduceMotion ? 0.24 : 0.72,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
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
        </motion.div>

        {stats.length > 0 && (
          <motion.aside
            animate={{ opacity: 1, x: 0 }}
            className="page-hero__card"
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: 24 }}
            transition={{
              delay: shouldReduceMotion ? 0 : 0.22,
              duration: shouldReduceMotion ? 0.24 : 0.72,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <p className="section-kicker">Common priorities</p>
            <ul className="tag-list">
              {stats.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </motion.aside>
        )}
      </div>
    </motion.section>
  );
};

export default PageHero;
