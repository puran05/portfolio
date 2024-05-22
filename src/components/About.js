import React from "react";
import "./css-styles/about.css";
import edu1 from "../images/edu1.png";
import work1 from "../images/work1.png";
export default function About() {
  return (
    <div className="container col-10">
      <h2>About</h2>
      <div className="row">
        <div className="col-8">
          <p>
            Hi there! I have always been captivated by the endless possibilities
            of the web. My fascination with the internet began in childhood, and
            my interest in art naturally led me to web development. To me, an
            empty webpage is like a blank canvas, and building on it feels akin
            to creating a masterpiece. HTML and CSS initially grabbed my
            attention, and as I delved deeper, JavaScript further expanded the
            horizons of what I could achieve. My passion for web development
            inspired me to start creating full-stack applications, which
            eventually led me to work with WordPress. I’ve built websites for
            businesses and ventured into the e-commerce space by developing
            sites using Shopify. The ability to bring ideas to life on the web
            continues to inspire me every day.{" "}
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
            </ul>
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
