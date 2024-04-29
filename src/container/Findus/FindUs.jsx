import React from "react";
import { SubHeading } from "../../components";
import { images, data } from "../../constants";

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant" style={{ marginBottom: "3rem" }}>
        Find Us
      </h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">
          The hub of IT companies, HITEC City, attracts a lot of professionals
          and has a demand for high-end dining experiences1.
        </p>
        <p
          className="p__cormorant"
          style={{ color: "#DCCA87", margin: "2rem 0" }}
        >
          Opulent Hours
        </p>
        <p className="p__opensans">
          Monday to Friday:-Lunch Hours: 11:30 AM - 2:30 PM Dinner Hours: 5:30
          PM - 10:00 PM
        </p>
        <p className="p__opensans">
          Saturday and Sunday:- Brunch Hours: 10:00 AM - 2:00 PM Dinner Hours:
          5:30 PM - 11:00 PM
        </p>
      </div>
      <button className="custom__button" style={{ marginTop: "2rem" }}>
        {" "}
        Visit us
      </button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.findus} alt="findus" />
    </div>
  </div>
);

export default FindUs;
