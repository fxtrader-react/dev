import React, { useState } from "react";

export default function LeftSideIcon(props) {
  const [iconHovered, setIconHovered] = useState(false);

  function clicked(tab) {
    props.setCurrentTab(tab);
  }

  return (
    <div
      className="sidebar-component"
      onClick={() => clicked(props.index)}
      style={{ cursor: "pointer" }}
      id={
        props.index === props.currentTab || iconHovered === true ? "active" : ""
      }
      onMouseEnter={() => setIconHovered(true)}
      onMouseLeave={() => setIconHovered(false)}
    >
      <div className="sidebar-icon">
        <props.icon />
      </div>
      <div className="sidebar-menu">{props.menu}</div>
    </div>
  );
}
