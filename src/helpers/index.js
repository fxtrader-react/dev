import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
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

const routes = [
  {
    path: "/Dashboard",
    name: "Dashboard",
    icon: AiOutlineBarChart,
    component: Dashboard,
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

function index() {
  return <div></div>;
}

export { routes };
