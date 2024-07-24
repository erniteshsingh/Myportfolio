import React from "react";
import Skillspage from "./Skillspage";
function PageRender(props) {
  return <div>{props.skills === true ? <Skillspage /> : null}</div>;
}
export default PageRender;
