import React, { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Section = () => {
  const value = useContext(GlobalContext);
  const SectionContent = value.section;

  return (
    <>
      <Router>
        <section className="section-container">
          <h3 style={{ color: "white" }}>{value.menuName}</h3>
          <SectionContent />
        </section>
      </Router>
    </>
  );
};

export default Section;
