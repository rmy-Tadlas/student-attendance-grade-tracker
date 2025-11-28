import React from "react";
import { jsPDF } from "jspdf";
import "jspdf-autotable";
import "./schedule.css";

function Schedule() {
  const scheduleData = [
    {
      course: "Morning Meeting",
      section: "BSIT 1A",
      day: "Monday",
      time: "9:00 AM - 10:00 AM",
      room: "Conference Room A",
      instructor: "John Doe",
    },
    {
      course: "Lunch Break",
      section: "N/A",
      day: "Monday",
      time: "12:00 PM - 1:00 PM",
      room: "Cafeteria",
      instructor: "N/A",
    },
    {
      course: "Project Review",
      section: "BSIT 1A",
      day: "Monday",
      time: "2:00 PM - 3:00 PM",
      room: "Meeting Room B",
      instructor: "Jane Smith",
    },
  ];

  const downloadPDF = () => {
    const doc = new jsPDF("p", "pt", "a4");
    doc.setFontSize(18);
    doc.text("My Schedule", 40, 40);

    const tableColumn = ["Course Title", "Section", "Day", "Time", "Room", "Instructor"];
    const tableRows = [];

    scheduleData.forEach(item => {
      const row = [
        item.course,
        item.section,
        item.day,
        item.time,
        item.room,
        item.instructor,
      ];
      tableRows.push(row);
    });

    doc.autoTable({
      head: [tableColumn],
      body: tableRows,
      startY: 60,
      theme: "grid",
      headStyles: {
        fillColor: [52, 58, 64],
        textColor: [255, 255, 255],
        fontStyle: "bold",
      },
      alternateRowStyles: { fillColor: [240, 240, 240] },
      styles: {
        fontSize: 12,
        cellPadding: 6,
        halign: "left",
        valign: "middle",
      },
      columnStyles: {
        0: { cellWidth: 120 }, // Course Title
        1: { cellWidth: 60 },  // Section
        2: { cellWidth: 60 },  // Day
        3: { cellWidth: 80 },  // Time
        4: { cellWidth: 100 }, // Room
        5: { cellWidth: 100 }, // Instructor
      },
    });

    doc.save("schedule.pdf");
  };

  return (
    <div className="schedule-container">
      <h1 className="schedule-title">My Schedule</h1>

      <button className="schedule-download-btn" onClick={downloadPDF}>
        Download PDF
      </button>

      <div className="schedule-table">
        <div className="table-header">
          <span>Course Title</span>
          <span>Section</span>
          <span>Day</span>
          <span>Time</span>
          <span>Room</span>
          <span>Instructor</span>
        </div>

        {scheduleData.map((item, index) => (
          <div key={index} className="table-row">
            <span>{item.course}</span>
            <span>{item.section}</span>
            <span>{item.day}</span>
            <span>{item.time}</span>
            <span>{item.room}</span>
            <span>{item.instructor}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Schedule;
