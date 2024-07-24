import React from "react";
import styles from "../CSS/Ranke.module.css";
import codingninja from "../IMG/codingninja.jpeg";
import leetcode from "../IMG/leetcode.png";
import gfg from "../IMG/gfg.jpg";
function Ranke() {
  return (
    <>
      <div className="container">
        <div className={styles.rankimg}>
          <ul>
            <li>
              <a href="https://leetcode.com/Niteshcode/">
                <img src={leetcode} alt="" />
              </a>
            </li>
            <li>
              <a href="https://www.naukri.com/code360/profile/5ff401b0-f6cb-4843-9bd7-402847ec3a74">
                <img src={codingninja} alt="" />
              </a>
            </li>

            <li>
              <a href="https://www.geeksforgeeks.org/user/erniteshrc0i/">
                <img src={gfg} alt="" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
export default Ranke;
