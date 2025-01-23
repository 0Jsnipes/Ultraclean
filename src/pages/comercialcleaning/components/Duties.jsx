import '../styles/comDuties.css';

import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';



gsap.registerPlugin(ScrollTrigger);


const Duties = () => {
  const listItemRefs = useRef([]);
  listItemRefs.current = [];
  /*const [showCTA, setShowCTA] = useState(false);

  const handleVideoEnd = () => {
    setShowCTA(true);
  };*/

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
            start: "top bottom-=100", // Start when the top of the item hits bottom of the viewport minus 100 pixels
            end: "top center",
            toggleActions: "play none none none",
            // Markers for debugging
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


        </div>
      
    </div>

        {/* Image */}
        <div className="duties-image">
          <img
            src="/assets/commercial-duties.jpg"
            alt="Commercial Cleaning"
            />
             {/*<video src="/assets/commercial-cleaning-video.mp4" controls onEnded={handleVideoEnd}>
            Your browser does not support the video tag.
          </video>
          {showCTA && <div className="video-cta">Schedule your free office cleaning estimate now!</div>}
          */}
        </div>
    
            </div>
          <ul className="why-choose-list">
  <h2 className="why-choose-title">Why Choose MB UltraClean?</h2>
  {["✔️Flexible Hours", "✔️Excellent Customer Service", "✔️Custom Cleaning Schedule", "✔️Competitive Rates", "✔️Specialized cleaning"].map((item, index) => (
              <li key={index} ref={el => listItemRefs.current[index] = el}>
                {item}
              </li>
            ))}
</ul>
  

      {/* Call to Action */}
      <div className="duties-cta">
        <p>
          Seeking exceptional commercial cleaning services?{" "}
          <a href="/contact">Contact us online</a> or call us at{" "}
          <strong>(336) 675-3700</strong> today!
        </p>
      </div>
    </section>
  );
};

export default Duties;
