import React from "react";
import "./css-styles/contact.css";

export default function Contact() {
  return (
    <div className="container">
      <h2>Contact</h2>

      <div className="row content">
        <div className="row email">
          <div className="col">
            <p>pdigitalcrafts@proton.mail</p>
          </div>
        </div>

        <div className="row phone">
          <div className="col">
            <p>817-752-4754</p>
          </div>
        </div>

        <div className="row connect">
          <div className="col">
            <h2>Let’s connect on LinkedIn</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
