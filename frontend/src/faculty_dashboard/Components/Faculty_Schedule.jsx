import React from "react";
import "./Faculty_Schedule.css";

const Faculty_Schedule = () => {
  // Sample class schedule data we'll fetch this later sa backend
  const scheduleData = [
    { subject: "Mathematics 101", section: "BSIT 1A", day: "Monday", time: "9:00 AM - 10:00 AM", room: "Room 203" },
    { subject: "Physics 102", section: "BSIT 1B", day: "Tuesday", time: "10:30 AM - 12:00 PM", room: "Room 108" },
    { subject: "Programming 1", section: "BSIT 2A", day: "Wednesday", time: "1:00 PM - 3:00 PM", room: "Lab 2" },
    { subject: "Discrete Math", section: "BSIT 2B", day: "Thursday", time: "8:00 AM - 9:30 AM", room: "Room 110" },
    { subject: "Database Systems", section: "BSIT 3A", day: "Friday", time: "10:00 AM - 12:00 PM", room: "Lab 1" },
  ];

  return (
    <div className="faculty-schedule-container">
      <h1 className="faculty-schedule-title">Class Schedule</h1>

      <table className="faculty-schedule-table">
        <thead>
          <tr>
            <th>Subject</th>
            <th>Section</th>
            <th>Day</th>
            <th>Time</th>
            <th>Room</th>
          </tr>
        </thead>
        <tbody>
          {scheduleData.map((item, index) => (
            <tr key={index}>
              <td>{item.subject}</td>
              <td>{item.section}</td>
              <td>{item.day}</td>
              <td>{item.time}</td>
              <td>{item.room}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Faculty_Schedule;
