import React, { useState, useEffect } from "react";
import "./Faculty_Attendance.css";

function Faculty_Attendance() {
  const [selectedSection, setSelectedSection] = useState("BSIT 1B");
  const [selectedDate, setSelectedDate] = useState("");
  const [isViewingHistory, setIsViewingHistory] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState("IT 110");

  const subjectStudents = {
    "IT 110": [
      { name: "Mark Dela Cruz", status: "Present" },
      { name: "Anna Villanueva", status: "Excused" },
      { name: "Leo Mendoza", status: "Absent" },
    ],
    "IT 109": [
      { name: "Maria Santos", status: "Present" },
      { name: "Ben Reyes", status: "Absent" },
      { name: "Kurt Salvador", status: "Excused" },
    ],
    "IT 108": [
      { name: "John Carlo", status: "Present" },
      { name: "Michelle Garnet", status: "Present" },
      { name: "Paolo Ortega", status: "Absent" },
    ],
    "IT 107": [
      { name: "Samantha Cruz", status: "Excused" },
      { name: "Elijah Torres", status: "Present" },
      { name: "Amelia Lewis", status: "Present" },
      { name: "Cardo Dalisay", status: "Excused" },
      { name: "Cardo Montenegro", status: "Present" },
      { name: "Cardo Panday", status: "Present" },
      { name: "Rico Navarro", status: "Present" },
      { name: "Emma Carter", status: "Excused" },
      { name: "Liam Johnson", status: "Present" },
      { name: "Olivia Martinez", status: "Present" },
      { name: "Tangol Montenegro", status: "Present" },
      { name: "Noah Smith", status: "Present" },
      { name: "Ava Thompson", status: "Present" },
      { name: "Ethan Davis", status: "Excused" },
      { name: "Sophia Wilson", status: "Present" },
      { name: "Mason Brown", status: "Present" },
    ],
  };

  const [students, setStudents] = useState(subjectStudents[selectedSubject]);

  useEffect(() => {
    setStudents(subjectStudents[selectedSubject]);
  }, [selectedSubject]);

  const handleSaveAttendance = () => {
    if (!selectedDate) {
      alert("Please select a date before saving attendance.");
      return;
    }
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 2000);
  };

  const presentCount = students.filter((s) => s.status === "Present").length;
  const absentCount = students.filter((s) => s.status === "Absent").length;
  const excusedCount = students.filter((s) => s.status === "Excused").length;

  return (
    <div className="faculty-attendance-container">
      <h1 className="attendance-title">Faculty Attendance Tracker</h1>

      {showNotification && (
        <div className="notification">✅ Attendance saved successfully!</div>
      )}

      <div className="subject-controls">
        <div className="subject-filter">
          <label>Subject:</label>
          <select
            value={selectedSubject}
            onChange={(e) => setSelectedSubject(e.target.value)}
          >
            {Object.keys(subjectStudents).map((subj, idx) => (
              <option key={idx} value={subj}>
                {subj}
              </option>
            ))}
          </select>
        </div>
      </div>

      {!isViewingHistory && (
        <>
          <div className="attendance-controls">
            <div className="attendance-filter">
              <label>Section:</label>
              <select
                value={selectedSection}
                onChange={(e) => setSelectedSection(e.target.value)}
              >
                <option value="BSIT 1B">BSIT 1B</option>
                <option value="BSIT 2B">BSIT 2B</option>
              </select>
            </div>

            <div className="attendance-date">
              <label>Date:</label>
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
              />
            </div>

            <div className="attendance-summary">
              <div className="summary-box present-box">
                <h3>Present</h3>
                <p>{presentCount}</p>
              </div>
              <div className="summary-box absent-box">
                <h3>Absent</h3>
                <p>{absentCount}</p>
              </div>
              <div className="summary-box excused-box">
                <h3>Excused</h3>
                <p>{excusedCount}</p>
              </div>
            </div>
          </div>

          {/* Scrollable Students Table */}
          <div className="attendance-table-wrapper">
            <table className="attendance-table">
              <thead>
                <tr>
                  <th>Student Name</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {students.map((s, index) => (
                  <tr key={index}>
                    <td>{s.name}</td>
                    <td className="status-buttons">
                      <button
                        className={`status-btn present ${
                          s.status === "Present" ? "active" : ""
                        }`}
                        onClick={() => {
                          const updated = [...students];
                          updated[index].status = "Present";
                          setStudents(updated);
                        }}
                      >
                        ✓
                      </button>
                      <button
                        className={`status-btn absent ${
                          s.status === "Absent" ? "active" : ""
                        }`}
                        onClick={() => {
                          const updated = [...students];
                          updated[index].status = "Absent";
                          setStudents(updated);
                        }}
                      >
                        X
                      </button>
                      <button
                        className={`status-btn excused ${
                          s.status === "Excused" ? "active" : ""
                        }`}
                        onClick={() => {
                          const updated = [...students];
                          updated[index].status = "Excused";
                          setStudents(updated);
                        }}
                      >
                        O
                      </button>

                      {/* === ADDITION START === */}
                      {/* This span displays the current status text next to the buttons */}
                      <span className="status-text">{s.status}</span>
                      {/* === ADDITION END === */}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <button className="save-btn" onClick={handleSaveAttendance}>
            Save Attendance
          </button>
        </>
      )}
    </div>
  );
}

export default Faculty_Attendance;
