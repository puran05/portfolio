import React from "react";
import Navbar from "./Navbar";
import "./css-styles/home.css";
import "font-awesome/css/font-awesome.min.css";
import img1 from "../images/img1.png";
import img2 from "../images/img2.png";

export default function Home() {
  return (
    <>
      {/* the top banner */}
      <div className="container  ">
        <div className="row">
          {/* this is the left side of the banner */}
          <div className="col left-side">
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
        <div className="row socials">
          <div className="col">
            <i class="fa fa-github fa-3x" aria-hidden="true">
              {" "}
            </i>
            <i className="fa fa-linkedin fa-3x"> </i>{" "}
            <i class="fa fa-codepen fa-3x" aria-hidden="true"></i>
          </div>
        </div>
        {/* this is the section below the social images link */}
        <div className="section-one">
          <h2 className="section-one-heading">I build webapps and websites</h2>
          <p>
            I have experience working on full stack apps . Also, I have worked
            with some clients to creates sites Wordpress and Shopify.
          </p>
        </div>
        {/* below is the section where the workshowcase will go */}

        <div className="row works-section">
          <div className="col-4">
            <div className="card ">
              <img className="work-img-1" src={img1}></img>
              <div className="card-body">
                <div className="card-title card-heading">Clothing</div>
                <div className="card-text">
                  Build on shopify, this site provides user experience to make
                  smooth and effecient online shopping experience
                </div>
                <a href="#">Visit Site</a>
              </div>
            </div>
          </div>
          <div className="col-4 ">
            <div className="card ">
              <img className="work-img-1" src={img2}></img>
              <div className="card-body">
                <div className="card-title card-heading">
                  Loca Liquor Business
                </div>
                <div className="card-text">
                  Build on shopify, this site provides user experience to make
                  smooth and effecient online shopping experience
                </div>
                <a href="#">Visit Site</a>
              </div>
            </div>
          </div>
          <div className="col-4 ">
            <div className="card ">
              <img className="work-img-1" src={img1}></img>
              <div className="card-body">
                <div className="card-title card-heading">
                  Local Bike Business
                </div>
                <div className="card-text">
                  Build on shopify, this site provides user experience to make
                  smooth and effecient online shopping experience
                </div>
                <a href="#">Visit Site</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
