import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Admin_Roles.css";

function Admin_Roles() {
  const navigate = useNavigate();

  const [facultyList, setFacultyList] = useState([
    { id: 1, fullname: "Dr. John Doe", email: "john@example.com", contact: "09123456789" },
    { id: 2, fullname: "Prof. Jane Smith", email: "jane@example.com", contact: "09987654321" },
  ]);

  return (
    <div className="admin-roles-container">
      <h2>Faculty List</h2>
      <table className="faculty-table">
        <thead>
          <tr>
            <th>Faculty</th>
            <th>Email</th>
            <th>Contact</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {facultyList.map((faculty) => (
            <tr key={faculty.id}>
              <td>{faculty.fullname}</td>
              <td>{faculty.email}</td>
              <td>{faculty.contact}</td>
              <td>
                <button
                  onClick={() => navigate(`/admin/dashboard/faculty/${faculty.id}`)
}
                  className="view-btn"
                >
                  View Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Admin_Roles;
