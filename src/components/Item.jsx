import React from "react";
import "../scss/item.scss";

const Item = ({ src, name, city, rating, desc }) => {
  return (
    <div className="item">
      <div className="person">
        <img src={src} alt="img" />
        <div className="info">
          <p className="name">{name}</p>
          <p className="city">{city}</p>
        </div>
        <p className="rating">{rating} ⭐</p>
      </div>
      <div className="descItem">{desc}</div>
    </div>
  );
};

export default Item;
