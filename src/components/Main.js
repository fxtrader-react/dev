import React, { Fragment } from "react";
import Header from "./layout/Header";
import Aside from "./layout/Aside";
import Section from "./layout/Section";
import SectionSidebar from "./layout/section/SectionSidebar";
// import { AuthProvider } from "../contexts/AuthContext";
// import { GlobalProvider } from "../contexts/GlobalContext";

export default function Main() {
  return (
    <>
      <Header />
      <SectionSidebar />
      <div className="main">
        <Aside />
        <Section />
      </div>
    </>
  );
}
