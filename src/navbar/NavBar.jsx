import React from "react";
import NavLink from "./NavLink";
import "./Navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import StarIcon from "@mui/icons-material/Star";
import "../Style.css";
const NavBar = () => {
  return (
    <div>
      <div className="navContainer">
        <div className="Mainwrap">
          <div>
            <img
              className="leftLogoStyle"
              src="https://static.crozdesk.com/web_app_library/providers/logos/000/020/181/original/dreamslms-1675929974-logo.png?1675929974"
              alt="logo"
            />
          </div>
          <div>
            <NavLink />
          </div>
          <div>
            <img
              className="rightLogoStyle"
              src="https://thumbs.dreamstime.com/b/lms-letter-initial-logo-design-lms-letter-initial-logo-design-vector-illustration-letter-initial-logo-design-vector-illustration-236632062.jpg"
              alt="logo"
            />
          </div>
        </div>
        <div className="flexWrap">
          <div className="leftContent">
            <p>The Leader in Online Learning</p>
            <h3>
              Engaging &<br /> Accessible Online
              <br /> Courses For all
            </h3>
            <div className="searchStyle">
              <span className="searchIconStyle">
                <SearchIcon />
              </span>
              <input
                className="inputStyle"
                type="text"
                placeholder="Search School,Online education centers,etc"
              />
              <span className="arrowStyle">
                <ArrowForwardIcon />
              </span>
            </div>
            <p>
              Trusted by Over 15K Users
              <br />
              worldside since 2022
            </p>
            <div className="mainstarStyle">
              <h3>290+</h3>
              <h1 className="childStarStyle">
                4.5
                <StarIcon className="starStyle" />
                <StarIcon className="starStyle" />
                <StarIcon className="starStyle" />
                <StarIcon className="starStyle" />
                <StarIcon className="starStyle" />
              </h1>
            </div>
          </div>
          <div className="rightContent">
            <img
              className="rightImageStyle"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbxA60_me1btVR8J0jDnmphVdYCFw-1SLRDw&usqp=CAU"
              alt="image"
            />
          </div>
        </div>
      </div>
      <div className="cardStyle">
        <div className="childCard">Online Course</div>
        <div className="childCard">Expert Tutors</div>
        <div className="childCard">Certified Courses</div>
        <div className="childCard">Online Students</div>
      </div>
    </div>
  );
};

export default NavBar;
