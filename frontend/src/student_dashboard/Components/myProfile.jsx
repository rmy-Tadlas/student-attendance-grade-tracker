import React, { useState, useEffect } from "react";
import { FaUserCircle, FaCamera } from "react-icons/fa";
import "./myProfile.css";

function MyProfile() {
  // Load saved image from localStorage if exists
  const [profilePhoto, setProfilePhoto] = useState(
    localStorage.getItem("profilePhoto") || null
  );

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePhoto(reader.result);
        // Save to localStorage
        localStorage.setItem("profilePhoto", reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="profile-icon">
          {profilePhoto ? (
            <img src={profilePhoto} alt="Profile" className="profile-img" />
          ) : (
            <FaUserCircle className="user-icon" />
          )}
          <input type="file" id="photo-upload" onChange={handlePhotoChange} />
          <label htmlFor="photo-upload" className="upload-overlay">
            <FaCamera />
          </label>
        </div>
        <div className="profile-title">My Profile</div>
      </div>

      <div className="info-box">
        <h1>Personal Information</h1>
        <div className="info-row">
          <div className="label">Full Name:</div>
          <div className="info-field">John Doe</div>
        </div>
        <div className="info-row">
          <div className="label">Email Address:</div>
          <div className="info-field">john.doe@example.com</div>
        </div>
        <div className="info-row">
          <div className="label">Gender:</div>
          <div className="info-field">Male</div>
        </div>
        <div className="info-row">
          <div className="label">Age:</div>
          <div className="info-field">20</div>
        </div>
        <div className="info-row">
          <div className="label">Program:</div>
          <div className="info-field">BS Information Technology</div>
        </div>
      </div>
    </div>
  );
}

export default MyProfile;
