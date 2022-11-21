import React from "react";
import "../scss/free.scss";

const Free = () => {
  return (
    <div className="free">
      <img className="hello" src="/images/Illustration2.svg" alt="free" />
      <div className="free__text">
        <h2>We Provide Many Features You Can Use</h2>
        <p>
          You can explore the features that we provide with fun and have their
          own functions each feature.
        </p>
        <div className="free-item">
          <ul>
            <li>
              <img src="/images/tick.svg" alt="tick" />
              Powerfull online protection.
            </li>
            <li>
              <img src="/images/tick.svg" alt="tick" />
              Internet without borders.
            </li>
            <li>
              <img src="/images/tick.svg" alt="tick" />
              Supercharged VPN
            </li>
            <li>
              <img src="/images/tick.svg" alt="tick" />
              No specific time limits.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Free;
