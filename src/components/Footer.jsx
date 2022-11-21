import React from "react";
import "../scss/footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="first">
        <img src="/images/logo.svg" alt="logo" />
        <p>
          LaslesVPN is a private virtual network that has unique features and
          has high security.
        </p>
        <div className="social">
          <img src="/images/facebook.svg" alt="fb" />
          <img src="/images/twitter.svg" alt="twitter" />
          <img src="/images/Instagram.svg" alt="insta" />
        </div>
      </div>
      <div className="second">
        <div className="second1">
          <h2>Product</h2>
          <p>Download </p>
          <p>Pricing</p>
          <p>Locations</p>
          <p>Server</p>
          <p>Countries</p>
          <p>blog</p>
        </div>
        <div className="second2">
          <h2>Engage</h2>
          <p>LaslesVPN ?</p>
          <p>FAQ</p>
          <p>Tutorials</p>
          <p>About Us</p>
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
        </div>
        <div className="second3">
          <h2>Earn Money</h2>
          <p>Affiliate</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
