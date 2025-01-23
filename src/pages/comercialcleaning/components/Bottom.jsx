import { useEffect } from "react";
import gsap from "gsap";
import "../styles/comBottom.css"

import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Bottom = () => {

  useEffect(() => {
    // Ensure elements are visible before animating
    gsap.set(".letter", { autoAlpha: 0 });

    // Animate the background image with ScrollTrigger
    gsap.fromTo(".banner-image", 
      { xPercent: -100, scale: 1.2 },
      {
        xPercent: -50,
        scale: 1,
        duration: 3,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: ".banner",
          start: "top bottom",
        }
      }
    );

    // Animate each letter when the banner comes into view
    ScrollTrigger.batch(".letter", {
      onEnter: (batch) => gsap.to(batch, {
        autoAlpha: 1,
        stagger: 0.05,
        ease: "power2.inOut",
        overwrite: true
      }),
      start: "top bottom-=100",
    });
  }, []);

  return (
    <div className="banner">
  <div className="banner-text">
   <a href="/contact">
   {Array.from("Clean Spaces Spark Great Ideas").map((letter, index) => (
      <span key={index} className="letter">{letter}</span>
    ))}
    </a>
  </div>
  <div className="banner-image"
  style={{
    background: `url('/assets/commercial-cleaning-banner.jpg') no-repeat center center / cover`
  }}> 
  </div>
</div>

  )
}

export default Bottom