import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaHome, FaInfoCircle, FaCalendarAlt, FaChalkboardTeacher, FaComments, FaEnvelope, FaYoutube, FaFacebook, FaInstagram } from 'react-icons/fa';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <a href="#home" className="logo">Yogavidya</a>
        
        <div className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
          <a href="#home" onClick={() => setIsMobileMenuOpen(false)}><FaHome /> Home</a>
          <a href="#about" onClick={() => setIsMobileMenuOpen(false)}><FaInfoCircle /> About</a>
          <a href="#classes" onClick={() => setIsMobileMenuOpen(false)}><FaCalendarAlt /> Classes</a>
          <a href="#teachers" onClick={() => setIsMobileMenuOpen(false)}><FaChalkboardTeacher /> Teachers</a>
          <a href="#testimonials" onClick={() => setIsMobileMenuOpen(false)}><FaComments /> Testimonials</a>
          <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}><FaEnvelope /> Contact</a>
          
          <div className="social-icons-mobile">
            <a href="#"><FaYoutube /></a>
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaInstagram /></a>
          </div>
        </div>
        
        <div className="social-icons">
          <a href="#"><FaYoutube /></a>
          <a href="#"><FaFacebook /></a>
          <a href="#"><FaInstagram /></a>
        </div>
        
        <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;