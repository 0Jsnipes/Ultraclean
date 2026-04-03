import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import PageHero from '../../components/PageHero';

const aboutPoints = [
  {
    title: 'Built around the space',
    text: 'Every service is shaped around how the property is actually used, from busy homes to rentals and everyday workspaces.',
  },
  {
    title: 'Focused on what matters most',
    text: 'Kitchens, bathrooms, floors, touchpoints, and high-traffic areas get the attention that changes how a space feels.',
  },
  {
    title: 'Simple from quote to visit',
    text: 'The process is meant to stay clear and practical, with a quote request that gets straight to the details that matter.',
  },
];

const About = () => {
  return (
    <main className="site-main">
      <PageHero
        description="MB Ultra Clean is centered on thoughtful, detail-focused cleaning that helps homes and workspaces feel easier to live and work in."
        eyebrow="About MB Ultra Clean"
        image="/assets/residential-header.jpg"
        title="A cleaning business built around real spaces and real schedules."
      />

      <section className="section section-grid section-grid--compact">
        <article className="surface-card surface-card--padded">
          <p className="section-kicker">What matters here</p>
          <h2>Cleaning service should feel clear, helpful, and easy to trust.</h2>
          <p className="section-copy">
            MB Ultra Clean helps homeowners, renters, and businesses stay ahead of the mess
            with service that is straightforward to understand and easy to schedule.
          </p>
          <p className="section-copy">
            Whether the job is a recurring visit, a deep reset, or a move-related clean,
            the focus stays the same: cleaner rooms, sharper detail, and a space that feels
            better to walk into.
          </p>
        </article>

        <div className="feature-grid feature-grid--stacked">
          {aboutPoints.map((point) => (
            <article className="feature-card" key={point.title}>
              <h3>{point.title}</h3>
              <p>{point.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <article className="cta-panel cta-panel--wide">
          <p className="section-kicker">Next step</p>
          <h2>Need cleaning for a home, rental, or business?</h2>
          <p>
            Use the contact page to describe the space, choose a service, and flag any rooms
            that need extra attention.
          </p>
          <div className="hero-actions hero-actions--stacked">
            <Link className="button button--primary" to="/contact">
              Request a Quote
            </Link>
            <Link className="button button--ghost" to="/faq">
              Read the FAQs
            </Link>
          </div>
        </article>
      </section>

      <Footer />
    </main>
  );
};

export default About;
