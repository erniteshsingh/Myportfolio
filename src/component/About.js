import React from "react";
import styles from "../CSS/About.module.css";
import ourlogo from "../IMG/myimage2.jpg";
import { BsLinkedin } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
//fontosome
function About() {
  return (
    <div>
      {/*  <div className={`${styles.container} container`}> */}
      {/* <div className={`${}`}></div> */}
      <div className=" container text-center">
        <div className="row">
          <div className={`${styles.about}  col-8`}>
            <h1>Hi There!</h1>
            <h1>I'M Nitesh Singh</h1>
            <h2> Full-Stack Developer</h2>
            <div className={styles.social}>
              <a href="https://www.linkedin.com/in/nitesh-singh-a78a60269/">
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
              <a href="https://x.com/?lang=en">
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
          <div className={`${styles.about} ${styles.ourimage} col-4`}>
            <img src={ourlogo}></img>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
