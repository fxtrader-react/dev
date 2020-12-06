import React from "react";
import { useHistory, Link } from "react-router-dom";

export default function Landing() {
  return (
    <div>
      <h1>Landing</h1>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/login">Log In</Link>
    </div>
  );
}
