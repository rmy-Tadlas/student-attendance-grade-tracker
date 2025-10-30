import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./startingpage/home";
import Signin from "./signin/signin";
import Signup from "./signup/signup";


import StudentDashboard from "./student_dashboard/student_dashboard";
import FacultyDashboard from "./faculty_dashboard/Faculty_dashboard";
import AdminDashboard from "./admin_dashboard/Admin_dashboard";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />


      <Route path="/dashboard/*" element={<StudentDashboard />}>
      </Route>

      <Route path="/faculty/*" element={<FacultyDashboard />} />
      <Route path="/admin/*" element={<AdminDashboard />} />
    </Routes>
  );
}

export default App;
