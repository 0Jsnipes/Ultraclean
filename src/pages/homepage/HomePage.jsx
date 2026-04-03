import { Link } from 'react-router-dom';
import { FaArrowRight, FaCheckCircle } from 'react-icons/fa';
import Footer from '../../components/Footer';
import {
  faqItems,
  homeHighlights,
  homeSteps,
  primaryServices,
  roomFocusPages,
  testimonials,
} from '../../content/siteContent';

const HomePage = () => {
  return (
    <main className="site-main">
      <section className="home-hero">
        <div className="home-hero__content">
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
            <li>Flexible scheduling</li>
            <li>Residential and commercial</li>
            <li>Room-by-room focus</li>
          </ul>
        </div>

        <div className="home-hero__media">
          <img src="/assets/home-hero.jpg" alt="Freshly cleaned home interior" />
          <div className="home-hero__card">
            <p className="section-kicker">Most requested</p>
            <h2>Deep cleans, recurring upkeep, and move-ready resets.</h2>
            <p>
              Pick the service that matches the level of detail your space needs right now,
              not a one-size-fits-all package.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="feature-grid">
          {homeHighlights.map((highlight) => (
            <article className="feature-card" key={highlight.title}>
              <h3>{highlight.title}</h3>
              <p>{highlight.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="home-services">
        <div className="section-heading">
          <span className="eyebrow">Services</span>
          <h2>Choose the level of cleaning that fits the space.</h2>
          <p>
            From recurring maintenance to one-time resets, every service is written to be
            easy to understand and easy to book.
          </p>
        </div>

        <div className="card-grid">
          {primaryServices.map((service) => (
            <Link className="service-card" key={service.to} to={service.to}>
              <h3>{service.title}</h3>
              <p>{service.shortDescription}</p>
              <span>
                View service
                <FaArrowRight aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="section section-grid">
        <div>
          <div className="section-heading section-heading--left">
            <span className="eyebrow">How it works</span>
            <h2>A simple path from quote request to cleaner rooms.</h2>
          </div>

          <div className="step-list">
            {homeSteps.map((step, index) => (
              <article className="step-card" key={step.title}>
                <span>{index + 1}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div>
          <div className="section-heading section-heading--left">
            <span className="eyebrow">Room focus</span>
            <h2>See how we approach the busiest areas of the home.</h2>
          </div>

          <div className="mini-card-grid">
            {roomFocusPages.map((room) => (
              <Link className="mini-card" key={room.to} to={room.to}>
                <h3>{room.title}</h3>
                <p>{room.shortDescription}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <span className="eyebrow">What people notice</span>
          <h2>Short, practical feedback from happy clients.</h2>
        </div>

        <div className="testimonial-grid">
          {testimonials.map((testimonial) => (
            <article className="testimonial-card" key={testimonial.name}>
              <div className="testimonial-stars" aria-hidden="true">
                <FaCheckCircle />
                <FaCheckCircle />
                <FaCheckCircle />
              </div>
              <p>{testimonial.text}</p>
              <strong>{testimonial.name}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-grid section-grid--compact">
        <article className="surface-card surface-card--padded">
          <p className="section-kicker">Common questions</p>
          <h2>What should you include in a quote request?</h2>
          <div className="faq-preview">
            {faqItems.slice(0, 3).map((item) => (
              <div className="faq-preview__item" key={item.question}>
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </div>
            ))}
          </div>
          <Link className="text-link" to="/faq">
            Read all FAQs
          </Link>
        </article>

        <article className="cta-panel">
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
        </article>
      </section>

      <Footer />
    </main>
  );
};

export default HomePage;
