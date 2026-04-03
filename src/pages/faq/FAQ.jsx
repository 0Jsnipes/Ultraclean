import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import PageHero from '../../components/PageHero';
import { faqItems } from '../../content/siteContent';

const FAQ = () => {
  return (
    <main className="site-main">
      <PageHero
        description="Use this page to understand the quote process, what information helps most, and how to choose the right service."
        eyebrow="FAQ"
        image="/assets/Banner.webp"
        title="Common questions, clear answers."
      />

      <section className="section">
        <div className="faq-list">
          {faqItems.map((item) => (
            <details className="faq-item" key={item.question}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="section">
        <article className="cta-panel cta-panel--wide">
          <p className="section-kicker">Still deciding?</p>
          <h2>Send the details you have and we can help you narrow it down.</h2>
          <p>
            Even a rough description of the property, timeline, and priority rooms is enough
            to start the conversation.
          </p>
          <div className="hero-actions hero-actions--stacked">
            <Link className="button button--primary" to="/contact">
              Request a Quote
            </Link>
            <Link className="button button--ghost" to="/">
              Back to Home
            </Link>
          </div>
        </article>
      </section>

      <Footer />
    </main>
  );
};

export default FAQ;
