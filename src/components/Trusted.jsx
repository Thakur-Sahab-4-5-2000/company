import React, { useEffect, useState } from "react";
import Item from "./Item";
import "../scss/trusted.scss";

const Trusted = () => {
  const [box, setBox] = useState("");

  useEffect(() => {
    setBox(document.querySelector(".product-container"));
  }, {});

  const btnpressprev = () => {
    let width = box?.clientWidth;
    box.scrollLeft = box?.scrollLeft - width;
  };

  const btnpressnext = () => {
    let width = box?.clientWidth;
    box.scrollLeft = box?.scrollLeft + width;
  };
  return (
    <>
      <div className="trusted">
        <p className="header">Trusted by Thousands of Happy Customer</p>
        <p className="desc">
          These are the stories of our customers who have joined us with great
          pleasure when using this crazy feature.
        </p>
      </div>
      <div className="product-carousel">
        <div className="product-container">
          <Item
            src={"/images/Ellipse 175 (1).png"}
            name={"Viezh Robert"}
            city={"Warsaw, Poland"}
            rating={"4.5"}
            desc={
              "“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”."
            }
          />
          <Item
            src={"/images/Ellipse 175 (1).png"}
            name={"Viezh Robert"}
            city={"Warsaw, Poland"}
            rating={"4.5"}
            desc={
              "“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”."
            }
          />
          <Item
            src={"/images/Ellipse 175 (1).png"}
            name={"Viezh Robert"}
            city={"Warsaw, Poland"}
            rating={"4.5"}
            desc={
              "“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”."
            }
          />
          <Item
            src={"/images/Ellipse 175 (1).png"}
            name={"Viezh Robert"}
            city={"Warsaw, Poland"}
            rating={"4.5"}
            desc={
              "“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”."
            }
          />
          <Item
            src={"/images/Ellipse 175 (1).png"}
            name={"Viezh Robert"}
            city={"Warsaw, Poland"}
            rating={"4.5"}
            desc={
              "“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”."
            }
          />
          <Item
            src={"/images/Ellipse 175 (1).png"}
            name={"Viezh Robert"}
            city={"Warsaw, Poland"}
            rating={"4.5"}
            desc={
              "“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”."
            }
          />
        </div>
        <div className="carouselButton">
          <div className="pre-btn" onClick={btnpressprev}>
            &larr;
          </div>
          <div className="next-btn" onClick={btnpressnext}>
            &rarr;
          </div>
        </div>
      </div>
      <div className="hoverDiv">
        <div className="header">
          <h2>Subscribe Now for Get Special Features!</h2>
          <p>Let's subscribe with us and find the fun.</p>
        </div>
        <div className="button">Subscribe Now</div>
      </div>
    </>
  );
};

export default Trusted;
