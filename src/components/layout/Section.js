import React, { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";

const Section = (props) => {
  const value = useContext(GlobalContext);
  const SectionContent = props.component;
  return (
    <>
      <section className="section-container">
        <h3 style={{ color: "white" }}>{props.paramId}</h3>
        <SectionContent />
      </section>
    </>
  );
};

export default Section;
