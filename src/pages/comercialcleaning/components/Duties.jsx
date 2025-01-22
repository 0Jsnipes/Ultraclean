import '../styles/Duties.css';

const Duties = () => {
  return (
    <section className="duties-container">
      {/* Title */}
      <h1 className="duties-title">Commercial Cleaning Services</h1>
      <p className="duties-subtitle">
        Reliable Office Cleaning Services Near You
      </p>

      <div className="duties-content">
    <div className="duties-text">
        <div className="text-column">
            <h3>MB UltraClean: Your Partner in Professionalism</h3>
            <p>
                At MB UltraClean, we understand the importance of maintaining a clean and professional environment for your business. With over three years of dedicated service in the Myrtle Beach area, our locally owned and operated company has become a trusted partner to numerous local businesses, from bustling retail spaces to professional office environments.
            </p>
            <p>
                Choosing MB UltraClean means opting for a partner who values professionalism and customer satisfaction as much as you do. Our thorough understanding of commercial cleaning demands, combined with our local presence and advanced cleaning techniques, makes us the ideal choice for businesses in Myrtle Beach looking for top-tier cleaning services.
            </p>
            <p>
                Let MB UltraClean help you make the best impression with a clean, inviting, and professional space that reflects the quality and values of your business. Contact us today to discover how our tailored cleaning solutions can benefit your company.
            </p>
            <p>
                Our skilled cleaning professionals are equipped with the latest tools and techniques to ensure your office, retail space, or commercial property is immaculate, promoting a productive and healthy environment for your staff and clients.
            </p>
            <ul className="why-choose-list">
    <h2 className="why-choose-title">Why Choose MB UltraClean?</h2>
    <li>Flexible Hours: Service available during or after office hours</li>
    <li>Services Include: Dusting, Mopping, Vacuuming, Window Cleaning</li>
    <li>Custom Cleaning Schedules: Daily, Weekly, or Bi-Weekly Options</li>
    <li>Competitive Rates and No-Hassle Guarantees</li>
    <li>Specialized cleaning for post-construction and renovation sites</li>
</ul>

        </div>
      
    </div>

        {/* Image */}
        <div className="duties-image">
          <img
            src="../../public/assets/commercial-cleaning.webp"
            alt="Commercial Cleaning"
            />
         
        </div>
    
            </div>
  

      {/* Call to Action */}
      <div className="duties-cta">
        <p>
          Seeking exceptional commercial cleaning services?{" "}
          <a href="/contact">Contact us online</a> or call us at{" "}
          <strong>(843) 284-7720</strong> today!
        </p>
      </div>
    </section>
  );
};

export default Duties;
