import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { FaBars } from "react-icons/fa";
const Header = () => {
  return (
    <nav>
      <input type="checkbox" id="check" />
      <label htmlFor="check" className="checkbtn">
        {/* <i className="fas fa-bars"></i> */}
        <FaBars className="fa-bars"></FaBars>
      </label>
      <label className="logo">Demo</label>
      <ul>
        <li>
          <Link className="active" href="#">
            Home
          </Link>
        </li>
        <li>
          <Link>Portfolio</Link>
        </li>
        <li>
          <Link>Blog</Link>
        </li>
        <li>
          <Link>Contact</Link>
        </li>

        <button className="get-started-btn">Get Started</button>
      </ul>
    </nav>
  );
};

export default Header;
