/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { FaArrowRight, FaCheckCircle } from 'react-icons/fa';
import Footer from './Footer';
import PageHero from './PageHero';
import Reveal from './Reveal';
import { businessInfo, primaryServices } from '../content/siteContent';

const ServicePage = ({ page }) => {
  const relatedServices = primaryServices.filter((service) => service.to !== page.to).slice(0, 3);

  return (
    <main className="site-main">
      <PageHero
        eyebrow={page.eyebrow}
        title={page.title}
        description={page.description}
        image={page.heroImage}
        stats={page.heroPoints}
      />

      <section className="section section-grid">
        <Reveal as="article" className="surface-card surface-card--padded">
          <p className="section-kicker">Included in the visit</p>
          <h2>{page.includedHeading}</h2>
          <p className="section-copy">{page.includedIntro}</p>
          <ul className="check-list">
            {page.included.map((item) => (
              <li key={item}>
                <FaCheckCircle aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal as="article" className="media-card" delay={0.14}>
          <img src={page.detailImage} alt={page.detailImageAlt} />
          <div className="media-card__body">
            <p className="section-kicker">Best fit</p>
            <h3>{page.idealForHeading}</h3>
            <p>{page.idealForIntro}</p>
            <ul className="compact-list">
              {page.idealFor.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </Reveal>
      </section>

      <Reveal as="section" className="section">
        <div className="section-heading">
          <span className="eyebrow">Why clients choose it</span>
          <h2>Practical cleaning built around the result you need.</h2>
        </div>

        <div className="feature-grid">
          {page.benefits.map((benefit, index) => (
            <Reveal as="article" className="feature-card" delay={index * 0.08} key={benefit.title}>
              <h3>{benefit.title}</h3>
              <p>{benefit.text}</p>
            </Reveal>
          ))}
        </div>
      </Reveal>

      <section className="section section-grid section-grid--compact">
        <Reveal as="article" className="surface-card surface-card--padded">
          <p className="section-kicker">Next step</p>
          <h2>{page.ctaTitle}</h2>
          <p className="section-copy">{page.ctaText}</p>
          <div className="hero-actions hero-actions--stacked">
            <Link className="button button--primary" to="/contact">
              Request a Quote
              <FaArrowRight aria-hidden="true" />
            </Link>
            <a className="button button--ghost" href={businessInfo.phoneHref}>
              Call {businessInfo.phone}
            </a>
          </div>
        </Reveal>

        <Reveal as="article" className="surface-card surface-card--padded" delay={0.12}>
          <p className="section-kicker">Related services</p>
          <h2>Compare the right fit before you book.</h2>
          <div className="link-stack">
            {relatedServices.map((service, index) => (
              <Reveal as="div" delay={index * 0.08} key={service.to}>
                <Link className="link-card" to={service.to}>
                  <div>
                    <h3>{service.title}</h3>
                    <p>{service.shortDescription}</p>
                  </div>
                  <FaArrowRight aria-hidden="true" />
                </Link>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </section>

      <Footer />
    </main>
  );
};

export default ServicePage;
