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
import MyProfile from "./Components/myProfile";
import Schedule from "./Components/schedule";
import Grades from "./Components/grades";
import Attendance from "./Components/attendance";

function StudentDashboard() {
  const location = useLocation();
  const isMainDashboard = location.pathname === "/student_dashboard";

  return (
    <div
      className="dashboard-container"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <nav className="sidebar">
        <ul className="nav-list">
          <li className={`nav-item ${isMainDashboard ? "active" : ""}`}>
            <Link to="/student_dashboard" className="nav-link">
              <FaTachometerAlt className="nav-icon" /> Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/student_dashboard/dashboard/myprofile"
              className="nav-link"
            >
              <FaUser className="nav-icon" /> My Profile
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/student_dashboard/dashboard/schedule"
              className="nav-link"
            >
              <FaCalendarAlt className="nav-icon" /> Schedule
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/student_dashboard/dashboard/grades"
              className="nav-link"
            >
              <FaBook className="nav-icon" /> Grades
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/student_dashboard/dashboard/attendance"
              className="nav-link"
            >
              <FaClipboardList className="nav-icon" /> Attendance
            </Link>
          </li>
        </ul>
      </nav>

      {isMainDashboard && (
        <>
          <div className="border-box"></div>

          <div className="dashboard-header">
            <div></div>
            <div>Dashboard</div>
          </div>

          {/* NEXT CLASS BOX */}
          <div className="next-class">
            <div className="box-title">Next Class</div>

            <div
              className="small-box"
              onClick={() =>
                (window.location.href =
                  "/student_dashboard/dashboard/schedule")
              }
            >
              View Schedule
            </div>
          </div>

          {/* PROFILE BOX */}
          <div className="Profile">
            <div className="box-title">My Profile</div>

            <div
              className="small-box"
              onClick={() =>
                (window.location.href =
                  "/student_dashboard/dashboard/myprofile")
              }
            >
              Open Profile
            </div>
          </div>

          {/* GWA BOX */}
          <div className="average-grade">
            <div className="box-title">GWA</div>

            <div
              className="small-box"
              onClick={() =>
                (window.location.href =
                  "/student_dashboard/dashboard/grades")
              }
            >
              View Grades
            </div>
          </div>
        </>
      )}

      <Routes>
        <Route path="dashboard/myProfile" element={<MyProfile />} />
        <Route path="dashboard/schedule" element={<Schedule />} />
        <Route path="dashboard/grades" element={<Grades />} />
        <Route path="dashboard/attendance" element={<Attendance />} />
      </Routes>

      <Outlet />
    </div>
  );
}

export default StudentDashboard;
