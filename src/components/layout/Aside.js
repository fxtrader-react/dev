import React, { useContext, useState } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import LeftSideIcon from "../layout/aside/LeftSideIcon";

const LeftSidebar = () => {
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

  return <aside>{ListIcons}</aside>;
};

export default LeftSidebar;
