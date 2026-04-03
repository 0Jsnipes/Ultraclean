import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import InputForm from '../common/InputForm';
import Footer from '../components/Footer';
import Reveal from '../components/Reveal';
import { businessInfo, primaryServices } from '../content/siteContent';

const Contact = () => {
  return (
    <main className="site-main">
      <Reveal as="section" className="contact-hero" amount={0.05}>
        <Reveal as="div" className="contact-hero__content">
          <span className="eyebrow">Request a quote</span>
          <h1>Tell us about your space.</h1>
          <p>
            Share the service you need, the size of the property, and anything you want us
            to prioritize. We will use that to guide the next step.
          </p>
        </Reveal>

        <Reveal as="div" className="contact-hero__aside" delay={0.12}>
          <Reveal as="article" className="surface-card surface-card--padded">
            <p className="section-kicker">Direct contact</p>
            <a className="footer-contact" href={businessInfo.phoneHref}>
              <FaPhoneAlt aria-hidden="true" />
              {businessInfo.phone}
            </a>
            <a className="footer-contact" href={businessInfo.emailHref}>
              <FaEnvelope aria-hidden="true" />
              {businessInfo.email}
            </a>
          </Reveal>

          <Reveal as="article" className="surface-card surface-card--padded" delay={0.1}>
            <p className="section-kicker">Popular requests</p>
            <div className="tag-list tag-list--compact">
              {primaryServices.map((service) => (
                <span key={service.to}>{service.title}</span>
              ))}
            </div>
          </Reveal>
        </Reveal>
      </Reveal>

      <section className="section section-grid section-grid--compact">
        <Reveal as="div">
          <InputForm />
        </Reveal>

        <Reveal as="article" className="surface-card surface-card--padded" delay={0.12}>
          <p className="section-kicker">Helpful details</p>
          <h2>What to include in your message.</h2>
          <ul className="compact-list">
            <li>The type of cleaning you need.</li>
            <li>The number of rooms or the size of the space.</li>
            <li>Your ideal timing or scheduling needs.</li>
            <li>Any rooms or surfaces that need extra attention.</li>
          </ul>
        </Reveal>
      </section>

      <Footer />
    </main>
  );
};

export default Contact;
