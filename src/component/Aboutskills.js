import React, { useState } from "react";
import styles from "../CSS/Aboutskills.module.css";
import { useNavigate } from "react-router-dom";
function Aboutskills({}) {
  const navigate = useNavigate();
  const skillHandler = () => {
    navigate("/skill");
  };
  const JourneyHandler = () => {
    navigate("/journey");
  };
  const contactHandler = () => {
    navigate("/contact");
  };
  const rankeHandel = () => {
    navigate("/ranke");
  };
  const aboutHandler = () => {
    navigate("/about");
  };
  return (
    <>
      <div className={`${styles.aboutskills} container`}>
        <h1>AboutSkills</h1>
        <div className={styles.customeskills}>
          <li onClick={aboutHandler}>About</li>
          <li onClick={skillHandler}>Skills</li>
          <li onClick={JourneyHandler}>Journey</li>
          <li onClick={rankeHandel}>Ranking</li>
          <li onClick={contactHandler}>Contact Me</li>
        </div>
        <hr />
      </div>
    </>
  );
}
export default Aboutskills;
