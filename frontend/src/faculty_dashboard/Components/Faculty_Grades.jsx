import React, { useState } from "react";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import "./Faculty_Grades.css";

function Faculty_Grades() {
  const [selectedSection, setSelectedSection] = useState("all");
  const [selectedType, setSelectedType] = useState("all"); // filter by type
  const [selectedDate, setSelectedDate] = useState(""); // filter by date

  // Each student now has separate scores for quiz, assignment, exam with date
  const [grades, setGrades] = useState([
    { 
      id: 1, subject: "Mathematics 101", section: "BSIT 1A", name: "Juan Dela Cruz", 
      scores: [
        { type: "quiz", score: 90, date: "2025-10-25" },
        { type: "assignment", score: 85, date: "2025-10-26" },
        { type: "exam", score: 95, date: "2025-10-30" },
      ]
    },
    { 
      id: 2, subject: "Mathematics 101", section: "BSIT 1A", name: "Maria Santos", 
      scores: [
        { type: "quiz", score: 88, date: "2025-10-25" },
        { type: "assignment", score: 90, date: "2025-10-26" },
        { type: "exam", score: 85, date: "2025-10-30" },
      ]
    },
    // Add more students as needed
  ]);

  const handleScoreChange = (studentId, type, value) => {
    const updatedGrades = grades.map(student => {
      if (student.id === studentId) {
        const updatedScores = student.scores.map(s => 
          s.type === type ? { ...s, score: Number(value) } : s
        );
        return { ...student, scores: updatedScores };
      }
      return student;
    });
    setGrades(updatedGrades);
  };

  const calculateFinalGrade = (scores) => {
    const quiz = scores.find(s => s.type === "quiz")?.score || 0;
    const assignment = scores.find(s => s.type === "assignment")?.score || 0;
    const exam = scores.find(s => s.type === "exam")?.score || 0;
    return Math.round(quiz * 0.3 + assignment * 0.2 + exam * 0.5);
  };

  const filteredGrades = grades
    .filter(g => selectedSection === "all" || g.section === selectedSection)
    .map(student => ({
      ...student,
      scores: student.scores
        .filter(s => selectedType === "all" || s.type === selectedType)
        .filter(s => !selectedDate || s.date === selectedDate) // filter by date
    }))
    .filter(student => student.scores.length > 0); // remove students with no scores after filtering

  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.text("Faculty Grade Records", 14, 15);
    doc.setFontSize(11);
    doc.text(
      selectedSection === "all"
        ? "All Student Grades Overview"
        : `Grades for ${selectedSection}`,
      14,
      22
    );

    const tableColumn = ["Subject", "Section", "Student Name", "Type", "Score", "Final Grade"];
    const tableRows = [];
    filteredGrades.forEach(student => {
      student.scores.forEach(s => {
        tableRows.push([
          student.subject,
          student.section,
          student.name,
          s.type,
          s.score,
          calculateFinalGrade(student.scores)
        ]);
      });
    });

    autoTable(doc, {
      head: [tableColumn],
      body: tableRows,
      startY: 28,
      theme: "grid",
      headStyles: { fillColor: [44, 62, 80] },
    });

    doc.save(
      selectedSection === "all"
        ? "Faculty_Grade_Records.pdf"
        : `Faculty_Grade_Records_${selectedSection}.pdf`
    );
  };

  return (
    <div className="faculty-grades-container">
      <h1 className="faculty-grades-title">Grade Records</h1>

      <div className="filter-container">
        <label>Section:</label>
        <select value={selectedSection} onChange={(e) => setSelectedSection(e.target.value)}>
          <option value="all">All Sections</option>
          <option value="BSIT 1A">BSIT 1A</option>
          <option value="BSIT 1B">BSIT 1B</option>
          <option value="BSIT 2A">BSIT 2A</option>
          <option value="BSIT 3A">BSIT 3A</option>
        </select>

        <label>Score Type:</label>
        <select value={selectedType} onChange={(e) => setSelectedType(e.target.value)}>
          <option value="all">All</option>
          <option value="quiz">Quiz</option>
          <option value="assignment">Assignment</option>
          <option value="exam">Exam</option>
        </select>

        <label>Date:</label>
        <input type="date" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} />

        <button className="download-btn" onClick={downloadPDF}>Download PDF</button>
      </div>

      <table className="faculty-grades-table">
        <thead>
          <tr>
            <th>Subject</th>
            <th>Section</th>
            <th>Student Name</th>
            <th>Type</th>
            <th>Score</th>
            <th>Final Grade</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredGrades.map(student =>
            student.scores.map(s => (
              <tr key={`${student.id}-${s.type}-${s.date}`}>
                <td>{student.subject}</td>
                <td>{student.section}</td>
                <td>{student.name}</td>
                <td>{s.type}</td>
                <td>
                  <input
                    type="number"
                    min="0"
                    max="100"
                    value={s.score}
                    onChange={(e) => handleScoreChange(student.id, s.type, e.target.value)}
                  />
                </td>
                <td>{calculateFinalGrade(student.scores)}</td>
                <td><button className="save-btn">Save</button></td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Faculty_Grades;
