import React from "react";
import { Link, Outlet, useLocation, Routes, Route } from "react-router-dom";
import {
  FaTachometerAlt,
  FaUser,
  FaCalendarAlt,
  FaBook,
  FaClipboardList,
} from "react-icons/fa";
import "./student_dashboard.css";
import bgImage from "../assets/studentdashboard.png";
import MyProfile from "./components/MyProfile";
import Schedule from "./components/Schedule";
import Grades from "./components/Grades";
import Attendance from "./components/Attendance";

function StudentDashboard() {
  const location = useLocation();
  const isMainDashboard = location.pathname === "/dashboard";

  return (
    <div
      className="dashboard-container"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <nav className="sidebar">
        <ul className="nav-list">
          <li className={`nav-item ${isMainDashboard ? "active" : ""}`}>
            <Link to="/dashboard" className="nav-link">
              <FaTachometerAlt className="nav-icon" /> Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/dashboard/myprofile" className="nav-link">
              <FaUser className="nav-icon" /> My Profile
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/dashboard/schedule" className="nav-link">
              <FaCalendarAlt className="nav-icon" /> Schedule
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/dashboard/grades" className="nav-link">
              <FaBook className="nav-icon" /> Grades
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/dashboard/attendance" className="nav-link">
              <FaClipboardList className="nav-icon" /> Attendance
            </Link>
          </li>
        </ul>
      </nav>


      {isMainDashboard && (
        <>
          <div className="border-box"></div>

          <div className="dashboard-header">
            <div>
             
            </div>
            <div>Dashboard</div>
          </div>

          <div className="next-class">Next class</div>
          <div className="attendance">Attendance rate</div>
          <div className="late">Lates</div>
          <div className="classes-attended">Total classes attended</div>
          <div className="absenses">Absences</div>
          <div className="average-grade">Average grade</div>
        </>
      )}

      <Routes>
        <Route path="myprofile" element={<MyProfile />} />
        <Route path="schedule" element={<Schedule />} />
        <Route path="grades" element={<Grades />} />
        <Route path="attendance" element={<Attendance />} />
      </Routes>

      <Outlet />
    </div>
  );
}

export default StudentDashboard;