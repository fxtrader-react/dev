import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Dashboard from "./section/Dashboard";
import Invest from "./section/Invest";
import Wallet from "./section/Wallet";
import Support from "./section/Support";
import Exchange from "./section/Exchange";
import Logout from "./section/Logout";
import { routes } from "../../helpers";

import {
  AiOutlineBarChart,
  AiFillDollarCircle,
  FaWallet,
  MdHelp,
  MdPowerSettingsNew,
  FaExchangeAlt,
} from "react-icons/all";

const Aside = (props) => {
  const history = useHistory();
  const [iconHovered, setIconHovered] = useState();

  const menus = [
    {
      menuName: "Dashboard",
      section: Dashboard,
      iconName: AiOutlineBarChart,
    },
    { menuName: "Wallet", section: Wallet, iconName: FaWallet },
    { menuName: "Invest", section: Invest, iconName: AiFillDollarCircle },
    { menuName: "Exchange", section: Exchange, iconName: FaExchangeAlt },
    { menuName: "Support", section: Support, iconName: MdHelp },
    {
      menuName: "Logout",
      section: Logout,
      iconName: MdPowerSettingsNew,
    },
  ];

  // function clicked(selected) {
  //   setSection(selected);
  // }

  const [currentTab, setCurrentTab] = useState(0);

  function clicked(tab) {
    setCurrentTab(tab);
    history.push(`${routes[tab].path}`);
  }

  const renderIcons = routes.map((route, index) => (
    <div
      key={index}
      className="sidebar-component"
      onClick={() => clicked(index)}
      style={{ cursor: "pointer" }}
      id={route.name === props.paramId || iconHovered === true ? "active" : ""}
      onMouseEnter={() => setIconHovered(props.paramId)}
      onMouseLeave={() => setIconHovered()}
    >
      <div className="sidebar-icon">
        <route.icon />
      </div>
      <div className="sidebar-menu">{route.text}</div>
    </div>
  ));

  return <aside>{renderIcons}</aside>;
};

export { Aside };
