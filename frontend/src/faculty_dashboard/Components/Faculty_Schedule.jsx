import React, { useState } from "react";
import "./Faculty_Schedule.css";

const initialData = [
  { subject: "IT 109", section: "BSIT 2A", day: "Monday", time: "9:00 AM - 10:00 AM", room: "Room 203", term: "1st Semester" },
  { subject: "IT 111", section: "BSIT 2C", day: "Tuesday", time: "10:30 AM - 12:00 PM", room: "Room 108", term: "1st Semester" },
  { subject: "IT 110", section: "BSIT 2F", day: "Wednesday", time: "1:00 PM - 3:00 PM", room: "Lab 2", term: "2nd Semester" },
  { subject: "IT 107", section: "BSIT 2B", day: "Thursday", time: "8:00 AM - 9:30 AM", room: "Room 110", term: "2nd Semester" },
  { subject: "IT 101", section: "BSIT 2D", day: "Friday", time: "10:00 AM - 12:00 PM", room: "Lab 1", term: "2nd Semester" },
  { subject: "IT 107", section: "BSIT 2F", day: "Monday", time: "9:00 AM - 10:00 AM", room: "Room 203", term: "1st Semester" },
  { subject: "IT 101", section: "BSIT 2C", day: "Tuesday", time: "10:30 AM - 12:00 PM", room: "Room 108", term: "2nd Semester" },

  { subject: "IT 109", section: "BSIT 2B", day: "Thursday", time: "8:00 AM - 9:30 AM", room: "Room 110", term: "2nd Semester" },
  { subject: "IT 110", section: "BSIT 2D", day: "Friday", time: "10:00 AM - 12:00 PM", room: "Lab 1", term: "2nd Semester" },
  { subject: "IT 111", section: "BSIT 2F", day: "Monday", time: "9:00 AM - 10:00 AM", room: "Room 203", term: "1st Semester" },
  { subject: "IT 107", section: "BSIT 2C", day: "Tuesday", time: "10:30 AM - 12:00 PM", room: "Room 108", term: "2nd Semester" },
];

const Faculty_Schedule = () => {
  const [scheduleData, setScheduleData] = useState(initialData);
  const [selectedSection, setSelectedSection] = useState("All");
  const [selectedTerm, setSelectedTerm] = useState("All");
  const [editingIndex, setEditingIndex] = useState(null);
  const [editForm, setEditForm] = useState({});

  const sections = ["All", ...new Set(scheduleData.map(item => item.section))];
  const terms = ["All", "1st Semester", "2nd Semester", "Summer"];

  const filteredSchedule = scheduleData.filter(item => {
    const sectionMatch = selectedSection === "All" || item.section === selectedSection;
    const termMatch = selectedTerm === "All" || item.term === selectedTerm;
    return sectionMatch && termMatch;
  });

  const handleEdit = (index) => {
    setEditingIndex(index);
    setEditForm({ ...scheduleData[index] });
  };

  const handleSave = () => {
    const updated = [...scheduleData];
    updated[editingIndex] = editForm;
    setScheduleData(updated);
    setEditingIndex(null);
  };

  return (
    <div className="faculty-schedule-container">
      <h1 className="faculty-schedule-title">Class Schedule</h1>

      {/* Filters */}
      <div className="filters">
        <div>
          <label>Section: </label>
          <select value={selectedSection} onChange={(e) => setSelectedSection(e.target.value)}>
            {sections.map((section, index) => (
              <option key={index} value={section}>{section}</option>
            ))}
          </select>
        </div>

        <div>
          <label>Term: </label>
          <select value={selectedTerm} onChange={(e) => setSelectedTerm(e.target.value)}>
            {terms.map((term, index) => (
              <option key={index} value={term}>{term}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Scrollable Table */}
      <div className="table-wrapper">
        <table className="faculty-schedule-table">
          <thead>
            <tr>
              <th>Subject</th>
              <th>Section</th>
              <th>Day</th>
              <th>Time</th>
              <th>Room</th>
              <th>Term</th>
              <th>Edit</th>
            </tr>
          </thead>

          <tbody>
            {filteredSchedule.map((item, index) => (
              editingIndex === index ? (
                <tr key={index}>
                  <td><input value={editForm.subject} onChange={(e) => setEditForm({...editForm, subject: e.target.value})} /></td>
                  <td><input value={editForm.section} onChange={(e) => setEditForm({...editForm, section: e.target.value})} /></td>
                  <td><input value={editForm.day} onChange={(e) => setEditForm({...editForm, day: e.target.value})} /></td>
                  <td><input value={editForm.time} onChange={(e) => setEditForm({...editForm, time: e.target.value})} /></td>
                  <td><input value={editForm.room} onChange={(e) => setEditForm({...editForm, room: e.target.value})} /></td>
                  <td>
                    <select value={editForm.term} onChange={(e) => setEditForm({...editForm, term: e.target.value})}>
                      {terms.map((t, idx) => (
                        <option key={idx} value={t}>{t}</option>
                      ))}
                    </select>
                  </td>
                  <td><button onClick={handleSave}>Save</button></td>
                </tr>
              ) : (
                <tr key={index}>
                  <td>{item.subject}</td>
                  <td>{item.section}</td>
                  <td>{item.day}</td>
                  <td>{item.time}</td>
                  <td>{item.room}</td>
                  <td>{item.term}</td>
                  <td><button onClick={() => handleEdit(index)}>Edit</button></td>
                </tr>
              )
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Faculty_Schedule;
