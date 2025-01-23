import "../styles/resDuties.css";
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Duties = () => {
  const listItemRefs = useRef([]);
  listItemRefs.current = [];

  useEffect(() => {
    listItemRefs.current.forEach((el, index) => {
      gsap.fromTo(el, 
        { x: -100, autoAlpha: 0 },
        {
          duration: 2,
          x: 0,
          autoAlpha: 1,
          scale: 1,
          scrollTrigger: {
            trigger: el,
            start: "top bottom-=100",
            end: "top center",
            toggleActions: "play none none none",
          },
          onComplete: () => {
            gsap.to(el, {
              scale: 1.3,
              duration: 0.2,
              yoyo: true,
              repeat: 1,
            });
          }
        }
      );
    });
  }, []);

  return (
    <section className="duties-container">
      {/* Title */}
      <h1 className="duties-title">Residential Cleaning Services</h1>
      <p className="duties-subtitle">
        Bringing Comfort and Cleanliness to Your Home
      </p>

      <div className="duties-content">
        <div className="duties-text">
          <div className="text-column">
            <h3>MB UltraClean: Caring for Your Home</h3>
            <p>
              At MB UltraClean, we pride ourselves on delivering meticulous residential cleaning services that transform your living space into a pristine haven. Our dedicated team treats every home with the utmost care, ensuring every corner shines and supports a healthier, more comfortable environment.
            </p>
            <p>
              Choosing MB UltraClean means selecting a partner who deeply values your satisfaction. We tailor our cleaning services to meet the unique needs of your household, combining our deep industry knowledge with personalized attention.
            </p>
            <p>
              Allow MB UltraClean to enhance your home life by handling the chores that take away from your valuable time. Connect with us today to explore how our bespoke cleaning solutions can enrich your everyday living.
            </p>
            <p>
              Our team is equipped with state-of-the-art tools and eco-friendly cleaning products, ensuring your home is not only clean but safe for all family members.
            </p>
          </div>
        </div>

        {/* Image */}
        <div className="duties-image">
          <img
            src="/assets/residential-duties.jpg"
            alt="Residential Cleaning"
          />
        </div>
      </div>

      <ul className="why-choose-list">
        <h2 className="why-choose-title">Why Choose MB UltraClean?</h2>
        {["✔️ Flexible Hours", "✔️ Customizable Cleaning Plans", "✔️ Safe Cleaning Products", "✔️ Thorough & Reliable Service", "✔️ Eco-friendly Practices"].map((item, index) => (
          <li key={index} ref={el => listItemRefs.current[index] = el}>
            {item}
          </li>
        ))}
      </ul>

      {/* Call to Action */}
      <div className="duties-cta">
        <p>
          Ready to experience a cleaner, happier home?{" "}
          <a href="/contact">Contact us online</a> or call us at{" "}
          <strong>(336) 675-3700</strong> today!
        </p>
      </div>
    </section>
  );
};

export default Duties;
