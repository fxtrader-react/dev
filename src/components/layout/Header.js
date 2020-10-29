import React, { useContext, useState, useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { GlobalContext } from "../../contexts/GlobalContext";
import {
  AiOutlineDribbbleSquare,
  FaBell,
  MdArrowDropDown,
  AiFillCodeSandboxCircle,
} from "react-icons/all";

export default function Header() {
  const value = useContext(GlobalContext);
  const { currentUser } = useAuth();

  return (
    <header className="header" data-testid="header">
      <nav className="nav__links">
        <div className="logo">
          <AiFillCodeSandboxCircle />
        </div>
        <ul>
          <li>
            <a
              target="_blank"
              onClick={() => value.setOverlayState(!value.overlayState)}
            >
              <div className="right-header-component">
                <img alt="Avatar" src={require("../images/vader.jpg")} />
                <div id="username">
                  {/* <p>{currentUser.email}</p> */}
                  <MdArrowDropDown />
                </div>
              </div>
            </a>
            <a target="_blank">
              <FaBell />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
