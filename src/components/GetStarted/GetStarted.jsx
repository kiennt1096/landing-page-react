import React from "react";
import "./GetStarted.css";

const GetStarted = () => {
  return (
    <section className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <dic className="flexColCenter inner-container">
          <span className="primaryText">GetStarted with Homyz</span>
          <span className="secondaryText">
            Subscribe and find super attractive price quotes from us.
            <br />
            Find your residence soon
          </span>
          <button className="button">
            <a href="mailto:kiennt3@rikkeisoft.com">Get Started</a>
          </button>
        </dic>
      </div>
    </section>
  );
};

export default GetStarted;
