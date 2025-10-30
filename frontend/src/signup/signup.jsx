import React from "react";
import "./signup.css";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import bgImage from "../assets/signupbg.png";

function Signup() {
  return (
    <div
      className="signup-background"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="signup-container">
        <div className="left-signup-info">
          <FaUser className="signup-icon" />
          <h1>Welcome to!</h1>
          <h2>Acadexa!</h2>
          <h3>Track today, Succeed Tomorrow</h3>
        </div>

        <div className="signup-right">
          <div className="signup-box">
            <h2>Create Account</h2>
            <p>Join us and start tracking your progress today!</p>

            <form>
              <div className="input-user">
                <input type="text" placeholder="Full Name" required />
              </div>

              <div className="input-user">
                <input type="email" placeholder="Email Address" required />
              </div>

              <div className="input-user">
                <input type="password" placeholder="Password" required />
              </div>

    
              <div className="input-user">
                <input type="number" placeholder="Age" required />
              </div>

              <div className="input-user">
                <input type="text" placeholder="Position" required />
              </div>

              <button type="submit" className="signup-btn">
                Sign Up
              </button>
            </form>

            <p className="signin-text">
              Already have an account? <Link to="/signin">Login</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
