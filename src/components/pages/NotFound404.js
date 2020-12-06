import React from "react";
import { Link, useHistory } from "react-router-dom";

export default function NotFound404() {
  return (
    <div className="container">
      <h1>Page Not Found</h1>
      <Link to="/">Go Home</Link>
    </div>
  );
}
