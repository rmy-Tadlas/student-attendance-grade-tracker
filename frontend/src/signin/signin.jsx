import React, { useState } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import bgImage from "../assets/signinbg.png";
import { FaUser, FaLock, FaClipboardList } from "react-icons/fa";

function Signin() {
  const navigate = useNavigate();
  const [role, setRole] = useState("student"); 

  const handleLogin = (e) => {
    e.preventDefault();


    if (role === "student") navigate("/dashboard");
    else if (role === "faculty") navigate("/faculty");
    else if (role === "admin") navigate("/admin");
  };

  return (
    <div
      className="login-background"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="login-container">
        <div className="left-side">
          <FaClipboardList className="signin-icon" />
          <h1>Welcome to!</h1>
          <h2>Acadexa</h2>
          <h3>Track today, Succeed Tomorrow</h3>
        </div>

        <div className="right-side">
          <div className="login-box">
            <h2>Login</h2>
            <p>Welcome back! Please login to your account.</p>

            <form onSubmit={handleLogin}>
              <div className="input-group">
                <FaUser className="input-icon" />
                <input type="text" placeholder="Username" required />
              </div>

              <div className="input-group">
                <FaLock className="input-icon" />
                <input type="password" placeholder="Password" required />
              </div>

              <div className="input-group">
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="role-select"
                >
                  <option value="student">Student</option>
                  <option value="faculty">Faculty</option>
                  <option value="admin">Admin</option>
                </select>
              </div>

              <button type="submit" className="login-btn">
                Login
              </button>
            </form>

            <p className="signup-text">
              Don’t have an account? <Link to="/signup">Signup</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;
