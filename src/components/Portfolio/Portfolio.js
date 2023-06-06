import React from "react";
import leftside from "../../asset/leftside.png";
import rightside1 from "../../asset/rightside1.png";
import rightside2 from "../../asset/rightside2.png";
import "./Portfolio.css";
const Portfolio = () => {
  return (
    <div className="portfolio">
      <h1>
        epartment local national government <br />
        and administration
      </h1>
      <div className="portfolio-left">
        <img className="leftside" src={leftside} alt="" />
        <div className="portfolio-right">
          <img className="rightside1" src={rightside1} alt="" />
          <img className="rightside2" src={rightside2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
