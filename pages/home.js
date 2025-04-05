import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"; // Import styles

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to the Student Management System</h1>
      <p>
        This system helps manage student records, track progress, and streamline academic processes efficiently.
      </p>
      <p>Register today and experience seamless student management.</p>
      <div className="home-buttons">
        <Link to="/login" className="home-btn">Login</Link>
        <Link to="/register" className="home-btn">Register</Link>
      </div>
    </div>
  );
};

export default Home;

