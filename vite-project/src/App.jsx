import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Hero from './Hero';
import Classes from './Classes';
import Teachers from './Teachers';
import Testimonials from './Testimonials';
import Contact from './Contact';
import Footer from './Footer';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Classes />
      <Teachers />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;