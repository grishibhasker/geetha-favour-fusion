import React from "react";
import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Chef.css";

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-revers">
      <img src={images.chef} alt="Chef Image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's Thoughts" />
      <h1 className="headtext__cormorant">What We Stand For</h1>
      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote" />
          <p className="p__opensans">
            Welcome to Geetha's Flavor Fusion! We believe in creating amazing
            food
          </p>
        </div>
        <p className="p__opensans">
          with quality ingredients and a touch of creativity. Our dishes are
          inspired by tradition but always with a unique twist. We're here to
          ensure you have a great dining experience. Whether it's a casual meal
          or a special event, our team is committed to providing a warm and
          welcoming atmosphere.
        </p>
      </div>
      <div className="app__chef-sign">
        <p>Sanjeev Kapoor</p>
        <p className="p__opensans">Chef</p>
        <img src={images.sign} alt="sign" />
      </div>
    </div>
  </div>
);

export default Chef;
