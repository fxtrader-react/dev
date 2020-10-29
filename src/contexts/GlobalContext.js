import React, { useState, createContext, useEffect } from "react";

import Dashboard from "../components/layout/section/Dashboard";
import Invest from "../components/layout/section/Invest";
import Wallet from "../components/layout/section/Wallet";
import Support from "../components/layout/section/Support";
import Exchange from "../components/layout/section/Exchange";
import Logout from "../components/layout/section/Logout";

import {
  AiOutlineBarChart,
  AiFillDollarCircle,
  FaWallet,
  MdHelp,
  MdPowerSettingsNew,
  FaExchangeAlt,
} from "react-icons/all";

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
  const [selectedSymbol, setSelectedSymbol] = useState("BTCUSDT");
  const [currentTab, setCurrentTab] = useState(0);
  const [overlayState, setOverlayState] = useState(false);

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

  const section = menus[currentTab].section;
  const menuName = menus[currentTab].menuName;

  const value = {
    selectedSymbol,
    setSelectedSymbol,
    menus,
    currentTab,
    setCurrentTab,
    section,
    menuName,
    setOverlayState,
    overlayState,
  };

  return (
    <GlobalContext.Provider value={value}>
      {props.children}
    </GlobalContext.Provider>
  );
};
