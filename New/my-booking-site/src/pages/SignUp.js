import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import './SignUp.css';

function SignUp() {
  const navigate = useNavigate(); 

  const handleSignUp = (e) => {
    e.preventDefault(); 
    navigate('/dashboard');  Redirect to the Dashboard path
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h1>SignUp</h1>
        <form onSubmit={handleSignUp}> 
          <input type="email" placeholder="Email" className="input-field" required />
          <input type="password" placeholder="Create Password" className="input-field" required />
          <input type="password" placeholder="Confirm Password" className="input-field" required />
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