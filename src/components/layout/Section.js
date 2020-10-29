import React, { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";

const Section = () => {
  const value = useContext(GlobalContext);
  const SectionContent = value.section;

  return (
    <>
      <section className="section-container">
        <h3 style={{ color: "white" }}>{value.menuName}</h3>
        <SectionContent />
      </section>
    </>
  );
};

export default Section;
