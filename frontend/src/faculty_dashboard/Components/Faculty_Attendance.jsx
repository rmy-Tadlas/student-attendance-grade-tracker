import React, { useState } from "react";
import "./Faculty_Attendance.css";

const Faculty_Attendance = () => {
  const [selectedSection, setSelectedSection] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [attendance, setAttendance] = useState([]);

  // just a example student data per section
  const sections = {
    "BSIT 1A": ["Maria Santos", "John Cruz", "Ella Reyes"],
    "BSIT 1B": ["Mark Dela Cruz", "Anna Villanueva", "Leo Mendoza"],
    "BSIT 2A": ["Rhea Lopez", "Carlos Dizon", "Jessa Lim"],
  };

  const handleSectionChange = (section) => {
    setSelectedSection(section);
    // Do Create default attendance records
    setAttendance(
      sections[section]?.map((student) => ({
        name: student,
        status: "Present",
      })) || []
    );
  };

  const handleStatusChange = (index, status) => {
    const updated = [...attendance];
    updated[index].status = status;
    setAttendance(updated);
  };

  const handleSave = () => {
    if (!selectedSection || !selectedDate) {
      alert("Please select a section and date before saving.");
      return;
    }

    // Mao ni nga part is para send to backend later
    console.log("Attendance saved:", {
      section: selectedSection,
      date: selectedDate,
      records: attendance,
    });

    alert(`Attendance for ${selectedSection} on ${selectedDate} saved successfully!`);
  };

  return (
    <div className="faculty-attendance-container">
      <h1 className="attendance-title">Faculty Attendance Tracker</h1>

      <div className="attendance-controls">
        <div className="attendance-filter">
          <label>Section:</label>
          <select
            value={selectedSection}
            onChange={(e) => handleSectionChange(e.target.value)}
          >
            <option value="">Select Section</option>
            {Object.keys(sections).map((sec) => (
              <option key={sec} value={sec}>
                {sec}
              </option>
            ))}
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
      </div>

      {selectedSection && (
        <table className="attendance-table">
          <thead>
            <tr>
              <th>Student Name</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {attendance.map((record, index) => (
              <tr key={index}>
                <td>{record.name}</td>
                <td>
                  <select
                    value={record.status}
                    onChange={(e) =>
                      handleStatusChange(index, e.target.value)
                    }
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
      )}

      {selectedSection && (
        <button className="save-btn" onClick={handleSave}>
          Save Attendance
        </button>
      )}
    </div>
  );
};

export default Faculty_Attendance;
