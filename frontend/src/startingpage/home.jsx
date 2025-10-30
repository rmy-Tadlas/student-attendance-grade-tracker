import React from "react";
import { useNavigate } from "react-router-dom";
import { FaClipboardList } from "react-icons/fa";
import bgImage from "../assets/background page.png";
import "./App.css"; 

function Home() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
  navigate("/signin");
};



  return (
    <div
      className="homepage"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <nav className="main-nav">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
      </nav>

      <header className="top-text">
        <FaClipboardList className="logo-icon" />
        <h1>Acadexa</h1>
      </header>
      <header className="hero-text">
        
        <h2>TRACK TODAY</h2>
        <h3>SUCCEED TOMORROW</h3>
        <h4>
          Start making every study session, assignment, and habit count.
          With the right student tracker, your progress becomes visible,
          your goals become achievable, and your future becomes unstoppable.
          Don’t wait for change—track it. Your journey to better focus,
          higher performance, and academic achievement starts today.
        </h4>

        <div className="buttons">
          <button className="btn primary" onClick={handleGetStarted}>
            Get Started
          </button>
          <a href="#about" className="btn secondary">About us</a>
        </div>
      </header>
    </div>
  );
}

export default Home;
