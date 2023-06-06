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
          <ul>
            <li>About Us</li>
            <li>Pricing</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="support">
          <h4>Support</h4>
          <ul>
            <li>Tools aply</li>
            <li>E-books</li>
            <li>Management</li>
            <li>Collaboration</li>
          </ul>
        </div>
        <div className="privacy">
          <h4>Privacy</h4>
          <ul>
            <li>Help</li>
            <li>Mail Us</li>
            <li>Information</li>
            <li>Company</li>
          </ul>
        </div>
        <div className="short-link">
          <h4>Short-link</h4>
          <ul>
            <li>Contact form</li>
            <li>Newsletter</li>
            <li>Sign-up</li>
            <li>Contact Us</li>
          </ul>
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
