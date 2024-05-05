import React from "react";
import Navbar from "./Navbar";

export default function Home() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <h2>Headin will go here</h2>
            <h2> Subheading will follow the heading </h2>
          </div>
          <div className="col">My picture will go here</div>
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
