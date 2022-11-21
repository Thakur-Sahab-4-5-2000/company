import React from "react";
import "../scss/navbar.scss";

const Nav = () => {
  return (
    <div className="nav">
      <div className="nav__logo">
        <img src="/images/Logo.svg" alt="logo" />
      </div>

      <div className="nav-item">
        <ul>
          <li>About</li>
          <li>Features</li>
          <li>Pricing</li>
          <li>Testimonials</li>
          <li>Help</li>
        </ul>
      </div>
      <div className="signInUp">
        <div className="signIn">Sign In</div>
        <div className="signUp">Sign Up</div>
      </div>
    </div>
  );
};

export default Nav;
