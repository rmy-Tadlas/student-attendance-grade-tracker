import React, { useState } from "react";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import "./Faculty_Grades.css";

function Faculty_Grades() {
  const [selectedTerm, setSelectedTerm] = useState("1st");
  const [selectedSection, setSelectedSection] = useState("all");
  const [selectedSubject, setSelectedSubject] = useState("all");

  const [students, setStudents] = useState([
    {
      id: 1,
      name: "Juan Dela Cruz",
      section: "BSIT 1A",
      subject: "Math 101",
      sem1: { midterm: 2.0, finalterm: 1.5, finalGrade: 1.7, status: "Passed" },
      sem2: { midterm: 1.5, finalterm: 1.3, finalGrade: 1.4, status: "Passed" }
    },
    {
      id: 2,
      name: "Maria Santos",
      section: "BSIT 1A",
      subject: "Math 101",
      sem1: { midterm: 1.5, finalterm: 1.3, finalGrade: 1.4, status: "Passed" },
      sem2: { midterm: 2.0, finalterm: 1.5, finalGrade: 1.7, status: "Passed" }
    },
    {
      id: 3,
      name: "Jhon Paul",
      section: "BSIT 1B",
      subject: "Math 101",
      sem1: { midterm: 1.0, finalterm: 1.0, finalGrade: 1.0, status: "Passed" },
      sem2: { midterm: 2.0, finalterm: 2.0, finalGrade: 2.0, status: "Passed" }
    }
  ]);

  const handleInputChange = (id, field, value) => {
    setStudents((prev) =>
      prev.map((s) => {
        if (s.id === id) {
          const updated = {
            ...s,
            [selectedTerm === "1st" ? "sem1" : "sem2"]: {
              ...s[selectedTerm === "1st" ? "sem1" : "sem2"],
              [field]: Number(value),
            },
          };

          const mid = updated[selectedTerm === "1st" ? "sem1" : "sem2"].midterm;
          const fin = updated[selectedTerm === "1st" ? "sem1" : "sem2"].finalterm;

          const finalGrade = Math.round(mid * 0.4 + fin * 0.6);
          updated[selectedTerm === "1st" ? "sem1" : "sem2"].finalGrade = finalGrade;
          updated[selectedTerm === "1st" ? "sem1" : "sem2"].status =
            finalGrade >= 75 ? "Passed" : "Failed";

          return updated;
        }
        return s;
      })
    );
  };

  const filteredStudents = students.filter(
    (s) =>
      (selectedSection === "all" || s.section === selectedSection) &&
      (selectedSubject === "all" || s.subject === selectedSubject)
  );

   const downloadPDF = () => {
  const doc = new jsPDF();

  doc.setFontSize(14);
  doc.text("Faculty Grade Report", 14, 15);

  doc.setFontSize(11);
  doc.text(
    `Term: ${selectedTerm} Semester | Subject: ${selectedSubject} | Section: ${selectedSection}`,
    14,
    25
  );

  const tableData = filteredStudents.map((s) => {
    const t = selectedTerm === "1st" ? s.sem1 : s.sem2;
    return [s.name, t.midterm, t.finalterm, t.finalGrade, t.status];
  });

  autoTable(doc, {
    head: [["Full Name", "Midterm", "Final Term", "Final Grade", "Status"]],
    body: tableData,
    startY: 35,
  });

  doc.save("Grades_Report.pdf");
};


  return (
    <div className="grades-container">
      <h1 className="grades-title">Faculty Grade Records</h1>

      <div className="filters">
  <div className="filters-left">
    <div>
      <label>Term:</label>
      <select value={selectedTerm} onChange={(e) => setSelectedTerm(e.target.value)}>
        <option value="1st">1st Semester</option>
        <option value="2nd">2nd Semester</option>
      </select>
    </div>

    <div>
      <label>Subject:</label>
      <select value={selectedSubject} onChange={(e) => setSelectedSubject(e.target.value)}>
        <option value="Math 101">Math 101</option>
        <option value="Programming 1">Programming 1</option>
        <option value="IT Fundamentals">IT Fundamentals</option>
      </select>
    </div>

    <div>
      <label>Section:</label>
      <select value={selectedSection} onChange={(e) => setSelectedSection(e.target.value)}>
        <option value="BSIT 1A">BSIT 1A</option>
        <option value="BSIT 1B">BSIT 1B</option>
        <option value="BSIT 2A">BSIT 2A</option>
      </select>
    </div>

    {/* PDF button immediately after Section */}
    <button className="pdf-btn" onClick={downloadPDF}>Download PDF</button>
  </div>
</div>


     

      <table className="grades-table">
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Midterm</th>
            <th>Final Term</th>
            <th>Final Grade</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {filteredStudents.map((s) => {
            const termData = selectedTerm === "1st" ? s.sem1 : s.sem2;

            return (
              <tr key={s.id}>
                <td>{s.name}</td>

                <td>
                  <input
                    type="number"
                    min="0"
                    max="100"
                    value={termData.midterm}
                    onChange={(e) =>
                      handleInputChange(s.id, "midterm", e.target.value)
                    }
                  />
                </td>

                <td>
                  <input
                    type="number"
                    min="0"
                    max="100"
                    value={termData.finalterm}
                    onChange={(e) =>
                      handleInputChange(s.id, "finalterm", e.target.value)
                    }
                  />
                </td>

                <td>{termData.finalGrade}</td>
                <td className={termData.status === "Passed" ? "passed" : "failed"}>
                  {termData.status}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Faculty_Grades;
