import React from 'react';
import '../styles/Bottom.css';

const Bottom = () => {
  return (
    <section className="bottom-section">
      <h2>Why Choose Us?</h2>
      <div className="bottom-images">
        <img src="../../public/assets/move-in-cleaning1.webp" alt="Clean home ready to move in" />
        <img src="../../public/assets/move-out-cleaning2.webp" alt="Vacant clean apartment" />
        <img src="../../public/assets/move-in-cleaning2.webp" alt="Spotless kitchen for move in" />
      </div>
      <p className="bottom-info">
        Moving can be stressful. Let us handle the cleaning so you can focus on settling into your new home. Our thorough move-in/out cleaning ensures a fresh start for you and helps you leave a great impression at your old place.
      </p>
    </section>
  );
};

export default Bottom;
