import React from "react";
import "../scss/main.scss";
import "@fontsource/rubik";
const Main = () => {
  return (
    <>
      <div className="main">
        <div className="left">
          <div className="head">Want anything to be easy with LaslesVPN.</div>
          <p>
            Provide a network for all your needs with ease and fun using&nbsp;
            <b>LaslesVPN</b>&nbsp; discover interesting features from us
          </p>
          <div className="main-button">Get Started</div>
        </div>
        <div className="right">
          <img src="/images/Illustration1.svg" alt="hero" />
        </div>
      </div>
      <div className="box">
        <div className="first first1">
          <img src="/images/Group 1216.svg" alt="icon" />
          <div className="content">
            <p className="head">90+</p>
            <p className="det">Users</p>
          </div>
        </div>
        <div className="first">
          <img src="/images/Group 1215.svg" alt="icon" />
          <div className="content">
            <p className="head">30+</p>
            <p className="det">Locations</p>
          </div>
        </div>
        <div className="first">
          <img src="/images/Group 1217.svg" alt="icon" />
          <div className="content">
            <p className="head">50+</p>
            <p className="det">Servers</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
