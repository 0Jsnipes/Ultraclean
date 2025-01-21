import React from "react";
import Hero from "../components/Hero";
import Center from "../components/Center";
import CleaningCard from "../components/CleaningCard";
import Reviews from "../components/Reviews";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="hero-section">
        <Hero />
      </div>
      <div className="center-section">
        <Center />
      </div>
      <div className="cleaning-card-section">
        <CleaningCard />
      </div>
      <div className="reviews-section">
        <Reviews />
      </div>
      <div className="footer-section">
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
