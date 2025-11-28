import React, { useState } from "react";
import "./admin_myprofile.css";
import { FaUserCircle, FaCamera } from "react-icons/fa";

function Admin_Myprofile() {
  const [profilePhoto, setProfilePhoto] = useState(null);

  const handlePhotoChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        setProfilePhoto(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="admin-profile-container">
      <div className="admin-profile-icon">
        {profilePhoto ? (
          <img src={profilePhoto} alt="Profile" className="profile-img" />
        ) : (
          <FaUserCircle className="user-icon" />
        )}
        <input
          type="file"
          id="photo-upload"
          onChange={handlePhotoChange}
          style={{ display: "none" }}
        />
        <label htmlFor="photo-upload" className="upload-overlay">
          <FaCamera />
        </label>
        <div className="admin-profile-title">My Profile</div>
      </div>

      <div className="admin-info-box">
        <h1>Personal Information</h1>

        <div className="admin-info-row">
          <div className="admin-label">Full Name:</div>
          <div className="admin-info-field">John Doe</div>
        </div>

        <div className="admin-info-row">
          <div className="admin-label">Email Address:</div>
          <div className="admin-info-field">admin@example.com</div>
        </div>

        <div className="admin-info-row">
          <div className="admin-label">Gender:</div>
          <div className="admin-info-field">Male</div>
        </div>

        <div className="admin-info-row">
          <div className="admin-label">Age:</div>
          <div className="admin-info-field">30</div>
        </div>

        <div className="admin-info-row">
          <div className="admin-label">Position:</div>
          <div className="admin-info-field">Administrator</div>
        </div>
      </div>
    </div>
  );
}

export default Admin_Myprofile;
