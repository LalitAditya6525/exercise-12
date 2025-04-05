import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
import Contact from "./pages/contact";
import About from "./pages/about";
import "./App.css"; // Import CSS for styling

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("loggedInUser");
    setLoggedIn(!!user); // Update login state
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    setLoggedIn(false);
    window.location.href = "/login"; // Redirect to login page
  };

  return (
    <Router>
      <nav className="navbar">
        <div className="nav-left">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="nav-right">
          {!loggedIn ? (
            <>
              <Link to="/login" className="nav-button">Login</Link>
              <Link to="/register" className="nav-button">Register</Link>
            </>
          ) : (
            <button onClick={handleLogout} className="nav-button">Logout</button>
          )}
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
