import React from "react";
import { images } from "../../constants";

import "./Header.css";
import { SubHeading } from "../../components";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title=" Hunting the Freshest Flavors " />
      <h1 className="app__header-h1">Embracing Epicurean Pleasures</h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
        Join us for an unforgettable dining experience where traditional tastes
        blend with innovative creations. Discover our vibrant dishes, warm
        hospitality, and exceptional service. Reserve your table now and indulge
        in the essence of Geetha's Flavor Fusion
      </p>
      <button type="button" className="custom__button">
        {" "}
        Explore Menu
      </button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.welcome} alt="heroImage" />
    </div>
  </div>
);

export default Header;
