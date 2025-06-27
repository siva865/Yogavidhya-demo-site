import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Yogavidya</h3>
            <p>Transforming lives through the ancient practice of yoga. Join us on the journey to wellness and inner peace.</p>
            <div className="social-icons">
              <a href="#"><FaFacebook /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaYoutube /></a>
            </div>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#classes">Classes</a></li>
              <li><a href="#teachers">Teachers</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Classes</h3>
            <ul>
              <li><a href="#">Hatha Yoga</a></li>
              <li><a href="#">Vinyasa Flow</a></li>
              <li><a href="#">Ashtanga Yoga</a></li>
              <li><a href="#">Yin Yoga</a></li>
              <li><a href="#">Meditation</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contact Info</h3>
            <ul>
              <li>123 Yoga Street, Rishikesh</li>
              <li>info@yogavidya.com</li>
              <li>+91 9876543210</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Yogavidya. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;