import React from "react";
import Navbar from "./Navbar";
import "./css-styles/home.css";

export default function Home() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col left-side">
            <h1 className="first-name">Hello world</h1>
            <br />
            <h2 className="introduction">
              I am
              <br /> Puran <br />
              Subedi
            </h2>
          </div>

          <div className="col right-side">
            <div className="profile-pic"></div>
          </div>
        </div>
        <div className="row">
          <p>the images will go here</p>
        </div>
        <div className="row">
          <div className="col">
            <p>short description about me goes here</p>
          </div>
        </div>
      </div>
    </>
  );
}
