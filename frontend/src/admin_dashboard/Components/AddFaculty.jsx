import React, { useState } from "react";

function AddFaculty() {
  const [faculty, setFaculty] = useState({
    fullname: "",
    email: "",
    contact: "",
    password: "",
  });

  const handleAddFaculty = () => {
    if (!faculty.fullname || !faculty.email || !faculty.contact || !faculty.password) {
      alert("Please fill all fields");
      return;
    }

    // Call your backend API to create faculty account
    console.log("Creating faculty account:", faculty);
    alert("Faculty account created successfully!");

    setFaculty({ fullname: "", email: "", contact: "", password: "" });
  };

  return (
    <div className="add-faculty-form">
      <h2>Create Faculty Account</h2>
      <input
        type="text"
        placeholder="Full Name"
        value={faculty.fullname}
        onChange={(e) => setFaculty({ ...faculty, fullname: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email"
        value={faculty.email}
        onChange={(e) => setFaculty({ ...faculty, email: e.target.value })}
      />
      <input
        type="text"
        placeholder="Contact"
        value={faculty.contact}
        onChange={(e) => setFaculty({ ...faculty, contact: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        value={faculty.password}
        onChange={(e) => setFaculty({ ...faculty, password: e.target.value })}
      />
      <button onClick={handleAddFaculty}>Add Faculty</button>
    </div>
  );
}

export default AddFaculty;
