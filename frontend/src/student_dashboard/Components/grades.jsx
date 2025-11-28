import React, { useState } from "react";
import { jsPDF } from "jspdf";
import "jspdf-autotable";
import "./grades.css";

function Grades2() {
  const [yearLevel, setYearLevel] = useState("1st Year");
  const [semester, setSemester] = useState("1st Semester");
  const [showDetails, setShowDetails] = useState(false);

  const program = "BS Information Technology";

  const gradeData = {
    "1st Year": {
      "1st Semester": {
        gwa: "1.75",
        subjects: [
          { subject: "Math 101", grade: "92" },
          { subject: "Programming 1", grade: "95" },
          { subject: "English 1", grade: "90" },
        ],
      },
      "2nd Semester": {
        gwa: "1.80",
        subjects: [
          { subject: "Science 101", grade: "88" },
          { subject: "Programming 2", grade: "94" },
          { subject: "PE 2", grade: "89" },
        ],
      },
    },
    "2nd Year": {
      "1st Semester": { gwa: "1.70", subjects: [] },
      "2nd Semester": { gwa: "1.85", subjects: [] },
    },
    "3rd Year": {
      "1st Semester": { gwa: "1.90", subjects: [] },
      "2nd Semester": { gwa: "1.88", subjects: [] },
    },
    "4th Year": {
      "1st Semester": { gwa: "1.95", subjects: [] },
      "2nd Semester": { gwa: "1.93", subjects: [] },
    },
  };

  const selected = gradeData[yearLevel][semester];

  // Download PDF function
  const downloadPDF = () => {
    const doc = new jsPDF("p", "pt", "a4");
    doc.setFontSize(18);
    doc.text("Student Grades", 40, 40);

    // Table for main info: Year, Semester, Program, GWA
    doc.autoTable({
      head: [["Year Level", "Semester", "Program", "Term GWA"]],
      body: [[yearLevel, semester, program, selected.gwa]],
      startY: 60,
      theme: "grid",
      headStyles: { fillColor: [52, 58, 64], textColor: [255, 255, 255] },
      styles: { fontSize: 12, cellPadding: 6 },
    });

    // If details exist, add subjects
    if (selected.subjects.length > 0) {
      const subjectRows = selected.subjects.map((item) => [item.subject, item.grade]);
      doc.autoTable({
        head: [["Subject", "Grade"]],
        body: subjectRows,
        startY: doc.lastAutoTable.finalY + 20,
        theme: "grid",
        headStyles: { fillColor: [52, 58, 64], textColor: [255, 255, 255] },
        styles: { fontSize: 12, cellPadding: 6 },
      });
    }

    doc.save(`Grades_${yearLevel}_${semester}.pdf`);
  };

  return (
    <div className="grade-container">
      <div className="grades-wrapper">
        <h1 className="title">Grades</h1>

        <div className="studentfilters">
          <select value={yearLevel} onChange={(e) => setYearLevel(e.target.value)}>
            <option>1st Year</option>
            <option>2nd Year</option>
            <option>3rd Year</option>
            <option>4th Year</option>
          </select>

          <select value={semester} onChange={(e) => setSemester(e.target.value)}>
            <option>1st Semester</option>
            <option>2nd Semester</option>
          </select>
        </div>

       <div className="student-download-btn-container">
  <button className="student-download-btn" onClick={downloadPDF}>
    Download PDF
  </button>
</div>

        <div className="gwa-table">
          <div className="table-header">
            <span>Year Level</span>
            <span>Semester</span>
            <span>Program</span>
            <span>Term GWA</span>
            <span>Action</span>
          </div>

          <div className="table-row">
            <span>{yearLevel}</span>
            <span>{semester}</span>
            <span>{program}</span>
            <span>{selected.gwa}</span>
            <button
              className="details-btn"
              onClick={() => setShowDetails(!showDetails)}
            >
              {showDetails ? "Hide" : "Details"}
            </button>
          </div>
        </div>

        {showDetails && (
          <div className="details-box">
            <h2>Subject Grades</h2>

            <div className="details-table">
              <div className="details-header">
                <span>Subject</span>
                <span>Grade</span>
              </div>

              {selected.subjects.length > 0 ? (
                selected.subjects.map((item, index) => (
                  <div key={index} className="details-row">
                    <span>{item.subject}</span>
                    <span>{item.grade}</span>
                  </div>
                ))
              ) : (
                <p className="no-data">No subjects available for this term.</p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Grades2;
