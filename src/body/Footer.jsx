import React from "react";
import "./Footer.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import "../Style.css";
const Footer = () => {
  return (
    <div>
      <div className="wrap">
        <div className="lastContainer">
          <ul>
            <li>
              <h2 style={{ color: "white" }}>News Letter</h2>
              <div style={{ display: "flex", color: "white" }}>
                <div>
                  <LocationOnIcon />
                </div>
                <div>
                  <li>355 Beech Street, San Francisco, California,CA 94108</li>
                </div>
              </div>
              <div style={{ display: "flex", color: "white" }}>
                <div>
                  <PhoneIcon />
                </div>
                <div>
                  <li>+91 45-65-43-22-13</li>
                </div>
              </div>
              <div style={{ display: "flex", color: "white" }}>
                <div>
                  <MailOutlineIcon />
                </div>
                <div>
                  <li>dreamslms@example.com</li>
                </div>
              </div>
            </li>
            <li>
              <h2 style={{ color: "white" }}>Menu</h2>
              <ol style={{ color: "white" }}>
                <li>Home</li>
                <li>Shop</li>
                <li>Products</li>
                <li>Bags</li>
                <li>cosmetics</li>
              </ol>
            </li>
            <li>
              <h2 style={{ color: "white" }}>For Student</h2>
              <ol style={{ color: "white" }}>
                <li>Frequently Asked Questions</li>
                <li>Returns And Refunds</li>
                <li>CGV</li>
                <li>Legal Notice</li>
                <li>Track My Order</li>
              </ol>
            </li>
            <li>
              <h2 style={{ color: "white" }}>Get More Updates</h2>
              <div>
                <input
                  type="text"
                  placeholder="Enter your email here"
                  style={{
                    border: "1px solid blue",
                    height: "30px",
                    width: "394px",
                  }}
                />
                <button className="submitStyle">Submit</button>
                <div style={{ color: "white" }}>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Quos,
                  <br /> pariatur! Voluptate aspernatur ad optio quia quam
                  aperiam! Nihil, accusamus nobis?
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
