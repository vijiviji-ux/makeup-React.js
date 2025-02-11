import React from 'react';
import './Services.css';

function Services() {
  return (
    <div className='bg'>
    <div className="signup-container">
      <h2>Create an Account</h2>
      <form>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" placeholder="Enter your name" required />
        
        <label htmlFor="email">Email</label>
        <input id="email" type="email" placeholder="Enter your email" required />
        
        <label htmlFor="password">Password</label>
        <input id="password" type="password" placeholder="Enter your password" required />
        
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input id="confirmPassword" type="password" placeholder="Re-enter your password" required />
        
        <button type="submit">Sign Up</button>
      </form>
    </div>
    </div>
  );
}

export default Services;
