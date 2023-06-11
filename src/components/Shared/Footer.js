import React from "react";
import "./Footer.css";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="main-footer">
      <div className="footer">
        <div className="demo">
          <h4>Demo Studio</h4>
          <p>
            Lorem ipsum, dolor sit amet,
            <br />
            eiusmod tempor.
          </p>
          <div className="social">
            <FaTwitter className="twitter"></FaTwitter>
            <FaFacebook className="facebook"></FaFacebook>
            <FaLinkedin className="linkedin"></FaLinkedin>
          </div>
        </div>
        <div className="navigation">
          <h4>Navigation</h4>
          <div>
            <p>About Us</p>
            <p>Pricing</p>
            <p>Blog</p>
            <p>Contact Us</p>
          </div>
        </div>
        <div className="support">
          <h4>Support</h4>
          <div>
            <p>Tools aply</p>
            <p>E-books</p>
            <p>Management</p>
            <p>Collaboration</p>
          </div>
        </div>
        <div className="privacy">
          <h4>Privacy</h4>
          <div>
            <p>Help</p>
            <p>Mail Us</p>
            <p>Information</p>
            <p>Company</p>
          </div>
        </div>
        <div className="short-link">
          <h4>Short-link</h4>
          <div>
            <p>Contact form</p>
            <p>Newsletter</p>
            <p>Sign-up</p>
            <p>Contact Us</p>
          </div>
        </div>
      </div>
      <div className="bottom-footer">
        <p>&copy; Demo studio, 2020 All right reserved</p>
        <p>San Francisco valiaty, (USA)</p>
      </div>
    </div>
  );
};

export default Footer;
