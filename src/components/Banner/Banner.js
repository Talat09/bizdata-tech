import React from "react";
import "./Banner.css";
import banner from "./../../asset/pic1.png";
const Banner = () => {
  return (
    <div className="banner">
      <h1 className="title">
        We belived in making your dreams
        <br />
        and goals a reality
      </h1>
      <button className="banner-btn">Get Started Now</button>
      <img className="banner-img" src={banner} alt="" />
    </div>
  );
};

export default Banner;
