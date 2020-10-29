import React, { useState } from "react";
import { useAuth } from "../../../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";

export default function Logout() {
  const [error, setError] = useState("");
  const { logout, currentUser } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    setError("");

    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to log out");
    }
  }

  const style = { margin: 0 };

  return (
    <div style={style}>
      {error && <h2>{error}</h2>}
      <strong>Email:</strong> {currentUser.email}
      <div className="card">
        <h2>Are you sure you want to sign out</h2>
        <p>Please Sign in to Continue</p>
        <button
          variant="link"
          onClick={handleLogout}
          style={{ cursor: "pointer" }}
        >
          Log Out
        </button>
      </div>
    </div>
  );
}
