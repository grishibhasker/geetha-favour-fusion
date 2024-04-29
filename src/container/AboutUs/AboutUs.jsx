import React from "react";
import { images } from "../../constants";
import "./AboutUs.css";

const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section __padding"
    id="about"
  >
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt=" back ground image" />
    </div>
    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="About_spon" className="spoon__img" />
        <p className="p__opensans">
          Welcome to Geetha's Flavor Fusion, where tradition meets innovation in
          every dish. Located in the heart of Hyderabad, our restaurant is
          dedicated to crafting unforgettable culinary experiences. From classic
          favorites to inventive fusion creations, each bite tells a story of
          passion and flavor. Join us and savor the essence of Geetha's Flavor
          Fusion
        </p>
        <button className="custom__button" type="button">
          Known More
        </button>
      </div>
      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="knife image" />
      </div>
      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our history</h1>
        <img src={images.spoon} alt="About_spon" className="spoon__img" />
        <p className="p__opensans">
          Since 2011, Geetha's Flavor Fusion has been a culinary landmark in
          Hyderabad. With a passion for flavor and innovation, we've curated a
          menu that blends tradition with creativity. Join us on our journey and
          taste the essence of Geetha's Flavor Fusion.
        </p>
        <button className="custom__button" type="button">
          Known More
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
