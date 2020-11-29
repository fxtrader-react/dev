import React, { useState, useContext, useRef } from "react";
import { useAuth } from "../../../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";

export default function Signin() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const emailRef = useRef();
  const passwordRef = useRef();
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError("Failed to log in");
    }
    setLoading(false);
  }

  return (
    <div className="auth-container">
      {error && <h4 style={{ color: "white" }}>{error}</h4>}{" "}
      <div className="card">
        <h1>Crypto Hub</h1>
        <form onSubmit={handleSubmit}>
          {" "}
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            ref={emailRef}
          />
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
            ref={passwordRef}
          />
          <button disabled={loading}>Log In</button>
          <div>
            Need an account? <br />
            <Link to="/signup">Sign Up</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
