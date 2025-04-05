import React from "react";
import "./About.css"; // Import styles

const About = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p>
        The **Student Management System** is a platform designed to simplify student record management,
        making academic life easier for students, teachers, and administrators.
      </p>
      <h2>Our Features</h2>
      <ul>
        <li>🔹 Student Registration & Profile Management</li>
        <li>🔹 Secure Login & Authentication</li>
        <li>🔹 Track Academic Progress</li>
        <li>🔹 User-Friendly Dashboard</li>
        <li>🔹 Contact Support for Assistance</li>
      </ul>
      <p>
        Our goal is to provide an **efficient, easy-to-use, and secure** system that enhances student data management.
      </p>
    </div>
  );
};

export default About;

