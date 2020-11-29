import React, { useContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { GlobalContext } from "../../contexts/GlobalContext";
import PrivateRoute from "../../components/PrivateRoute";
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

export default function Aside2() {
  const value = useContext(GlobalContext);
  const [iconHovered, setIconHovered] = useState(false);

  function clicked(tab) {
    value.setCurrentTab(tab);
  }

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

  const renderIcons = routes.map((route, index) => (
    <PrivateRoute exact path={route.path}>
      <p>{route.name}</p>
    </PrivateRoute>
    // <p>h</p>
  ));

  // <Route
  //   exact
  //   path="/details/:id"
  //   render={(props) => {
  //     <DetailsPage id={props.match.params.id} />;
  //   }}
  // />;

  // const ListIcons = menus.map((menu, index) => (
  //   <LeftSideIcon
  //     key={index}
  //     index={index}
  //     icon={menu.iconName}
  //     menu={menu.menuName}
  //     handleToggle={handleToggle}
  //     setCurrentTab={value.setCurrentTab}
  //     currentTab={value.currentTab}
  //   />
  // ));

  return (
    <Router>
      <aside>{renderIcons}</aside>
    </Router>

    // <div
    //   className="sidebar-component"
    //   onClick={() => clicked(props.index)}
    //   style={{ cursor: "pointer" }}
    //   id={
    //     props.index === props.currentTab || iconHovered === true ? "active" : ""
    //   }
    //   onMouseEnter={() => setIconHovered(true)}
    //   onMouseLeave={() => setIconHovered(false)}
    // >
    //   <div className="sidebar-icon">
    //     <props.icon />
    //   </div>
    //   <div className="sidebar-menu">{props.menu}</div>
    // </div>
  );
}
