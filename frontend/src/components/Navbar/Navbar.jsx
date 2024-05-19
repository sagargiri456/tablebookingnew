import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { Link } from "react-router-dom";
import images from "../../constants/images";

import "./Navbar.css";

const Navbar = () => (
  <nav className="app__navbar">
    <div className="app__navbar-logo">
      <Link to="/">
        <img src={images.srikrishna} alt="app__logo" />
      </Link>
    </div>
    <ul className="app__navbar-links">
      <li className="p__opensans">
        <Link to="/">Home</Link>
      </li>
      <li className="p__opensans">
        <Link to="/about">About</Link>
      </li>
      <li className="p__opensans">
        <Link to="/menu">Menu</Link>
      </li>
      <li className="p__opensans">
        <Link to="/gallery">Gallery</Link>
      </li>
      <li className="p__opensans">
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
    <div className="p__opensans">
      {/* <a href="#login" className="p__opensans">Log In / Registration</a> */}
      {/* <a href="/book" className="p__opensans">
        Book a Table
      </a> */}
      <Link to="/book">Book A Table</Link>
    </div>
  </nav>
);

export default Navbar;
