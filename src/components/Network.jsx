import React from "react";
import "../scss/network.scss";

const Network = () => {
  return (
    <div className="network">
      <p className="headingNet">Huge Global Network of Fast VPN</p>
      <p className="descNet">
        See LaslesVPN everywhere to make it easier for you when you move
        locations.
      </p>
      <div className="map">
        <img src="images/Huge Global.svg" alt="map" />
      </div>

      <div className="imgs">
        <img src="images/Mask Group (1).svg" alt="map" />
        <img src="images/Mask Group (2).svg" alt="map" />
        <img src="images/Mask Group (3).svg" alt="map" />
        <img src="images/Mask Group (4).svg" alt="map" />
      </div>
    </div>
  );
};

export default Network;
