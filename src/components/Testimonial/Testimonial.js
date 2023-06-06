import React from "react";
import businesspic from "../../asset/pic2.png";
import "./Testimonial.css";
const Testimonial = () => {
  return (
    <div className="testimoial">
      <img src={businesspic} alt="" />
      <div>
        <h1>
          Business that serves as
          <br />
          representative,acting <br />
          of another
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          ipsum praesentium vitae vero soluta illo qui libero esse nulla velit
          facere perspiciatis eaque sit earum nihil hic maiores, facilis fugit
          consequatur id fuga nesciunt provident. Exercitationem, nesciunt.
          Voluptatem, in minus.
        </p>
        <button className="testimoial-btn">Get Started btn</button>
      </div>
    </div>
  );
};

export default Testimonial;
