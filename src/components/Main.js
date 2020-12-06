import React, { useContext, useState } from "react";
import Header from "./layout/Header";
import { Aside } from "./layout/Aside";
import Section from "./layout/Section";
import { routes } from "../helpers";
import { useHistory } from "react-router-dom";
import SectionSidebar from "./layout/section/SectionSidebar";

export default function Main({ match }) {
  const history = useHistory();
  const result = routes.find((route) => route.name === match.params.id);

  if (result) {
    return (
      <>
        <Header />
        <SectionSidebar />
        <div className="main">
          <Aside paramId={match.params.id} />
          <Section paramId={match.params.id} component={result.component} />
        </div>
      </>
    );
  } else {
    history.push("/page-not-found");
    return null;
  }
}
