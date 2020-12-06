import React, { useContext, useState } from "react";
import Header from "../layout/Header";
import Dashboard from "./section/Dashboard";
import Invest from "./section/Invest";
import Wallet from "./section/Wallet";
import Support from "./section/Support";
import Exchange from "./section/Exchange";
import Logout from "./section/Logout";
import { Link, useHistory } from "react-router-dom";
import { Aside2 } from "../layout/Aside2";

export default function Index() {
  return (
    <div>
      <Header />
      <Aside2 />
    </div>
  );
}
