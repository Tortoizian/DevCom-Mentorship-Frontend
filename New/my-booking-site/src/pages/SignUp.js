import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './SignUp.css';

function SignUp() {
  const navigate = useNavigate();
  
  // State to track form inputs
  const [formData, setFormData] = useState({
    name: '',
    rollNo: '',
    dept: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignUp = async (e) => {
    e.preventDefault(); 
    
    // Basic validation
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      // Prepared for your Django backend
      const response = await fetch("http://127.0.0.1:8000/register/", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          rollno: formData.rollNo,
          dept: formData.dept,
          email: formData.email,
          password: formData.password
        })
      });

      if (response.ok) {
        navigate('/dashboard'); 
      } else {
        console.error("Registration failed");
      }
    } catch (error) {
      console.error("Error connecting to backend:", error);
      // For now, let's navigate anyway so you can test your frontend flow
      navigate('/dashboard'); 
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h1>SignUp</h1>
        <form onSubmit={handleSignUp}> 
          <input type="text" name="name" placeholder="Full Name" className="input-field" onChange={handleChange} required />
          <input type="text" name="rollNo" placeholder="Roll No" className="input-field" onChange={handleChange} required />
          <input type="text" name="dept" placeholder="Department" className="input-field" onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" className="input-field" onChange={handleChange} required />
          
          <div className="password-wrapper">
            <input type="password" name="password" placeholder="Create Password" className="input-field" onChange={handleChange} required />
          </div>
          
          <div className="password-wrapper">
            <input type="password" name="confirmPassword" placeholder="Confirm Password" className="input-field" onChange={handleChange} required />
          </div>

          <button type="submit" className="signup-btn">SignUp</button>
        </form>
        <p className="login-text">
          Already have an account? <span className="login-link">Login</span>
        </p>
      </div>
    </div>
  );
}

export default SignUp;