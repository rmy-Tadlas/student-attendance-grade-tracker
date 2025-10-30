import React from "react";
import "./faculty_myprofile.css";
import { FaUserCircle } from "react-icons/fa";

function Faculty_Myprofile() {
  return (
    <div className="profile-container">
      <div className="profile-icon">
        <FaUserCircle className="user-icon" aria-hidden="true" />
        <div className="profile-title">My Profile</div>
      </div>

      <div className="info-box">
        <h1>Personal Information</h1>

        <div className="info-row">
          <div className="label">Full Name:</div>
          <div className="info-field"></div>
        </div>

        <div className="info-row">
          <div className="label">Email Address:</div>
          <div className="info-field"></div>
        </div>

        <div className="info-row">
          <div className="label">Gender:</div>
          <div className="info-field"></div>
        </div>

        <div className="info-row">
          <div className="label">Age:</div>
          <div className="info-field"></div>
        </div>

        <div className="info-row">
          <div className="label">Position:</div>
          <div className="info-field"></div>
        </div>
      </div>
    </div>
  );
}

export default Faculty_Myprofile;
