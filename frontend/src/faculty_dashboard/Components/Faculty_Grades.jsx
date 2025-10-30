import React, { useState } from "react";
import "./Faculty_Grades.css";

function Faculty_Grades() {
  const [selectedSection, setSelectedSection] = useState("all");
  const [grades, setGrades] = useState([ 

    // just a example student data  like sa subject, section, name, and grade
    { id: 1, subject: "Mathematics 101", section: "BSIT 1A", name: "Juan Dela Cruz", grade: 92 },
    { id: 2, subject: "Mathematics 101", section: "BSIT 1A", name: "Maria Santos", grade: 88 },
    { id: 3, subject: "Programming 1", section: "BSIT 2A", name: "Jose Ramirez", grade: 95 },
    { id: 4, subject: "Database Systems", section: "BSIT 3A", name: "Anna Lopez", grade: 90 },
    { id: 5, subject: "Physics 102", section: "BSIT 1B", name: "Mark Villanueva", grade: 87 },
    { id: 6, subject: "Physics 102", section: "BSIT 1B", name: "Ella Cruz", grade: 85 },
  ]);

  const handleGradeChange = (id, value) => {
    const updatedGrades = grades.map((g) =>
      g.id === id ? { ...g, grade: value } : g
    );
    setGrades(updatedGrades);
  };

  const filteredGrades =
    selectedSection === "all"
      ? grades
      : grades.filter((g) => g.section === selectedSection);

  return (
    <div className="faculty-grades-container">
      <h1 className="faculty-grades-title"> Grade Records</h1>

      <div className="filter-container">
        <label htmlFor="section-select">Filter by Section:</label>
        <select
          id="section-select"
          value={selectedSection}
          onChange={(e) => setSelectedSection(e.target.value)}
        >
          <option value="all">All Sections</option>
          <option value="BSIT 1A">BSIT 1A</option>
          <option value="BSIT 1B">BSIT 1B</option>
          <option value="BSIT 2A">BSIT 2A</option>
          <option value="BSIT 3A">BSIT 3A</option>
        </select>
      </div>

      <table className="faculty-grades-table">
        <thead>
          <tr>
            <th>SUBJECT</th>
            <th>SECTION</th>
            <th>STUDENT NAME</th>
            <th>GRADE</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {filteredGrades.map((student) => (
            <tr key={student.id}>
              <td>{student.subject}</td>
              <td>{student.section}</td>
              <td>{student.name}</td>
              <td>
                <input
                  type="number"
                  min="0"
                  max="100"
                  value={student.grade}
                  onChange={(e) =>
                    handleGradeChange(student.id, e.target.value)
                  }
                />
              </td>
              <td>
                <button className="save-btn">Save</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Faculty_Grades;
