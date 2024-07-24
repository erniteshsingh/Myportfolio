import React from "react";
import Bus from "../IMG/aboutmeimg.avif";
import style from "../CSS/Project.module.css";
import { FaBusSimple } from "react-icons/fa6";
import { FaCcStripe } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
function Project() {
  return (
    <div>
      <div className="containers">
        <div className={`${style.row_class}`}>
          <div className={style.heading}>
            <h1 className={style.pro_h}>This is our journey with projects </h1>
            <h1 className={style.pro_h2}>Our Projects</h1>
          </div>
          <img src={Bus} className="bus_img"></img>
        </div>

        <div className={style.pro_des}>
          <h1> This is our "Acadmic Projects"</h1>
          <hr className={style.hr}></hr>
          <hr className={style.hr}></hr>
          <hr className={style.hr}></hr>
          <hr className={style.hr}></hr>
          {/* <hr></hr>
          <hr></hr>
          <hr></hr> */}
        </div>
        <div className="container">
          <div className="row">
            <div className={`col-4 ${style.bg}`}>
              <FaBusSimple className={style.bus_icon} />
              <h3 className={style.bus_icon_h}>Online Bus Ticket Booking </h3>
              <p className={style.bus_p}>
                Booking bus tickets online offers unparalleled convenience,
                allowing travelers to compare operators, prices, and schedules,
                and secure seats quickly from anywhere.
              </p>
              <button className={`btn btn-primary text-center ${style.ourbtn}`}>
                Click Now
              </button>
            </div>
            <div className={`col-4 ${style.bg}`}>
              <FaCcStripe className={style.bus_icon} />
              <h3 className={style.bus_icon_h}>makeMyTrip </h3>
              <p className={style.bus_p}>
                A trip is a journey to a different place, often for leisure or
                adventure. It offers new experiences, sights, and memories,
                providing a break from everyday life.
              </p>
              <button className={`btn btn-primary text-center ${style.ourbtn}`}>
                Click Now
              </button>
            </div>
            <div className={`col-4 ${style.bg}`}>
              <FaShoppingBag className={style.bus_icon} />
              <h3 className={style.bus_icon_h}>Myntra </h3>
              <p className={style.bus_p}>
                Shopping involves browsing and purchasing goods or services from
                various stores, either online or in-person. It can be a fun and
                exciting activity, allowing people to find new items, compare
                prices.
              </p>
              <button className={`btn btn-primary text-center ${style.ourbtn}`}>
                Click Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
