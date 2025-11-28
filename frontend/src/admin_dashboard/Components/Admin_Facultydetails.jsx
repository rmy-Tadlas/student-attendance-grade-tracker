// Admin_Facultydetails.jsx
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Admin_Facultydetails.css";

function Admin_Facultydetails() {
  const { id } = useParams();

  const [faculty, setFaculty] = useState({ fullname: "", email: "", contact: "" });
  const [students, setStudents] = useState([
    { id: 1, name: "Alice", email: "alice@example.com", term: "1st", subject: "Math", section: "A" },
    { id: 2, name: "Bob", email: "bob@example.com", term: "1st", subject: "Math", section: "A" },
  ]);

  const [filterTerm, setFilterTerm] = useState("");
  const [filterSubject, setFilterSubject] = useState("");
  const [filterSection, setFilterSection] = useState("");

  const [newStudent, setNewStudent] = useState({ name: "", email: "", term: "", subject: "", section: "" });

  useEffect(() => {
    if (id === "1") setFaculty({ fullname: "Dr. John Doe", email: "john@example.com", contact: "09123456789" });
    if (id === "2") setFaculty({ fullname: "Prof. Jane Smith", email: "jane@example.com", contact: "09987654321" });
  }, [id]);

  const handleAddStudent = () => {
    if (!newStudent.name || !newStudent.email || !newStudent.term || !newStudent.subject || !newStudent.section) return;
    setStudents([...students, { id: Date.now(), ...newStudent }]);
    setNewStudent({ name: "", email: "", term: "", subject: "", section: "" });
  };

  const filteredStudents = students.filter(
    (s) =>
      (filterTerm ? s.term === filterTerm : true) &&
      (filterSubject ? s.subject === filterSubject : true) &&
      (filterSection ? s.section === filterSection : true)
  );

  return (
    <div className="facultycontainer"> 
      <div className="faculty-details-container">
        <h2>Faculty Details</h2>
        <div className="faculty-info">
          <p><strong>Faculty :</strong> {faculty.fullname}</p>
          <p><strong>Email :</strong> {faculty.email}</p>
          <p><strong>Contact :</strong> {faculty.contact}</p>
        </div>

        <div className="student-filters">
          <select value={filterTerm} onChange={(e) => setFilterTerm(e.target.value)}>
            <option value="">Select Term</option>
            <option value="1st">1st Term</option>
            <option value="2nd">2nd Term</option>
          </select>
          <select value={filterSubject} onChange={(e) => setFilterSubject(e.target.value)}>
            <option value="">Select Subject</option>
            <option value="Math">Math</option>
            <option value="Science">Science</option>
          </select>
          <select value={filterSection} onChange={(e) => setFilterSection(e.target.value)}>
            <option value="">Select Section</option>
            <option value="A">A</option>
            <option value="B">B</option>
          </select>
        </div>

        <div className="add-student">
          <input type="text" placeholder="Student Name" value={newStudent.name} onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })} />
          <input type="email" placeholder="Student Email" value={newStudent.email} onChange={(e) => setNewStudent({ ...newStudent, email: e.target.value })} />
          <select value={newStudent.term} onChange={(e) => setNewStudent({ ...newStudent, term: e.target.value })}>
            <option value="">Select Term</option>
            <option value="1st">1st Term</option>
            <option value="2nd">2nd Term</option>
          </select>
          <select value={newStudent.subject} onChange={(e) => setNewStudent({ ...newStudent, subject: e.target.value })}>
            <option value="">Select Subject</option>
            <option value="Math">Math</option>
            <option value="Science">Science</option>
          </select>
          <select value={newStudent.section} onChange={(e) => setNewStudent({ ...newStudent, section: e.target.value })}>
            <option value="">Select Section</option>
            <option value="A">A</option>
            <option value="B">B</option>
          </select>
          <button onClick={handleAddStudent} className="add-btn">Add Student</button>
        </div>

        <table className="student-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Term</th>
              <th>Subject</th>
              <th>Section</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map((s) => (
              <tr key={s.id}>
                <td>{s.name}</td>
                <td>{s.email}</td>
                <td>{s.term}</td>
                <td>{s.subject}</td>
                <td>{s.section}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Admin_Facultydetails;
