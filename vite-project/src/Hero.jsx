import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>Discover Your Inner Peace with Yogavidya</h1>
          <p>Join our yoga classes and transform your mind, body, and soul with ancient techniques taught by expert instructors.</p>
          <div className="hero-btns">
            <a href="#classes" className="btn">Explore Classes <FaArrowRight /></a>
            <a href="#contact" className="btn-outline">Free Trial</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;