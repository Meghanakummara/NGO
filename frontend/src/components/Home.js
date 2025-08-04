import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <section className="hero">
        <h1>Welcome to the NGO Intern/Volunteer Portal</h1>
        <p>Empowering change through people like you.</p>
        <button className="register-btn" onClick={() => navigate('/register')}>
          Register Now
        </button>
      </section>

      <section className="info">
        <h2>Why Join Us?</h2>
        <ul>
          <li>✔️ Make a meaningful impact</li>
          <li>✔️ Learn real-world NGO operations</li>
          <li>✔️ Certificate on completion</li>
          <li>✔️ Flexible work hours</li>
        </ul>
      </section>

      <section className="cta">
        <h3>Ready to make a difference?</h3>
        <p>Go to the Register section and apply now!</p>
      </section>
    </div>
  );
}

export default Home;
