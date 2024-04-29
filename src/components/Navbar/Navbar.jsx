import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { Link, Element } from "react-scroll"; // Import from react-scroll
import images from "../../constants/images";
import "./Navbar.css";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= 80) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures this effect runs only once on component mount

  return (
    <nav className={isSticky ? "app__navbar sticky" : "app__navbar"}>
      <div className="app__navbar-logo">
        <Link to="home" smooth={true} duration={500}>
          <img src={images.gericht} alt="App Logo" />
        </Link>
      </div>

      <ul className="app__navbar-links">
        <li className="p__opensans">
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="p__opensans">
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="p__opensans">
          <Link to="menu" smooth={true} duration={500}>
            Menu
          </Link>
        </li>
        <li className="p__opensans">
          <Link to="awards" smooth={true} duration={500}>
            Awards
          </Link>
        </li>
        <li className="p__opensans">
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      <div className="app__navbar-login">
        <Link to="login" smooth={true} duration={500} className="p__opensans">
          Login/Register
        </Link>
        <a href="/" className="p__opensans">
          Book Table
        </a>
      </div>

      <div className="app__nav-smallscreen">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />

        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="app__navbar-smallscreen_links">
              <li className="p__opensans">
                <Link to="home" smooth={true} duration={500}>
                  Home
                </Link>
              </li>
              <li className="p__opensans">
                <Link to="about" smooth={true} duration={500}>
                  About
                </Link>
              </li>
              <li className="p__opensans">
                <Link to="menu" smooth={true} duration={500}>
                  Menu
                </Link>
              </li>
              <li className="p__opensans">
                <Link to="awards" smooth={true} duration={1000}>
                  Awards
                </Link>
              </li>
              <li className="p__opensans">
                <Link to="contact" smooth={true} duration={500}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
