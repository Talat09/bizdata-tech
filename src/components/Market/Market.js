import React from "react";
import "./Market.css";
import market from "../../asset/market.png";
import { FaUserCheck } from "react-icons/fa";
import { FcBullish } from "react-icons/fc";
const Market = () => {
  return (
    <div class="container">
      <div className="flex-container">
        <h2 className="container-title">
          We belived in making <br />
          your dreamsand goals <br />a reality
        </h2>
        <div className="blog">
          <div class="content">
            <FaUserCheck className="facheck"></FaUserCheck>
            <h3>Targeted Solution</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              cursus ante non augue vehicula, et lacinia lectus lobortis.
            </p>
          </div>
          <div class="content">
            <FcBullish className="fabulish"></FcBullish>
            <h3>Marketing Solution</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              cursus ante non augue vehicula, et lacinia lectus lobortis.
            </p>
          </div>
        </div>
      </div>

      <div class="right">
        <img src={market} alt="" />
      </div>
    </div>
  );
};

export default Market;
