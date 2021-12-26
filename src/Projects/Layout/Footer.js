import React from "react";
import {
  FaFacebook,
  FaLinkedin,
  FaMailBulk,
  FaInstagramSquare,
  FaTwitter,
} from "react-icons/fa";
function Footer() {
  return (
    <div className="footer-parent">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#000b76"
          fill-opacity="1"
          d="M0,320L0,128L205.7,128L205.7,96L411.4,96L411.4,192L617.1,192L617.1,256L822.9,256L822.9,0L1028.6,0L1028.6,96L1234.3,96L1234.3,256L1440,256L1440,320L1234.3,320L1234.3,320L1028.6,320L1028.6,320L822.9,320L822.9,320L617.1,320L617.1,320L411.4,320L411.4,320L205.7,320L205.7,320L0,320L0,320Z"
        ></path>
      </svg>
      <div className="footer-content d-flex align-items-center flex-column">
        <p>Designed and Developed By</p>

        <div className="d-flex social-icons justify-content-between ">
          <FaFacebook />
          <FaLinkedin />
          <FaMailBulk />
          <FaInstagramSquare />
          <FaTwitter />
        </div>

        <p>Sathyaprakash Reddy.K</p>
      </div>
    </div>
  );
}

export default Footer;
