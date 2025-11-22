import React from "react";
import "./admin_myprofile.css";
import { FaUserCircle } from "react-icons/fa";

function Admin_Myprofile() {
  return (
    <div className="admin-profile-container">
      <div className="admin-profile-icon">
        <FaUserCircle className="admin-user-icon" aria-hidden="true" />
        <div className="admin-profile-title">My Profile</div>
      </div>

      <div className="admin-info-box">
        <h1>Personal Information</h1>

        <div className="admin-info-row">
          <div className="admin-label">Full Name:</div>
          <div className="admin-info-field"></div>
        </div>

        <div className="admin-info-row">
          <div className="admin-label">Email Address:</div>
          <div className="admin-info-field"></div>
        </div>

        <div className="admin-info-row">
          <div className="admin-label">Gender:</div>
          <div className="admin-info-field"></div>
        </div>

        <div className="admin-info-row">
          <div className="admin-label">Age:</div>
          <div className="admin-info-field"></div>
        </div>

        <div className="admin-info-row">
          <div className="admin-label">Position:</div>
          <div className="admin-info-field"></div>
        </div>
      </div>
    </div>
  );
}

export default Admin_Myprofile;
