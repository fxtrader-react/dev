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
    path: "/dashboard",
    name: "dashboard",
    text: "Dashboard",
    icon: AiOutlineBarChart,
    component: Dashboard,
  },
  {
    path: "/wallet",
    name: "wallet",
    text: "Wallet",
    icon: FaWallet,
    component: Wallet,
  },
  {
    path: "/invest",
    name: "invest",
    text: "Invest",
    icon: AiFillDollarCircle,
    component: Invest,
  },
  {
    path: "/exchange",
    name: "exchange",
    text: "Exchange",
    icon: FaExchangeAlt,
    component: Exchange,
  },
  {
    path: "/support",
    name: "support",
    text: "Support",
    icon: MdHelp,
    component: Support,
  },
];

function index() {
  return <div></div>;
}

export { routes };
