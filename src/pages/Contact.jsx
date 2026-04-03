import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import InputForm from '../common/InputForm';
import Footer from '../components/Footer';
import { businessInfo, primaryServices } from '../content/siteContent';

const Contact = () => {
  return (
    <main className="site-main">
      <section className="contact-hero">
        <div className="contact-hero__content">
          <span className="eyebrow">Request a quote</span>
          <h1>Tell us about your space.</h1>
          <p>
            Share the service you need, the size of the property, and anything you want us
            to prioritize. We will use that to guide the next step.
          </p>
        </div>

        <div className="contact-hero__aside">
          <article className="surface-card surface-card--padded">
            <p className="section-kicker">Direct contact</p>
            <a className="footer-contact" href={businessInfo.phoneHref}>
              <FaPhoneAlt aria-hidden="true" />
              {businessInfo.phone}
            </a>
            <a className="footer-contact" href={businessInfo.emailHref}>
              <FaEnvelope aria-hidden="true" />
              {businessInfo.email}
            </a>
          </article>

          <article className="surface-card surface-card--padded">
            <p className="section-kicker">Popular requests</p>
            <div className="tag-list tag-list--compact">
              {primaryServices.map((service) => (
                <span key={service.to}>{service.title}</span>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="section section-grid section-grid--compact">
        <InputForm />

        <article className="surface-card surface-card--padded">
          <p className="section-kicker">Helpful details</p>
          <h2>What to include in your message.</h2>
          <ul className="compact-list">
            <li>The type of cleaning you need.</li>
            <li>The number of rooms or the size of the space.</li>
            <li>Your ideal timing or scheduling needs.</li>
            <li>Any rooms or surfaces that need extra attention.</li>
          </ul>
        </article>
      </section>

      <Footer />
    </main>
  );
};

export default Contact;
