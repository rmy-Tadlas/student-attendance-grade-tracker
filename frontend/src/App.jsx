import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./startingpage/home";
import Signin from "./signin/signin";
import Signup from "./signup/signup";

import StudentDashboard from "./student_dashboard/student_dashboard";
import FacultyDashboard from "./faculty_dashboard/Faculty_dashboard";
import AdminDashboard from "./admin_dashboard/Admin_dashboard";

import { checkAuth } from "./api/auth"; // make sure this file exists

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const verifyUser = async () => {
      const data = await checkAuth();
      if (data) setUser(data);
      setLoading(false);
    };
    verifyUser();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />

      {/* Protected routes */}
      <Route
        path="/student_dashboard"
        element={user ? <StudentDashboard /> : <Navigate to="/signin" />}
      />
      <Route
        path="/faculty/*"
        element={user ? <FacultyDashboard /> : <Navigate to="/signin" />}
      />
      <Route
        path="/admin/*"
        element={user ? <AdminDashboard /> : <Navigate to="/signin" />}
      />
    </Routes>
  );
}

export default App;
