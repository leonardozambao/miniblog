import styles from "./Register.module.css";
import { useState, useEffect } from "react";

const Register = () => {
  return (
    <div className={styles.register}>
      <h1>Register to post blogs</h1>
      <p>
        Already have an account? <a href="/login">Login</a>
      </p>
      <form>
        <label>
          <span>Name:</span>
          <input
            type="text"
            name="displayName"
            required
            placeholder="Enter your name"
          />
        </label>
        <label>
          <span>Email:</span>
          <input
            type="email"
            name="email"
            required
            placeholder="Enter your email"
          />
        </label>
        <label>
          <span>Password:</span>
          <input
            type="password"
            name="password"
            required
            placeholder="Enter your password"
          />
        </label>
        <label>
          <span>Confirm Password:</span>
          <input
            type="password"
            name="confirmPassword"
            required
            placeholder="Confirm your password"
          />
        </label>
        <button type="submit" className="button">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
