import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="aboutus-page text-light">
      <div className="container py-5">
        <h1 className="display-4 fw-bold text-center mb-5">About <span className="highlight">WinMegaHub</span></h1>

        {/* Intro */}
        <div className="section glass p-4 rounded-4 mb-4">
          <p className="lead">
            WinMegaHub is your ultimate destination for exciting contests and competitions where <strong>talent meets opportunity</strong>. 
            We provide a transparent, fair, and rewarding platform for individuals to showcase their skills, knowledge, and creativity.
          </p>
          <p>Our goal is to foster a dynamic community of passionate participants who love challenges and winning rewards.</p>
        </div>

        {/* Mission */}
        <div className="section glass p-4 rounded-4 mb-4">
          <h3 className="fw-semibold mb-3 text-warning">🎯 Our Mission</h3>
          <p>
            At WinMegaHub, our mission is to create a competitive yet fun environment that empowers participants to push their limits and achieve greatness.
            Whether you're a student, a professional, or someone seeking thrilling challenges, our platform is designed to <strong>bring out the best in you</strong>.
          </p>
          <p>We believe talent deserves recognition — our contests are a gateway to endless possibilities.</p>
        </div>

        {/* What We Offer */}
        <div className="section glass p-4 rounded-4 mb-4">
          <h3 className="fw-semibold mb-3 text-warning">🚀 What We Offer</h3>
          <ul className="styled-list">
            <li>🎮 Online Contests – Participate in various competitions and win exciting rewards.</li>
            <li>🧠 Skill-Based Challenges – Test your expertise and gain recognition.</li>
            <li>🏆 Exclusive Prizes & Recognition – Win cash, certificates, and exclusive goodies.</li>
            <li>⚖️ Transparent & Fair Play – Equal chances for everyone, always.</li>
            <li>🤝 Community Engagement – Connect, share, and grow together.</li>
            <li>📈 Learning & Growth – Every contest is a step toward self-improvement.</li>
          </ul>
        </div>

        {/* Why Choose Us */}
        <div className="section glass p-4 rounded-4 mb-5">
          <h3 className="fw-semibold mb-3 text-warning">💡 Why Choose WinMegaHub?</h3>
          <ul className="styled-list">
            <li>📚 Diverse Competition Categories – Academic quizzes, creativity & more.</li>
            <li>🖥️ User-Friendly Experience – Intuitive and seamless navigation.</li>
            <li>🔒 Trust & Security – High standards of fairness and transparency.</li>
            <li>📅 Regular Contests & Events – Stay excited with fresh challenges.</li>
            <li>🔥 Passion-Driven Community – Ambitious people just like you!</li>
          </ul>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h4 className="mb-4">WinMegaHub is more than just a platform – it’s a <span className="text-warning">movement</span>!</h4>
          <p className="mb-4">Join us today and be part of a passionate community that thrives on <strong>skills, passion, and the spirit of competition.</strong></p>
          <a href="/register" className="btn btn-warning btn-lg shadow">Join the Movement 🚀</a>
        </div>
      </div>
    </div>
  );
};

export default About;
