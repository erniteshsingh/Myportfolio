import React from "react";
import aboutmeimg from "../IMG/contactMe.jpg";
import styles from "../CSS/Contact.module.css";
function Contact() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className={`${styles.contactimg} col-6 `}>
            <img src={aboutmeimg} alt></img>
          </div>

          <div className={`${styles.form} col-6`}>
            <form action="action">
              <label htmlFor="fname">First Name</label>
              <input
                type="text"
                id="fname"
                name="firstname"
                placeholder="Your name.."
              />

              <label for="lname">Last Name</label>
              <input
                type="text"
                id="lname"
                name="lastname"
                placeholder="Your last name.."
              />

              <label for="lname">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email here.."
              />
              <label>Mobile No:</label>
              <input
                type="number"
                name="mobile"
                placeholder=" your Mobile Number..."
              />
              <button className={`${styles.sendbutton} btn btn-success`}>
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default Contact;
