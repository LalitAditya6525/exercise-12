import React, { useState } from "react";
import "./form.css";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    if (formData.name.length < 3) tempErrors.name = "Name must be at least 3 characters";
    if (!/\S+@\S+\.\S+/.test(formData.email)) tempErrors.email = "Invalid email format";
    if (formData.password.length < 6) tempErrors.password = "Password must be at least 6 characters";
    if (formData.password !== formData.confirmPassword) tempErrors.confirmPassword = "Passwords do not match";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      localStorage.setItem("user", JSON.stringify(formData)); // Store user details
      alert("Registration Successful! You can now log in.");
      setFormData({ name: "", email: "", password: "", confirmPassword: "" }); // Reset form
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
        {errors.name && <p className="error">{errors.name}</p>}

        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
        {errors.email && <p className="error">{errors.email}</p>}

        <label>Password:</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} />
        {errors.password && <p className="error">{errors.password}</p>}

        <label>Confirm Password:</label>
        <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
        {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
