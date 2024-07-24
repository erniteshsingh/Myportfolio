import React from "react";
import styles from "../CSS/Navbar.module.css";
import myImage from "../IMG/logo.jpg";
import project from "../IMG/project4.png";
import resume from "../IMG/resume2.jpg";
import certificate from "../IMG/certificate.jpg";
import blog from "../IMG/blog.png";
import ourlogo from "../IMG/myimage2.jpg";
import { useNavigate } from "react-router-dom";
function Navbar() {
  const navigate = useNavigate();
  const handleProject = () => {
    navigate("/project");
  };
  return (
    <>
      <div className={styles.demo}>
        <ul>
          <div className={styles.navbar}>
            <img src={ourlogo} alt="Logo" className={styles.navbarlogo} />
            <span className="navbar-title">Nitesh Singh</span>
          </div>
          <li>
            <img src={myImage} alt="logo" />
            <a class="active" href="#home">
              Home
            </a>
          </li>
          <li>
            <img src={project} alt="logo" />
            <a href="#news" onClick={handleProject}>
              Project
            </a>
          </li>
          <li>
            <img src={resume} alt="logo" />
            <a href="#contact">Resume</a>
          </li>
          <li>
            <img src={certificate} alt="logo" />
            <a href="#about">Certificate</a>
          </li>
          <li>
            <img src={blog} alt="logo" />
            <a href="#about">Blogs</a>
          </li>
        </ul>
      </div>
    </>
  );
}
export default Navbar;
