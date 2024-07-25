import React from "react";
import Navbar from "./Navbar";
import "./css-styles/home.css";
import "font-awesome/css/font-awesome.min.css";
import img1 from "../images/img1.png";
import img2 from "../images/img2.png";
import { Link } from "react-router-dom";
import MyDialog from "./Dialog";
import { Dialog } from "@mui/material";
import Project1 from "./projectsdialog/Projectone";
import Project2 from "./projectsdialog/Projecttwo";
import Project3 from "./projectsdialog/Projectthree";

export default function Home() {
  return (
    <>
      {/* the top banner */}

      <div className="container">
        <div className="row">
          {/* this is the left side of the banner */}
          <div className="container col left-side">
            <h1 className="first-name">Hello world</h1>
            <br />
            <h2 className="introduction">
              I am
              <br /> Puran <br />
              Subedi
            </h2>
            <p className="name-subtitle">
              I am a programmer focusing on web development and ecommerce (and
              occasionally designing)
            </p>
          </div>
          {/* this is the right side of the banner */}
          <div className="col right-side">
            <div className="profile-pic"></div>
          </div>
        </div>
      </div>

      <div className="row socials">
        <div className="col">
          <Link to="https://github.com/puran05" className="social-link-one">
            <i className="fa fa-github fa-3x" aria-hidden="true">
              {" "}
            </i>
          </Link>
          <Link to="https://www.linkedin.com/in/puran-subedi-aa3544231/">
            <i className="fa fa-linkedin fa-3x"> </i>{" "}
          </Link>
          <Link to="https://codepen.io/puran05">
            <i className="fa fa-codepen fa-3x" aria-hidden="true"></i>
          </Link>
        </div>
      </div>

      {/* the waves section        */}
      <div className=" testMeo"></div>
      {/* this is the section below the social images link */}
      <div className="container-fluid section-one">
        <h2 className="section-one-heading">I build webapps and websites</h2>
        <p>
          I have experience working on full stack apps . Also, I have worked
          with clients to creates sites Wordpress and Shopify.
        </p>
      </div>
      {/* below is the section where the workshowcase will go */}
      <div className="row works-section">
        <div className="container-fluid portfolio-showcase mt-5">
          <div className="row ">
            <div className="col-lg-4 col-md-6 col-sm-6 ">
              <Project1 />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <Project2 />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <Project3 />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
