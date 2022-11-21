import React, { useState } from "react";
import "../scss/plan.scss";

const Plan = () => {
  const [color1, setColor1] = useState(false);
  const [color2, setColor2] = useState(false);
  const [color3, setColor3] = useState(false);
  const [cssClass1, setCssClass1] = useState("");
  const [cssClass2, setCssClass2] = useState("");
  const [cssClass3, setCssClass3] = useState("");
  const setBorder1 = () => {
    setColor1(true);
    setColor2(false);
    setColor3(false);
    setCssClass1("box_content1");
    setCssClass2("box_content");
    setCssClass3("box_content");
  };

  const setBorder2 = () => {
    setColor1(false);
    setColor2(true);
    setColor3(false);
    setCssClass1("box_content");
    setCssClass2("box_content1");
    setCssClass3("box_content");
  };

  const setBorder3 = () => {
    setColor1(false);
    setColor2(false);
    setColor3(true);
    setCssClass1("box_content");
    setCssClass2("box_content");
    setCssClass3("box_content1");
  };

  return (
    <div className="plan">
      <div className="plan__text">
        <h2>Choose Your Plan</h2>
        <p>
          Let's choose the package that is best for you and explore it happily
          and cheerfully.
        </p>
      </div>
      <div className="boxy">
        <div
          className={color1 === true ? cssClass1 : "box_content"}
          onClick={setBorder1}
        >
          <img src="/images/box.svg" alt="box" />
          <p className="heading">Free Plan</p>

          <ul className="unorderd">
            <li>
              <p className="check">&#10004;</p>
              <p className="desc">Unlimited Bandwith</p>
            </li>
            <li>
              <p className="check">&#10004;</p>
              <p className="desc">Encrypted Connection</p>
            </li>
            <li>
              <p className="check">&#10004;</p>
              <p className="desc">No Traffic Logs</p>
            </li>
            <li>
              <p className="check">&#10004;</p>
              <p className="desc">Works on All Devices</p>
            </li>
          </ul>
          <p className="bottomFree1">Free</p>
          <div className="select" onClick={setBorder1}>
            Select
          </div>
        </div>
        <div className={color2 === true ? cssClass2 : "box_content"}>
          <img src="/images/box.svg" alt="box" />
          <p className="heading">Standard Plan</p>

          <ul className="unorderd">
            <li>
              <p className="check">&#10004;</p>
              <p className="desc">Unlimited Bandwith</p>
            </li>
            <li>
              <p className="check">&#10004;</p>
              <p className="desc">Encrypted Connection</p>
            </li>
            <li>
              <p className="check">&#10004;</p>
              <p className="desc">Yes Traffic Logs</p>
            </li>
            <li>
              <p className="check">&#10004;</p>
              <p className="desc">Works on All Devices</p>
            </li>
            <li>
              <p className="check">&#10004;</p>
              <p className="desc">Connect Anyware</p>
            </li>
          </ul>
          <p className="bottomFree2">Free</p>
          <div className="select" onClick={setBorder2}>
            Select
          </div>
        </div>
        <div
          className={
            color3 === true
              ? `${cssClass3} box_contentsm `
              : "box_content box_contentsm"
          }
        >
          <img src="/images/box.svg" alt="box" />
          <p className="heading">Free Plan</p>

          <ul className="unorderd">
            <li>
              <p className="check">&#10004;</p>
              <p className="desc">Unlimited Bandwith</p>
            </li>
            <li>
              <p className="check">&#10004;</p>
              <p className="desc">Encrypted Connection</p>
            </li>
            <li>
              <p className="check">&#10004;</p>
              <p className="desc">No Traffic Logs</p>
            </li>
            <li>
              <p className="check">&#10004;</p>
              <p className="desc">Works on All Devices</p>
            </li>
            <li>
              <p className="check">&#10004;</p>
              <p className="desc">Connect Anyware</p>
            </li>
            <li>
              <p className="check">&#10004;</p>
              <p className="desc">Get New Features</p>
            </li>
          </ul>
          <p className="bottomFree3">Free</p>
          <div className="select" onClick={setBorder3}>
            Select
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plan;
