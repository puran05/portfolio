import React from "react";
import { Link } from "react-router-dom";
import "./css-styles/contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { ReactComponent as Icon } from "../images/linkedin.svg";

export default function Contact() {
  return (
    <div className="container body">
      <h2>Contact</h2>
      <div className="row">
        <div className="col email-part">
          {/* this is for the circle div */}
          <div className="circle-div">
            <FontAwesomeIcon icon={faEnvelope} className="envelope" />
          </div>
          <div className="col-6 circle-div-email">
            pdigitalcrafts@protonmail.com
          </div>
        </div>
      </div>
      <div className="row phone ">
        <div className="circle-div">
          <FontAwesomeIcon icon={faPhone} className="envelope" />
        </div>
        <div className="col-6 circle-div-email">817-752-4754</div>
      </div>

      {/* third row with lest connect on linkedin block */}
      <div className="row">
        <div className="col-6">
          <h2>
            Let’s connect on
            <br /> LinkedIn
          </h2>
        </div>
        <div className="col-6 ">
          <div className="contact-image-three">
            <Link to="https://www.linkedin.com/in/puran-subedi-aa3544231/">
              <div className="circle-div">
                <Icon style={{ width: "3vw", height: "3vw" }} />
              </div>
            </Link>
          </div>
          {/* <img src={Clickme} className="clickme-image" /> */}
        </div>
      </div>
    </div>
  );
}
