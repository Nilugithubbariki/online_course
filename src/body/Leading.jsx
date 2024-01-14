import React from "react";
import "./Leading.css";
import Slider from "react-slick";
import { Avatar } from "@mui/material";
import "../Style.css";
const Leading = () => {
  const cardsData = [
    {
      id: 1,
      src: "https://img.freepik.com/free-vector/online-tutorials-concept_52683-37480.jpg?size=626&ext=jpg&ga=GA1.1.1412446893.1705017600&semt=ais",
      name: "David Powell",
      instructor: "Instructor",
      title: "Complet HTML,CSS and Javascript Course",
    },
    {
      id: 2,
      src: "https://st3.depositphotos.com/3591429/12861/i/450/depositphotos_128610006-stock-photo-computer-with-online-course-concept.jpg",
      name: "David Powell",
      instuctor: "Instructor",
      title: "Fullstack WordPress Developer",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1516397281156-ca07cf9746fc?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8b25saW5lJTIwY291cnNlc3xlbnwwfHwwfHx8MA%3D%3D",
      name: "Michael Morgan",
      instuctor: "Instructor",
      title: "Advanced Android 12 & Kotlin Development Course",
    },
    {
      id: 3,
      src: "https://cdn.elearningindustry.com/wp-content/uploads/2016/09/online-course-development-process-must-know-outsource.jpeg",
      name: "Michael Morgan",
      instructor: "Instructor",
      title: "iOS & Swift Complete iOS Application Development Course",
    },
    {
      id: 3,
      src: "https://images.inc.com/uploaded_files/image/1920x1080/getty_933383882_2000133420009280345_410292.jpg",
      name: "Michael Morgan",
      instructor: "instructor",
      title: "REST APIs with Flask and Python Developer Course",
    },
    {
      src: "https://www.oberlo.com/media/1603898030-womans-hands-typing-laptop-scaled.jpg?fit=max&fm=jpg&w=1824",
      name: "Michael Morgan",
      instructor: "instructor",
      title: "Complete Python & PostgreSQL Developer Course",
    },
    {
      src: "https://www.oberlo.com/media/1603898030-womans-hands-typing-laptop-scaled.jpg?fit=max&fm=jpg&w=1824",
      name: "Michael Morgan",
      instructor: "instructor",
      title: "Complete Python & PostgreSQL Developer Course",
    },
  ];
  const Cards = ({ src, name, instructor, courses }) => (
    <div className="card">
      <div>
        <img className="srStyle" src={src} alt="" />
      </div>
      <p>{name}</p>
      <p>{instructor}</p>
      <p>{courses}</p>
    </div>
  );
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div>
      <div className="leadStyle">
        <p>Trusted By</p>
        <h3>500+ Leading Universities And Companies</h3>
        <div className="logo">
          <img
            className="logoimageStyle"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Colruyt_logo.svg/1200px-Colruyt_logo.svg.png"
            alt="colruyt_logo"
          />
          <img
            className="logoimageStyle"
            src="https://logowik.com/content/uploads/images/university-of-oxford9718.jpg"
            alt="Oxford_logo"
          />
          <img
            className="logoimageStyle"
            src="https://iconape.com/wp-content/png_logo_vector/dixie.png"
            alt="dixie_logo"
          />
          <img
            className="logoimageStyle"
            src="https://logowik.com/content/uploads/images/spike2634.jpg"
            alt="positech_logo"
          />
          <img
            className="logoimageStyle"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Spike_logo_2015.svg/2560px-Spike_logo_2015.svg.png"
            alt="spike_logo"
          />
          <img
            className="logoimageStyle"
            src="https://i.pinimg.com/originals/70/9e/a2/709ea2befcdc95124a997576b03aec14.png"
            alt="google_logo"
          />
        </div>
      </div>
      <div className="knowledge">
        <div className="leftdge">
          <img
            style={{ width: "396px", height: "250px" }}
            src="https://static.theprint.in/wp-content/uploads/2022/09/study.jpg"
            alt="logo_image"
          />
        </div>
        <div className="rightdge">
          <h3>Want to share your knowledge?join us a Mentor</h3>
          <p>
            High-definition video is video of higher resolution and quality than
            <br />
            standard-definition.While there is no standardized meaning for high-
            <br />
            definition,generally any video.
          </p>
          <h5>Best Courses</h5>
          <h5>Top rated Instructors</h5>
          <button className="btnStyle">Read More</button>
        </div>
      </div>
      <div className="footerimageStyle">
        <div className="userStyle">
          <p>Check out these real reviews</p>
          <h3>Users-love-us Don't take it from us.</h3>
        </div>
      </div>
      <div className="div">
        <div className="leftdiv">
          <h4>Become An Instructor</h4>
          <p>
            Top instructors from around the world
            <br />
            teach millions of students on Mentoring.
          </p>
        </div>
        <div className="rightdiv">
          <h4>Transform Access To Education</h4>
          <p>
            Create an account to receive our
            <br />
            newsietter,course recommendations and promotions.
          </p>
        </div>
      </div>
      <div className="blocgStyle">
        <div className="latestBlog">
          <h2>Latest Blogs</h2>
          <p>
            Lorem Ipsum dolor sit amet,consectetur adilpiscing elit.Eget aenean
            accumsan bibendum
            <br />
            gravida maecenas augue elementum et neque. Suspendisse imperdiet.
          </p>
          <Slider {...settings}>
            {cardsData.map((card) => (
              <Cards key={card.id} {...card} />
            ))}
          </Slider>
          <div className="foterline">
            <div className="book">
              <div>
                <Avatar className="fotStyle" src="/broken-image.jpg" />
              </div>
              <div>
                <img
                  className="fotStyle"
                  src="https://www.shutterstock.com/image-photo/open-book-on-white-background-260nw-523462210.jpg"
                  alt="book_logo"
                />
              </div>
              <div>
                <img
                  className="fotStyle"
                  src="https://cdn.pixabay.com/photo/2011/12/13/14/31/earth-11015_640.jpg"
                  alt="world_logo"
                />
              </div>
            </div>
          </div>
          <div className="footunlimitedStyle">
            <h3>
              Unlimited access to 360+ courses
              <br />
              and 1,600+ hands-on labs
            </h3>
            <div className="divimage">
              <div>
                <img
                  className="courselogo"
                  src="https://cdn.pixabay.com/photo/2011/12/13/14/31/earth-11015_640.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="courselogo"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/1200px-React_Logo_SVG.svg.png"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="courselogo"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="courselogo"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="courselogo"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leading;
