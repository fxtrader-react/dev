import React, { Component, useState, useEffect } from "react";
import Toolbox from "./Toolbox";

export default function SymbolMenu(props) {
  const [dropdown, setDropdown] = useState(false);

  return (
    <div className="menu">
      <button onClick={() => setDropdown(!dropdown)}>SHOW MENU</button>
      <div className="dropdown" style={{ display: dropdown ? "" : "none" }}>
        <button> Menu item 1 </button>
        <br></br>
        <button> Menu item 2 </button>
        <br></br>
        <button> Menu item 1 </button>
        <br></br>
        <button> Menu item 2 </button>
        <br></br>
        <button> Menu item 1 </button>
        <br></br>
        <button> Menu item 2 </button>
        <br></br>
        <button> Menu item 3 </button>
      </div>
      <Toolbox />
    </div>
  );
}
