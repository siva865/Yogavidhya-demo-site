import React from 'react';
import { FaRegClock, FaUserAlt, FaLeaf } from 'react-icons/fa';

const Classes = () => {
  const classes = [
    {
      id: 1,
      title: "Hatha Yoga",
      description: "Traditional yoga practice focusing on physical postures and breathing techniques.",
      time: "6:00 AM - 7:00 AM",
      level: "Beginner",
      icon: <FaLeaf />
    },
    {
      id: 2,
      title: "Vinyasa Flow",
      description: "Dynamic sequence of poses that flow from one to another with breath.",
      time: "8:00 AM - 9:00 AM",
      level: "Intermediate",
      icon: <FaLeaf />
    },
    {
      id: 3,
      title: "Ashtanga Yoga",
      description: "Fast-paced, intense style of yoga with a set sequence of postures.",
      time: "5:00 PM - 6:30 PM",
      level: "Advanced",
      icon: <FaLeaf />
    },
    {
      id: 4,
      title: "Yin Yoga",
      description: "Slow-paced style with poses held for longer periods to target deep tissues.",
      time: "7:00 PM - 8:00 PM",
      level: "All Levels",
      icon: <FaLeaf />
    }
  ];

  return (
    <section id="classes" className="classes-section">
      <div className="container">
        <h2 className="section-title">Our Classes</h2>
        <div className="classes-grid">
          {classes.map((cls) => (
            <div key={cls.id} className="class-card">
              <div className="class-icon">{cls.icon}</div>
              <h3>{cls.title}</h3>
              <p>{cls.description}</p>
              <div className="class-info">
                <span><FaRegClock /> {cls.time}</span>
                <span><FaUserAlt /> {cls.level}</span>
              </div>
              <button className="btn">Join Class</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Classes;