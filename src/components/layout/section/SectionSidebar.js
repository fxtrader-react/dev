import React, { useState, useRef, useContext } from "react";
import { GlobalContext } from "../../../contexts/GlobalContext";
import { useAuth } from "../../../contexts/AuthContext";

export default function SectionSidebar() {
  const value = useContext(GlobalContext);
  const { currentUser } = useAuth();
  return (
    <>
      <button style={{ cursor: "pointer" }}>Back</button>
      <div
        style={{ display: value.overlayState ? "block" : "none" }}
        className="card section-sidebar"
      >
        <h4>{currentUser.email}</h4>
      </div>
    </>
  );
}
