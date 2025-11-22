import React, { useState } from "react";
import "./Admin_Settings.css";

export default function Admin_Settings() {
  // Tabs
  const [activeTab, setActiveTab] = useState("students");

  // TEMP STUDENT DATA
  const [students] = useState([
    { id: 1, fullname: "Juan Dela Cruz", email: "juan@example.com", year: "10", section: "A", status: "Active" },
    { id: 2, fullname: "Maria Clara", email: "maria@example.com", year: "11", section: "B", status: "Inactive" },
    { id: 3, fullname: "Pedro Santos", email: "pedro@example.com", year: "12", section: "C", status: "Pending" },
  ]);

  // TEMP FACULTY DATA
  const [faculty] = useState([
    { id: 1, fullname: "Mr. Santos", email: "santos@school.edu", role: "Teacher", status: "Active" },
    { id: 2, fullname: "Ms. Reyes", email: "reyes@school.edu", role: "Adviser", status: "Active" },
  ]);

  const [search, setSearch] = useState("");

  const filteredStudents = students.filter(
    (s) =>
      s.fullname.toLowerCase().includes(search.toLowerCase()) ||
      s.email.toLowerCase().includes(search.toLowerCase())
  );

  const filteredFaculty = faculty.filter(
    (f) =>
      f.fullname.toLowerCase().includes(search.toLowerCase()) ||
      f.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="wrapper">   
      
      <div className="user-container"></div>

      <div className="user-management-container">
        <h1 className="user-management-title">User Management Settings</h1>

        {/* SEARCH BAR */}
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search by name or email..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* TABS */}
        <div className="tabs">
          <button
            className={`tab-btn ${activeTab === "students" ? "active" : ""}`}
            onClick={() => setActiveTab("students")}
          >
            Students
          </button>
          <button
            className={`tab-btn ${activeTab === "faculty" ? "active" : ""}`}
            onClick={() => setActiveTab("faculty")}
          >
            Faculty
          </button>
        </div>

        {/* CONTENT CARD */}
        <div className="data-card">
          {activeTab === "students" ? (
            <>
              <h3>Student Accounts</h3>
              <table className="user-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Year</th>
                    <th>Section</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredStudents.map((student) => (
                    <tr key={student.id}>
                      <td>{student.fullname}</td>
                      <td>{student.email}</td>
                      <td>{student.year}</td>
                      <td>{student.section}</td>
                      <td>
                        <span
                          className={`status-tag ${
                            student.status === "Active"
                              ? "status-active"
                              : student.status === "Inactive"
                              ? "status-inactive"
                              : "status-pending"
                          }`}
                        >
                          {student.status}
                        </span>
                      </td>
                    <td>
  <span
    className={`status-tag ${
      student.status === "Active"
        ? "status-active"
        : student.status === "Inactive"
        ? "status-inactive"
        : "status-pending"
    }`}
  >
    {student.status}
  </span>
</td>

<td>
  <button className="action-btn btn-edit" onClick={() => alert('Reset password for ' + student.fullname)}>Reset Password</button>
  <button className="action-btn btn-disable" onClick={() => alert('Toggle account status for ' + student.fullname)}>Activate/Deactivate</button>
  <button className="action-btn btn-edit" onClick={() => alert('Transfer student ' + student.fullname)}>Transfer</button>
</td>


                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          ) : (
            <>
              <h3>Faculty Accounts</h3>
              <table className="user-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredFaculty.map((f) => (
                    <tr key={f.id}>
                      <td>{f.fullname}</td>
                      <td>{f.email}</td>
                      <td>{f.role}</td>
                      <td>
                        <span
                          className={`status-tag ${
                            f.status === "Active" ? "status-active" : "status-inactive"
                          }`}
                        >
                          {f.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
