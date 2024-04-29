import React from "react";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import { FooterOverlay, Newsletter } from "../../components";
import "./Footer.css";
import { images } from "../../constants";

const Footer = () => (
  <div className="app__footer section__padding">
    <FooterOverlay />
    <Newsletter />
    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">
          Ayyappa Society Main Rd, opp. Vijyalaxmi Supermarket, Ayyappa Society,
          Sri Sai Nagar, Madhapur, Hyderabad, Telangana 500081, India
        </p>
        <p className="p__opensans">+91 9392989170</p>
        <p className="p__opensans">+91 9392989170</p>
      </div>
      <div className="app__footer-links_logo">
        <img
          src={images.gericht}
          alt="footer_logo"
          style={{ width: "150px" }}
        />
        <p className="p__opensans">
          The best way to discover who you are is by immersing yourself in
          serving others.
        </p>
        <img
          src={images.spoon}
          alt="spoon"
          className="spoon__img"
          style={{ marginTop: 15 }}
        />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiInstagram />
          <FiTwitter />
        </div>
      </div>
      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday to Friday:-</p>
        <p className="p__opensans">
          Lunch Hours: 11:30 AM - 2:30 PM
          <br />
          Dinner Hours: 5:30 PM - 10:00 PM
        </p>
        <p className="p__opensans">Saturday and Sunday:-</p>
        <p className="p__opensans">
          Brunch Hours: 10:00 AM - 2:00 PM
          <br />
          Dinner Hours: 5:30 PM - 11:00 PM
        </p>
      </div>
    </div>
    <div className="footer__copyright">
      <p className="p__opensans">
        © 2024 Geetha's Flavor Fusion. All Rights Reserved. Unauthorized
        duplication or use of content without permission is prohibited.
      </p>
    </div>
  </div>
);

export default Footer;
