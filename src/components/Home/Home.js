import React from "react";
import Banner from "../Banner/Banner";
import Business from "../Business/Business";
import Testimonial from "../Testimonial/Testimonial";
import Portfolio from "../Portfolio/Portfolio";
import Market from "../Market/Market";
import "./Home.css";
const Home = () => {
  return (
    <div className="home">
      <Banner></Banner>
      <Business></Business>
      <Testimonial></Testimonial>
      <Portfolio></Portfolio>
      <Market></Market>
    </div>
  );
};

export default Home;
