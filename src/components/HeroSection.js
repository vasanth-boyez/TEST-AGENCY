import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>We Assist You <br />
        <span>In boosting your brand</span> <br />
        with our innovative expertise</h1>
        <button className="hero-btn">Get Connected</button>
        <div className="play-button">

        </div>
      </div>
      <div className="floating-icons">
        {/* Add floating 3D icons as needed */}
      </div>
    </section>
  );
};

export default HeroSection;
