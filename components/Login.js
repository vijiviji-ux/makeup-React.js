import React from "react";
import'./Login.css';
 

function Login(){
    return(
        <div>
            <div className="login-container">
  <div className="login-wrapper">
    <h2 className="login-title">Welcome Back!</h2>
    <p className="login-subtitle">Log in to explore beauty products</p>

    <form className="login-form">
      <div className="form-group">
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          required
        />
      </div>

      <button type="submit" className="login-btn">
        Log In
      </button>
    </form>

    <div className="login-footer">
      <p>
        Don't have an account? <a href="/signup">Sign Up</a>
      </p>
      <p>
        <a href="/forgot-password">Forgot Password?</a>
      </p>
    </div>
  </div>
</div>


        </div>
    );
}
export default Login;