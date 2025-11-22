// Admin_dashboard.jsx
import React from "react";
import { Link, Outlet, useLocation, Routes, Route } from "react-router-dom";
import {
  FaTachometerAlt,
  FaUser,
  FaUsers,
  FaCogs,
  FaClipboard,
} from "react-icons/fa";
import "./Admin_dashboard.css";
import bgImage from "../assets/adminbg.png";

import Admin_Myprofile from "./Components/Admin_Myprofile";
import Admin_Roles from "./Components/Admin_Roles";
import Admin_Settings from "./Components/Admin_Settings";


function AdminDashboard() {
  const location = useLocation();
  const isMainDashboard = location.pathname === "/admin";

  return (
    <div
      className="admin-dashboard-container"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Sidebar */}
      <nav className="admin-sidebar">
        <ul className="admin-nav-list">
          <li className={`admin-nav-item ${isMainDashboard ? "active" : ""}`}>
            <Link to="/admin" className="admin-nav-link">
              <FaTachometerAlt className="admin-nav-icon" /> Dashboard
            </Link>
          </li>
          <li className="admin-nav-item">
            <Link to="/admin/dashboard/myprofile" className="admin-nav-link">
              <FaUser className="admin-nav-icon" /> My Profile
            </Link>
          </li>
          <li className="admin-nav-item">
            <Link to="/admin/dashboard/roles" className="admin-nav-link">
              <FaUsers className="admin-nav-icon" /> Roles
            </Link>
          </li>
          <li className="admin-nav-item">
            <Link to="/admin/dashboard/settings" className="admin-nav-link">
              <FaCogs className="admin-nav-icon" /> Settings
            </Link>
          </li>
        </ul>
      </nav>

      {/* Main Dashboard Content */}
      {isMainDashboard && (
        <>
          <div className="admin-border-box"></div>
          <div className="dashboard-header">
            <div className="admin-welcome-text">
              Welcome Back, <span className="admin-name">Admin!</span>
            </div>
            <div className="dashboard-title">Dashboard</div>
          </div>

          <div className="admin-total-users">Total Users: 1,250</div>
<div className="admin-active-users">Active Users: 950</div>
<div className="admin-system-status">System Status: Online</div>
<div className="admin-new-registrations">New Registrations: 25</div>

        </>
      )}

      {/* Nested Routes for Admin Sections */}
      <Routes>
        <Route path="dashboard/myprofile" element={<Admin_Myprofile />} />
        <Route path="dashboard/roles" element={<Admin_Roles />} />
        <Route path="dashboard/settings" element={<Admin_Settings />} />
      </Routes>

      <Outlet />
    </div>
  );
}

export default AdminDashboard;
