import React, { useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";
import bgImage from "../assets/signinbg.png";
import { FaUser, FaLock, FaClipboardList } from "react-icons/fa";
// import axiosClient from "../api/axiosClient";  // DISABLED temporarily

export default function SignIn() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [role, setRole] = useState("student");
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  //  TEMPORARY BYPASS (NO BACKEND)
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simulate successful login
    alert(`TEMP LOGIN SUCCESS: Logged in as ${role}`);

    // Redirect based on selected role
    if (role === "student") window.location.href = "/student_dashboard";
    if (role === "faculty") window.location.href = "/faculty";
    if (role === "admin") window.location.href = "/admin";
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

            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <FaUser className="input-icon" />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="input-group">
                <FaLock className="input-icon" />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={form.password}
                  onChange={handleChange}
                  required
                />
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

            {message && <p className="login-message">{message}</p>}

            <p className="signup-text">
              Don’t have an account? <Link to="/signup">Signup</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
