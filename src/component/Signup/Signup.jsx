import React, { useState } from "react";
import "./signup.css"; 
import Logo from '../../assets/logo.svg';
import { Link } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    surname: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <img src={Logo} alt="Logo" className="signup-logo" />
        <h2>Create Account</h2>

        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="surname"
              placeholder="Surname"
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-row">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="mobile"
              placeholder="Mobile Number"
              onChange={handleChange}
              required
            />
          </div>

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            onChange={handleChange}
            required
          />

          <button type="submit" className="signup-btn">
            Sign Up
          </button>

          <p className="login-link">
            Already have an account? <Link to="/Login">Log in</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;