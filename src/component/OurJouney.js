import React from "react";
import styles from "../CSS/OurJourney.module.css";
function OurJouney() {
  return (
    <>
      <div
        className={`container text-center ${styles.first_row} ${styles.bodypage}`}
      >
        <h1>Qualification Journey</h1>
        <div className={`${styles.row} row`}>
          <div className={`${styles.first_column} col-4`}>
            <main>
              <section>
                <h2>About 10th Class</h2>
                <p>
                  The 10th class is an important milestone in a student's
                  academic journey. It prepares students for higher education
                  and future career opportunities.
                </p>
              </section>
              <section>
                <h2>Subjects</h2>
                <ul className={`${styles.subject_section}`}>
                  <li>Mathematics</li>
                  <li>Science</li>
                  <li>Social Science</li>
                  <li>English</li>
                  <li>Language (Hindi/Regional)</li>
                </ul>
              </section>
              <section>
                <h2>Exams</h2>
                <p>Important exams in 10th class include:</p>
                <ul className={`${styles.subject_section}`}>
                  <li>Midterm Exams</li>
                  <li>Final Exams</li>
                  <li>Board Examinations</li>
                </ul>
              </section>
              <section>
                <h2>Results 50%</h2>
                <p>
                  Students eagerly await their results to assess their
                  performance and plan for future studies.
                </p>
              </section>
            </main>
          </div>
          <div className={`${styles.second_column} col-4`}>
            <main>
              <section>
                <h2>About 12th Class</h2>
                <p>
                  The 12th class is an important milestone in a student's
                  academic journey. It prepares students for higher education
                  and future career opportunities.
                </p>
              </section>
              <section>
                <h2>Subjects</h2>
                <ul className={`${styles.subject_section}`}>
                  <li>History</li>
                  <li>Political Science</li>
                  <li>Social Studies</li>
                  <li>English</li>

                  <li>Language (Hindi/Regional)</li>
                </ul>
              </section>
              <section>
                <h2>Exams</h2>
                <p>Important exams in 10th class include:</p>
                <ul className={`${styles.subject_section}`}>
                  <li>Midterm Exams</li>
                  <li>Final Exams</li>
                  <li>Board Examinations</li>
                </ul>
              </section>
              <section>
                <h2>Results 60%</h2>
                <p>
                  Students eagerly await their results to assess their
                  performance and plan for future studies.
                </p>
              </section>
            </main>
          </div>
          <div className={`${styles.third_column} col-4`}>
            <main>
              <section>
                <h2>Graduation:(BCA)</h2>
                <p>
                  The Graduation class is an important milestone in a student's
                  academic journey. It prepares students for higher education
                  and future career opportunities.
                </p>
              </section>
              <section>
                <h2>Subjects</h2>
                <ul className={`${styles.subject_section}`}>
                  <li>Programing Language</li>
                  <li>Data Structures and Algorithms</li>
                  <li>Database Management Systems</li>
                  <li>Operating Systems</li>
                  <li>Computer Networks</li>
                </ul>
              </section>
              <section>
                <h2>Exams</h2>
                <p>Important Exam semester-wise basis:</p>
                <ul className={`${styles.subject_section}`}>
                  <li>Midterm Exams</li>
                  <li>Final Exams</li>
                </ul>
              </section>
              <section>
                <h2>Results 9.2 CGPA</h2>
                <p>
                  Students eagerly await their results to assess their
                  performance and plan for future studies.
                </p>
              </section>
            </main>
          </div>
        </div>
      </div>
      <hr></hr>
    </>
  );
}
export default OurJouney;
