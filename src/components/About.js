import React from "react";
import "./css-styles/about.css";
import edu1 from "../images/edu1.png";
import work1 from "../images/work1.png";
export default function About() {
  return (
    <div className="container body">
      <h2>About</h2>
      <div className="row">
        <div className="col-8">
          <p>
            Hi there! I enjoy working on the things that can be done on web. I
            got fascinated with the internet ever since I was a kid. With some
            interest in art it spiked my interest in web development. It felt
            something very similar to makign art. I feel like an empty webpage
            is a canvas and bulding things on top of it is like an artist making
            paint on the canvas. Html and css grabbed my attention on the web
            world. Later on as i dived deeper into it I JS, Html and css made
            lot of possibilites.{" "}
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col col-8">
          <p>
            Below is some of the technologies that I have been working on
            recently
          </p>
        </div>
        <div className="row">
          <div className="col col-8">
            <div className="col-4">
              <ul>
                <li>Html,Css & Js</li>
                <li>React</li>
                <li>.NET technologies</li>
              </ul>
            </div>
            <div className="col-4">
              <ul>
                <li>Wordpress</li>
                <li>Shopify</li>
                <li>.NET technologies</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* section for the education section */}

      <div className="row topG">
        <div className="col-10">
          <img src={edu1} />
          <h3> Education</h3>
          <p>
            Bachelors in Computer Science <br />
            East Central University <br />
            Ada Oklahoma- Dec 2021
          </p>
        </div>
      </div>

      {/* section for the experience section */}
      <div className="row">
        <div className="col-10">
          <h3> Professional Experience</h3>
          <img src={work1} />
          <p>
            Palm Beach County <br />
            Programmer <br />
            05/22-04/23
          </p>
        </div>
      </div>
    </div>
  );
}
