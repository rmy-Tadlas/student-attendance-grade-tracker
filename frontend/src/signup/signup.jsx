import React, { useState } from "react";
import "./signup.css";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import bgImage from "../assets/signupbg.png";
import api from "../api/axiosClient";

export default function SignUp() {
  const [form, setForm] = useState({
    fullname: "",
    email: "",
    password: "",
    password_confirmation: "",
    role: "student", // default role
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/register", form);
      setMessage("Account created successfully! You can now log in.");
    } catch (err) {
      setMessage(
        "Error creating account: " + (err.response?.data?.message || err.message)
      );
    }
  };

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

            <form onSubmit={handleSubmit}>
              <div className="input-user">
                <input
                  type="text"
                  name="fullname"
                  placeholder="Full Name"
                  value={form.fullname}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="input-user">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="input-user">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={form.password}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="input-user">
                <input
                  type="password"
                  name="password_confirmation"
                  placeholder="Confirm Password"
                  value={form.password_confirmation}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* ✅ Role Dropdown */}
              <div className="input-user">
                <select
                  name="role"
                  value={form.role}
                  onChange={handleChange}
                  required
                >
                  <option value="student">Student</option>
                  <option value="faculty">Faculty</option>
                  <option value="admin">Admin</option>
                </select>
              </div>

              <button type="submit" className="signup-btn">
                Sign Up
              </button>
            </form>

            {message && <p className="signup-message">{message}</p>}

            <p className="signin-text">
              Already have an account? <Link to="/signin">Login</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}