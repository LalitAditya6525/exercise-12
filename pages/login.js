import React, { useState } from "react";
import "./form.css";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Invalid email format";
    }
    if (formData.password.length < 6) {
      tempErrors.password = "Password must be at least 6 characters";
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const storedUser = JSON.parse(localStorage.getItem("user"));
      
      if (storedUser && storedUser.email === formData.email && storedUser.password === formData.password) {
        alert("Login Successful!");
        localStorage.setItem("loggedInUser", JSON.stringify(storedUser)); // Store logged-in user
        window.location.href = "/"; // Redirect to Home Page
      } else {
        alert("Invalid email or password!");
      }
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
        {errors.email && <p className="error">{errors.email}</p>}

        <label>Password:</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} />
        {errors.password && <p className="error">{errors.password}</p>}

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
