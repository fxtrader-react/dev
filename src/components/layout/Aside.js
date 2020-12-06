import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Dashboard from "./section/Dashboard";
import Invest from "./section/Invest";
import Wallet from "./section/Wallet";
import Support from "./section/Support";
import Exchange from "./section/Exchange";
import Logout from "./section/Logout";

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

  const routes = [
    {
      path: "/Dashboard",
      name: "Dashboard",
      // exact: true,
      icon: AiOutlineBarChart,
      component: Dashboard,
      // sidebar: () => <div>home</div>,
      // main: () => <h2>Home</h2>,
    },
    {
      path: "/Wallet",
      name: "Wallet",
      icon: FaWallet,
      component: Wallet,
    },
    {
      path: "/Invest",
      name: "Invest",
      icon: AiFillDollarCircle,
      component: Invest,
    },
    {
      path: "/Exchange",
      name: "Exchange",
      icon: FaExchangeAlt,
      component: Exchange,
    },
    {
      path: "/Support",
      name: "Support",
      icon: MdHelp,
      component: Support,
    },
  ];
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
      onMouseEnter={() => setIconHovered(index)}
      onMouseLeave={() => setIconHovered()}
    >
      <div className="sidebar-icon">
        <route.icon />
      </div>
      <div className="sidebar-menu">{route.name}</div>
    </div>
  ));

  return <aside>{renderIcons}</aside>;
};

export { Aside };
