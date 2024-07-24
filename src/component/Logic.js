import React from "react";
import { useState } from "react";
import Skillspage from "./Skillspage";

function Logic({ skills, setTabName }) {
  {
    skills === "Skills" ? <Skillspage></Skillspage> : <></>;
  }
  console.log("Inside Logic Components");
  return <div>Logic</div>;
}

export default Logic;
