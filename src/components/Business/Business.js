import React from "react";
import "./Business.css";
import businesspic from "../../asset/pic2.png";
const Business = () => {
  return (
    <div className="business">
      <div className="business-info">
        <h1>
          Business dedicated <br /> to creating, planning <br />
          advertising
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          ipsum praesentium vitae vero soluta illo qui libero esse nulla velit
          facere perspiciatis eaque sit earum nihil hic maiores, facilis fugit
          consequatur id fuga nesciunt provident. Exercitationem, nesciunt.
          Voluptatem, in minus.
        </p>
        <button className="business-btn">Get Started btn</button>
      </div>

      <img className="business-img" src={businesspic} alt="" />
    </div>
  );
};

export default Business;
