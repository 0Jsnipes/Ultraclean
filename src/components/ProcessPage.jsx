/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { FaArrowRight, FaCheckCircle } from 'react-icons/fa';
import Footer from './Footer';
import PageHero from './PageHero';
import { businessInfo, roomFocusPages } from '../content/siteContent';

const ProcessPage = ({ page }) => {
  const relatedRooms = roomFocusPages.filter((room) => room.to !== page.to).slice(0, 3);

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
        <article className="surface-card surface-card--padded">
          <p className="section-kicker">Room checklist</p>
          <h2>{page.checklistHeading}</h2>
          <p className="section-copy">{page.checklistIntro}</p>
          <ul className="check-list">
            {page.checklist.map((item) => (
              <li key={item}>
                <FaCheckCircle aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>

        <article className="media-card">
          <img src={page.detailImage} alt={page.detailImageAlt} />
          <div className="media-card__body">
            <p className="section-kicker">Why this room matters</p>
            <h3>{page.focusAreas[0].title}</h3>
            <p>{page.focusAreas[0].text}</p>
          </div>
        </article>
      </section>

      <section className="section">
        <div className="section-heading">
          <span className="eyebrow">Room priorities</span>
          <h2>Small details in high-use rooms make a fast difference.</h2>
        </div>

        <div className="feature-grid">
          {page.focusAreas.map((area) => (
            <article className="feature-card" key={area.title}>
              <h3>{area.title}</h3>
              <p>{area.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-grid section-grid--compact">
        <article className="surface-card surface-card--padded">
          <p className="section-kicker">Scheduling</p>
          <h2>{page.cadenceHeading}</h2>
          <p className="section-copy">{page.cadenceIntro}</p>
          <ul className="compact-list">
            {page.cadence.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="hero-actions hero-actions--stacked">
            <Link className="button button--primary" to="/contact">
              Request a Quote
              <FaArrowRight aria-hidden="true" />
            </Link>
            <a className="button button--ghost" href={businessInfo.phoneHref}>
              Call {businessInfo.phone}
            </a>
          </div>
        </article>

        <article className="surface-card surface-card--padded">
          <p className="section-kicker">More room pages</p>
          <h2>See how we approach the rest of the home.</h2>
          <div className="link-stack">
            {relatedRooms.map((room) => (
              <Link className="link-card" key={room.to} to={room.to}>
                <div>
                  <h3>{room.title}</h3>
                  <p>{room.shortDescription}</p>
                </div>
                <FaArrowRight aria-hidden="true" />
              </Link>
            ))}
          </div>
        </article>
      </section>

      <Footer />
    </main>
  );
};

export default ProcessPage;
