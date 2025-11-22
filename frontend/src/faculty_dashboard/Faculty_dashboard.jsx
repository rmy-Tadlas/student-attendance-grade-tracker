import React from "react";
import { Link, Outlet, Routes, Route, useLocation } from "react-router-dom";
import {
  FaTachometerAlt,
  FaUserTie,
  FaCalendarAlt,
  FaBookOpen,
  FaClipboard,
} from "react-icons/fa";
import "./faculty_dashboard.css";
import bgImage from "../assets/facultybackground.png";

import Faculty_Myprofile from "./Components/Faculty_Myprofile";
import Faculty_Schedule from "./Components/Faculty_Schedule";
import Faculty_Grades from "./Components/Faculty_Grades";
import Faculty_Attendance from "./Components/Faculty_Attendance";

function FacultyDashboard() {
  const location = useLocation();
  const isMainDashboard = location.pathname === "/faculty";

  return (
    <div className="faculty-dashboard-container" style={{ backgroundImage: `url(${bgImage})` }}>
      <nav className="faculty-sidebar">
        <ul className="faculty-nav-list">
          <li className={`faculty-nav-item ${isMainDashboard ? "active" : ""}`}>
            <Link to="/faculty" className="faculty-nav-link">
              <FaTachometerAlt className="faculty-nav-icon" /> Dashboard
            </Link>
          </li>
          <li className="faculty-nav-item">
            <Link to="/faculty/dashboard/myprofile" className="faculty-nav-link">
              <FaUserTie className="faculty-nav-icon" /> My Profile
            </Link>
          </li>
          <li className="faculty-nav-item">
            <Link to="/faculty/dashboard/schedule" className="faculty-nav-link">
              <FaCalendarAlt className="faculty-nav-icon" /> Schedule
            </Link>
          </li>
          <li className="faculty-nav-item">
            <Link to="/faculty/dashboard/grades" className="faculty-nav-link">
              <FaBookOpen className="faculty-nav-icon" /> Grades
            </Link>
          </li>
          <li className="faculty-nav-item">
            <Link to="/faculty/dashboard/attendance" className="faculty-nav-link">
              <FaClipboard className="faculty-nav-icon" /> Attendance
            </Link>
          </li>
        </ul>
      </nav>

      {isMainDashboard && (
        <>
          <div className="faculty-border-box"></div>
          <div className="dashboard-header">
            <div className="faculty-welcome-text">
              Welcome Back, <span className="faculty-name">Faculty!</span>
            </div>
            <div className="dashboard-title">Dashboard</div>
          </div>
          <div className="faculty-classes-today">Classes Today</div>
          <div className="faculty-students-count">Total Students</div>
          <div className="faculty-reports-status">Pending Reports</div>
          <div className="faculty-performance">Performance Overview</div>
          <div className="faculty-meetings">Upcoming Meetings</div>
        </>
      )}

      <Routes>
        <Route path="dashboard/myprofile" element={<Faculty_Myprofile />} />
        <Route path="dashboard/schedule" element={<Faculty_Schedule />} />
        <Route path="dashboard/grades" element={<Faculty_Grades />} />
        <Route path="dashboard/attendance" element={<Faculty_Attendance />} />
      </Routes>

      <Outlet />
    </div>
  );
}

export default FacultyDashboard;
