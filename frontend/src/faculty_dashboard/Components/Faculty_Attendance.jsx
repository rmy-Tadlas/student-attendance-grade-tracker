import React, { useState } from "react";
import "./Faculty_Attendance.css";

function Faculty_Attendance() {
  const [selectedSection, setSelectedSection] = useState("BSIT 1B");
  const [selectedDate, setSelectedDate] = useState("");
  const [isViewingHistory, setIsViewingHistory] = useState(false);
  const [filterDate, setFilterDate] = useState("");
  const [showNotification, setShowNotification] = useState(false);

  // ✅ Make students a state so status can update dynamically
  const [students, setStudents] = useState([
    { name: "Mark Dela Cruz", status: "Present" },
    { name: "Anna Villanueva", status: "Excused" },
    { name: "Leo Mendoza", status: "Absent" },
  ]);

  // Simulated saved attendance records
  const attendanceHistory = [
    { date: "2025-10-20", section: "BSIT 1B" },
    { date: "2025-10-21", section: "BSIT 1B" },
    { date: "2025-10-22", section: "BSIT 1B" },
  ];

  const handleViewHistory = (date) => {
    setFilterDate(date);
    setIsViewingHistory(true);
  };

  const handleBack = () => {
    setIsViewingHistory(false);
    setFilterDate("");
  };

  const handleSaveAttendance = () => {
    if (!selectedDate) {
      alert("Please select a date before saving attendance.");
      return;
    }

    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 2000); // Hide after 2s
  };

  // ✅ Live count summary
  const presentCount = students.filter((s) => s.status === "Present").length;
  const absentCount = students.filter((s) => s.status === "Absent").length;
  const excusedCount = students.filter((s) => s.status === "Excused").length;

  return (
    <div className="faculty-attendance-container">
      <h1 className="attendance-title">Faculty Attendance Tracker</h1>

      {/* Notification Popup */}
      {showNotification && (
        <div className="notification">✅ Attendance saved successfully!</div>
      )}

      {!isViewingHistory ? (
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

            {/* Attendance History Filter beside Date */}
            <div className="attendance-history">
              <h1>Attendance History:</h1>
              <div className="attendance-date">
                <input
                  type="date"
                  value={filterDate}
                  onChange={(e) => handleViewHistory(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="attendance-content">
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
                    <td>
                      {/* ✅ Dropdown updates state and live summary */}
                      <select
                        value={s.status}
                        onChange={(e) => {
                          const updated = [...students];
                          updated[index].status = e.target.value;
                          setStudents(updated);
                        }}
                      >
                        <option value="Present">Present</option>
                        <option value="Absent">Absent</option>
                        <option value="Excused">Excused</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* ✅ Summary Boxes with Live Counts */}
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

          <button className="save-btn" onClick={handleSaveAttendance}>
            Save Attendance
          </button>
        </>
      ) : (
        <div className="attendance-history-view">
          <button className="back-btn" onClick={handleBack}>
            ← Back to Attendance Tracker
          </button>
          <h2>Attendance Records for {filterDate}</h2>
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
                  <td>{s.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Faculty_Attendance;
