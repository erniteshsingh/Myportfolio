import React from "react";
import styles from "../CSS/AboutMe.module.css";
import aboutmeimg from "../IMG/aboutmeimg.avif";
function AboutMe() {
  return (
    <div class="container text-center">
      <div className={`${styles.ourrow} row`}>
        <div className={`${styles.aboutme} col-4`}>
          <img src={aboutmeimg}></img>
        </div>
        <div className={`${styles.aboutskill} col-8`}>
          <p className={styles.paragraph}>
            My name is <b>Nitesh Singh</b> and I am a
            <b> Computer Science Engineering student</b> at
            <b> Riit</b>
          </p>
          <p className={styles.paragraph}>
            I am proficient in various programming languages such as <b>C</b>,
            <b>C++</b>, <b>Java</b>, <b>Python</b>, <b>Html</b>,<b>Css</b>,{" "}
            <b>JavaScript</b>, <b>ReactJs</b>,<b>DSA</b>,<b>MongoDb</b>
          </p>
          <p className={styles.paragraph}>
            I also have experience working with frameworks and libraries such as{" "}
            <b>NodeJS</b>, <b>ReactJS</b>
          </p>
          <p className={styles.paragraph}>
            Whenever possible, I also apply my passion for developing products
            with <b>Modern Javascript Library and Frameworks.</b>
          </p>
          <p className={styles.paragraph}>
            In my free time, I enjoy learning new technologies and{" "}
            <b>building new web technologies and products.</b>
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
