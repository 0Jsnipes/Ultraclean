import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaCheckCircle } from 'react-icons/fa';
import Footer from '../../components/Footer';
import Reveal from '../../components/Reveal';
import {
  faqItems,
  homeHighlights,
  homeSteps,
  primaryServices,
  roomFocusPages,
  testimonials,
} from '../../content/siteContent';

const HomePage = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <main className="site-main">
      <motion.section
        animate={{ opacity: 1, y: 0 }}
        className="home-hero"
        initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 28 }}
        transition={{ duration: shouldReduceMotion ? 0.24 : 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="home-hero__content"
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 26 }}
          transition={{
            delay: shouldReduceMotion ? 0 : 0.06,
            duration: shouldReduceMotion ? 0.24 : 0.72,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <span className="eyebrow">Cleaning for homes, rentals, and workplaces</span>
          <h1>A cleaner space without the extra hassle.</h1>
          <p>
            MB Ultra Clean keeps the process simple: clear service options, cleaner rooms,
            and a quote request that gets straight to the point.
          </p>

          <div className="hero-actions">
            <Link className="button button--primary" to="/contact">
              Request a Quote
              <FaArrowRight aria-hidden="true" />
            </Link>
            <button
              className="button button--secondary"
              onClick={() =>
                document.getElementById('home-services')?.scrollIntoView({ behavior: 'smooth' })
              }
              type="button"
            >
              Explore Services
            </button>
          </div>

          <ul className="home-hero__stats">
            {['Flexible scheduling', 'Residential and commercial', 'Room-by-room focus'].map(
              (stat, index) => (
                <motion.li
                  animate={{ opacity: 1, y: 0 }}
                  initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
                  key={stat}
                  transition={{
                    delay: shouldReduceMotion ? 0 : 0.28 + index * 0.08,
                    duration: shouldReduceMotion ? 0.24 : 0.52,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {stat}
                </motion.li>
              ),
            )}
          </ul>
        </motion.div>

        <motion.div
          animate={{ opacity: 1, x: 0 }}
          className="home-hero__media"
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: 24 }}
          transition={{
            delay: shouldReduceMotion ? 0 : 0.16,
            duration: shouldReduceMotion ? 0.24 : 0.82,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <motion.img
            alt="Freshly cleaned home interior"
            animate={{ opacity: 1, scale: 1 }}
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 1.04 }}
            src="/assets/home-hero.jpg"
            transition={{
              delay: shouldReduceMotion ? 0 : 0.2,
              duration: shouldReduceMotion ? 0.24 : 0.95,
              ease: [0.22, 1, 0.36, 1],
            }}
          />
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="home-hero__card"
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 18 }}
            transition={{
              delay: shouldReduceMotion ? 0 : 0.42,
              duration: shouldReduceMotion ? 0.24 : 0.68,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <p className="section-kicker">Most requested</p>
            <h2>Deep cleans, recurring upkeep, and move-ready resets.</h2>
            <p>
              Pick the service that matches the level of detail your space needs right now,
              not a one-size-fits-all package.
            </p>
          </motion.div>
        </motion.div>
      </motion.section>

      <Reveal as="section" className="section">
        <div className="feature-grid">
          {homeHighlights.map((highlight, index) => (
            <Reveal as="article" className="feature-card" delay={index * 0.08} key={highlight.title}>
              <h3>{highlight.title}</h3>
              <p>{highlight.text}</p>
            </Reveal>
          ))}
        </div>
      </Reveal>

      <Reveal as="section" className="section" id="home-services">
        <div className="section-heading">
          <span className="eyebrow">Services</span>
          <h2>Choose the level of cleaning that fits the space.</h2>
          <p>
            From recurring maintenance to one-time resets, every service is written to be
            easy to understand and easy to book.
          </p>
        </div>

        <div className="card-grid">
          {primaryServices.map((service, index) => (
            <Reveal as="div" delay={index * 0.08} key={service.to}>
              <Link className="service-card" to={service.to}>
                <h3>{service.title}</h3>
                <p>{service.shortDescription}</p>
                <span>
                  View service
                  <FaArrowRight aria-hidden="true" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Reveal>

      <section className="section section-grid">
        <Reveal as="div">
          <div className="section-heading section-heading--left">
            <span className="eyebrow">How it works</span>
            <h2>A simple path from quote request to cleaner rooms.</h2>
          </div>

          <div className="step-list">
            {homeSteps.map((step, index) => (
              <Reveal as="article" className="step-card" delay={index * 0.08} key={step.title}>
                <span>{index + 1}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>

        <Reveal as="div" delay={0.12}>
          <div className="section-heading section-heading--left">
            <span className="eyebrow">Room focus</span>
            <h2>See how we approach the busiest areas of the home.</h2>
          </div>

          <div className="mini-card-grid">
            {roomFocusPages.map((room, index) => (
              <Reveal as="div" delay={index * 0.08} key={room.to}>
                <Link className="mini-card" to={room.to}>
                  <h3>{room.title}</h3>
                  <p>{room.shortDescription}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </section>

      <Reveal as="section" className="section">
        <div className="section-heading">
          <span className="eyebrow">What people notice</span>
          <h2>Short, practical feedback from happy clients.</h2>
        </div>

        <div className="testimonial-grid">
          {testimonials.map((testimonial, index) => (
            <Reveal as="article" className="testimonial-card" delay={index * 0.08} key={testimonial.name}>
              <div className="testimonial-stars" aria-hidden="true">
                <FaCheckCircle />
                <FaCheckCircle />
                <FaCheckCircle />
              </div>
              <p>{testimonial.text}</p>
              <strong>{testimonial.name}</strong>
            </Reveal>
          ))}
        </div>
      </Reveal>

      <section className="section section-grid section-grid--compact">
        <Reveal as="article" className="surface-card surface-card--padded">
          <p className="section-kicker">Common questions</p>
          <h2>What should you include in a quote request?</h2>
          <div className="faq-preview">
            {faqItems.slice(0, 3).map((item, index) => (
              <Reveal as="div" className="faq-preview__item" delay={index * 0.08} key={item.question}>
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </Reveal>
            ))}
          </div>
          <Link className="text-link" to="/faq">
            Read all FAQs
          </Link>
        </Reveal>

        <Reveal as="article" className="cta-panel" delay={0.12}>
          <p className="section-kicker">Ready when you are</p>
          <h2>Tell us about the space and the cleaning you need.</h2>
          <p>
            A few details about the property, timing, and priority rooms are enough to get
            the conversation started.
          </p>
          <div className="hero-actions hero-actions--stacked">
            <Link className="button button--primary" to="/contact">
              Start Your Quote
              <FaArrowRight aria-hidden="true" />
            </Link>
            <Link className="button button--ghost" to="/about">
              Learn More About Us
            </Link>
          </div>
        </Reveal>
      </section>

      <Footer />
    </main>
  );
};

export default HomePage;
