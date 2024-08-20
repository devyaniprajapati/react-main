import React from 'react';
import './App.css'; // Custom CSS for additional styling if needed

function HeroSection() {
  return (
    <section className="hero-section d-flex align-items-center text-center bg-light">
      <div className="container">
        <h1 className="display-4 font-weight-bold mb-4">Heading Here</h1>
        <p className="lead mb-4">subheading or description goes here.</p>
        <div className="buttons">
          <a href="#" className="btn btn-primary btn-lg mx-2">Primary Button</a>
          <a href="#" className="btn btn-secondary btn-lg mx-2">Secondary Button</a>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
