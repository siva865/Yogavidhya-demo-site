import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Teachers = () => {
  const teachers = [
    {
      id: 1,
      name: "Priya Sharma",
      specialization: "Hatha & Yin Yoga",
      experience: "10 years",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      id: 2,
      name: "Rahul Verma",
      specialization: "Ashtanga Yoga",
      experience: "8 years",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      id: 3,
      name: "Ananya Patel",
      specialization: "Vinyasa Flow",
      experience: "6 years",
      image: "https://randomuser.me/api/portraits/women/68.jpg"
    }
  ];

  return (
    <section id="teachers" className="teachers-section">
      <div className="container">
        <h2 className="section-title">Our Teachers</h2>
        <div className="teachers-grid">
          {teachers.map((teacher) => (
            <div key={teacher.id} className="teacher-card">
              <div className="teacher-image">
                <img src={teacher.image} alt={teacher.name} />
                <div className="social-links">
                  <a href="#"><FaFacebook /></a>
                  <a href="#"><FaTwitter /></a>
                  <a href="#"><FaInstagram /></a>
                </div>
              </div>
              <div className="teacher-info">
                <h3>{teacher.name}</h3>
                <p>{teacher.specialization}</p>
                <span>{teacher.experience} of experience</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teachers;