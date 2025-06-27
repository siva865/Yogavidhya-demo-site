import React from 'react';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sanjay Mehta",
      role: "Business Owner",
      review: "Yogavidya transformed my life. After just 3 months of practice, my back pain is gone and I feel more energetic than ever.",
      rating: 5
    },
    {
      id: 2,
      name: "Neha Kapoor",
      role: "Software Engineer",
      review: "The teachers are incredibly knowledgeable and supportive. The studio has a peaceful atmosphere that makes it easy to focus.",
      rating: 5
    },
    {
      id: 3,
      name: "Arjun Singh",
      role: "Doctor",
      review: "As a medical professional, I appreciate the scientific approach Yogavidya takes to yoga. It's not just exercise but holistic wellness.",
      rating: 4
    }
  ];

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        <h2 className="section-title">Student Testimonials</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <FaQuoteLeft className="quote-icon" />
              <p>{testimonial.review}</p>
              <div className="rating">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className={i < testimonial.rating ? 'filled' : ''} />
                ))}
              </div>
              <div className="author">
                <h4>{testimonial.name}</h4>
                <span>{testimonial.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;