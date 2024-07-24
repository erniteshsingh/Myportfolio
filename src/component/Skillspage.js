import styles from "../CSS/Skillspage.module.css";
function Skillspage() {
  return (
    <>
      <div className="container text-center">
        <p>HTML</p>
        <div class={styles.container}>
          <div class={`${styles.skills} ${styles.html} `}>40%</div>
        </div>

        <p>CSS</p>
        <div class={styles.container}>
          <div class={`${styles.skills} ${styles.css}`}>50%</div>
        </div>
        <p>JavaScript</p>
        <div class={styles.container}>
          <div class={`${styles.skills}  ${styles.js}`}>45%</div>
        </div>
        <p>ReactJs</p>
        <div class={styles.container}>
          <div class={`${styles.skills}  ${styles.react}`}>55%</div>
        </div>
        <p>C</p>
        <div class={styles.container}>
          <div class={`${styles.skills}  ${styles.c}`}>60%</div>
        </div>
        <p>C++</p>
        <div class={styles.container}>
          <div class={`${styles.skills}  ${styles.cplusplus}`}>70%</div>
        </div>
        <p>Java</p>
        <div class={styles.container}>
          <div class={`${styles.skills}  ${styles.java}`}>80%</div>
        </div>
        <p>Python</p>
        <div class={styles.container}>
          <div class={`${styles.skills}  ${styles.python}`}>40%</div>
        </div>
        <p>MongoDb</p>
        <div class={styles.container}>
          <div class={`${styles.skills}  ${styles.mongodb}`}>40%</div>
        </div>
        <p>DSA</p>
        <div class={styles.container}>
          <div class={`${styles.skills}  ${styles.dsa}`}>40%</div>
        </div>
      </div>
      <hr></hr>
    </>
  );
}
export default Skillspage;
