import React from "react";
import styles from "../CSS/Footer.module.css";

import { BsLinkedin } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
function Footer() {
  return (
    <div className={styles.footer}>
      <div className={`${styles.footerrow} row`}>
        <div className={`${styles.footercol} col-4`}>
          <h5>Design By Nitesh Singh</h5>
        </div>
        <div className={`${styles.footercol} col-4`}>
          <p>© 2024 Nitesh Singh</p>
        </div>

        <div className={`${styles.footersocial} col-4`}>
          <a href="https://www.linkedin.com/in/nitesh-singh-a78a60269/">
            {" "}
            <li>
              <BsLinkedin
                style={{
                  fontSize: 22,
                  backgroundColor: "white",
                  borderRadius: "100px",
                }}
              />
            </li>
          </a>
          <a href="https://www.facebook.com/">
            <li>
              <FaFacebook
                style={{
                  fontSize: 22,
                  backgroundColor: "white",
                  borderRadius: "100px",
                }}
              />
            </li>
          </a>
          <a href="https://www.instagram.com/">
            <li>
              <FaInstagramSquare
                style={{
                  fontSize: 22,
                  backgroundColor: "white",
                  borderRadius: "100px",
                }}
              />
            </li>
          </a>
          <a href="https://x.com/?lang=en&mx=2">
            <li>
              <FaSquareXTwitter
                style={{
                  fontSize: 22,
                  backgroundColor: "white",
                  borderRadius: "100px",
                }}
              />
            </li>
          </a>
          <a href="https://github.com/nitesh01010">
            {" "}
            <li>
              <FaGithubSquare
                style={{
                  fontSize: 22,
                  backgroundColor: "white",
                  borderRadius: "100px",
                }}
              />
            </li>
          </a>
        </div>
      </div>
    </div>
  );
}
export default Footer;
