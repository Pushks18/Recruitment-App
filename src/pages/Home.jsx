import React from "react";
import Navbar from "../components/Navbar";
import Ellipse from "../components/Ellipse";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-black h-full w-full">
      <Navbar />
      <div className="grid grid-cols-2">
        <div>
          <p className="text-white text-5xl ml-20 pt-20 mt-20  font-light absolute">
            Be part of a community of passionate individuals who are dedicated
            to pushing boundaries, making a difference, and shaping the future.
          </p>
          <Ellipse />
        </div>
        <div className="">
          <img
            className="mt-20 pt-20"
            src={require("../assets/images/ball.png")}
            alt="3D Ball"
          />
          {/* <h3 className="text-white">Hiring became easier.</h3> */}
          <div className="flex">
            <Link to="https://www.facebook.com/studymonk.inc/">
              <img
                className="pt-10 pr-10"
                src={require("../assets/images/facebook.png")}
                alt=""
              />
            </Link>
            <Link to="https://www.instagram.com/studymonk.inc/?hl=en">
              <img
                className="pt-10 pr-10"
                src={require("../assets/images/insta.png")}
                alt=""
              />
            </Link>
            <Link to="https://twitter.com/studymonkinc">
              <img
                className="pt-10 pr-10"
                src={require("../assets/images/twitter.png")}
                alt=""
              />
            </Link>
            <Link to="https://www.linkedin.com/company/studymonk/?originalSubdomain=in">
              <img
                className="pt-10"
                src={require("../assets/images/linkedin.png")}
                alt=""
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
