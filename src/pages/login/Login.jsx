import styles from "./Login.module.css";
import { useState, useEffect } from "react";
import { useAuthentication } from "../../hooks/useAuthentication";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { login, error: authError, loading } = useAuthentication();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    const user = {
      email,
      password,
    };

    const res = await login(user);

    console.table(res);
  };

  useEffect(() => {
    if (authError) {
      setError(authError);
    }
  }, [authError]);
  return <div className={styles.login}>
    <h1>Login</h1>
    <p>
      Don't have an account? <a href="/register">Register</a>
    </p>
    <form onSubmit={handleSubmit}>
      <label>
        <span>Email:</span>
        <input
          type="email"
          name="email"
          required
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        <span>Password:</span>
        <input
          type="password"
          name="password"
          required
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      {!loading && (
        <button type="submit" className="button">
          Login
        </button>
      )}
      {loading && (
        <button type="submit" className="button" disabled>
          Login...
        </button>
      )}
      {error && <p className="error">{error}</p>}
    </form>
  </div>;
};

export default Login;
