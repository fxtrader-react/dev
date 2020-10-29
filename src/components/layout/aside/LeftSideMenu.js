import React, { useState, useContext } from "react";
import LeftSideIcon from "./LeftSideIcon";
import { GlobalContext } from "../../../contexts/GlobalContext";

export default function LeftSideMenu() {
  const value = useContext(GlobalContext);
  const [isToggled, setIsToggled] = useState(true);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  const ListIcons = value.menus.map((menu, index) => (
    <LeftSideIcon
      key={index}
      index={index}
      icon={menu.iconName}
      menu={menu.menuName}
      handleToggle={handleToggle}
      setCurrentTab={value.setCurrentTab}
      currentTab={value.currentTab}
    />
  ));

  return <div className="menu">{ListIcons}</div>;
}
