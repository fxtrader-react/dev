import React, { useState, useRef, useContext } from "react";
import { GlobalContext } from "../../../contexts/GlobalContext";
import { useAuth } from "../../../contexts/AuthContext";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function SectionSidebar() {
  const value = useContext(GlobalContext);
  const [error, setError] = useState("");
  const { logout, currentUser } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    setError("");
    try {
      await logout();
      value.setOverlayState(!value.overlayState);
      // history.push("/login");
    } catch {
      setError("Failed to log out");
    }
  }

  return (
    <>
      {/* <button style={{ cursor: "pointer" }}>Back</button> */}
      <div
        style={{ display: value.overlayState ? "block" : "none" }}
        className="card dropdown"
      >
        {/* <div className="dropdown-card"> */}
        <img alt="Avatar" src={require("../../images/high-rise.jpg")} />
        <h4>{currentUser.email}</h4>
        <button
          variant="link"
          onClick={handleLogout}
          style={{ cursor: "pointer" }}
        >
          Log Out
        </button>
      </div>
      {/* </div> */}
    </>
  );
}
