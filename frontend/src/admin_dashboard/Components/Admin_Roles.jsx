import React, { useState, useEffect } from "react";
import "./Admin_roles.css";

function Admin_Roles() {
  // Faculty form states
  const [facultyName, setFacultyName] = useState("");
  const [facultyEmail, setFacultyEmail] = useState("");
  const [facultyPassword, setFacultyPassword] = useState("");

  // Search for students  ✅ ADDED
  const [searchTerm, setSearchTerm] = useState("");

  // Pending students WITH STATUS  ✅ ADDED
  const [pendingStudents, setPendingStudents] = useState([
    { id: 1, fullname: "John Doe", email: "john@example.com", status: "Pending" },
    { id: 2, fullname: "Jane Smith", email: "jane@example.com", status: "Pending" },
  ]);

  // Handle faculty creation
  const handleFacultySubmit = (e) => {
    e.preventDefault();
    if (!facultyName || !facultyEmail || !facultyPassword) {
      alert("Please fill all fields");
      return;
    }

    const newFaculty = {
      fullname: facultyName,
      email: facultyEmail,
      password: facultyPassword,
      role: "faculty",
      status: "active",
    };

    console.log("Faculty created:", newFaculty);
    alert("Faculty account created successfully!");
    setFacultyName("");
    setFacultyEmail("");
    setFacultyPassword("");
  };

  // Handle student approval/rejection WITH STATUS  ✅ ADDED
  const handleStudentAction = (id, action) => {
    setPendingStudents((prev) =>
      prev.map((s) =>
        s.id === id
          ? { ...s, status: action === "accept" ? "Accepted" : "Rejected" }
          : s
      )
    );

    alert(
      action === "accept"
        ? `Student ${id} approved!`
        : `Student ${id} rejected!`
    );

    // Optionally remove if you still want to delete
    // setPendingStudents(pendingStudents.filter((s) => s.id !== id));
  };

  // FILTER STUDENTS FOR SEARCH  ✅ ADDED
  const filteredStudents = pendingStudents.filter((student) =>
    student.fullname.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="admin-profile-container">

      {/* Pending Student Requests */}
      <div className="pending-students">
        <h2>Pending Student Accounts</h2>

        {/* SEARCH BAR  ✅ ADDED */}
        <input
          type="text"
          className="search-input"
          placeholder="Search student..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {filteredStudents.length === 0 && <p>No pending requests.</p>}

        {filteredStudents.map((student) => (
          <div key={student.id} className="student-row">
            <p>{student.fullname}</p>
            <p>{student.email}</p>

            {/* STATUS COLUMN  ✅ ADDED */}
            <p className={`status ${student.status.toLowerCase()}`}>
              {student.status}
            </p>

            <button onClick={() => handleStudentAction(student.id, "accept")}>
              Accept
            </button>
            <button onClick={() => handleStudentAction(student.id, "reject")}>
              Reject
            </button>
          </div>
        ))}
      </div>

      {/* Create Faculty Account */}
      <div className="faculty-form-container">
        <h2>Create Faculty Account</h2>
        <form onSubmit={handleFacultySubmit}>
          <div>
            <label>Full Name:</label>
            <input
              type="text"
              value={facultyName}
              onChange={(e) => setFacultyName(e.target.value)}
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={facultyEmail}
              onChange={(e) => setFacultyEmail(e.target.value)}
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={facultyPassword}
              onChange={(e) => setFacultyPassword(e.target.value)}
            />
          </div>
          <button type="submit">Create Account</button>
        </form>
      </div>
    </div>
  );
}

export default Admin_Roles;
