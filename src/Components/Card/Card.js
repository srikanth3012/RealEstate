import React from "react";
import "./Card.scss";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  return (
    <div className="card">
      <div className="imageContainer">
        <img src={item?.images[0]} alt="" />
      </div>
      <div className="textContainer">
        <div className="top">
          {" "}
          <h2 className="title">
            <Link to={`/listPage/${item?.id}?${item?.title}`}>
              {item?.title}
            </Link>
          </h2>
          <p className="address">
            <img src="./pin.png" alt="" />
            <span>{item?.address}</span>
          </p>
          <span className="price">$ {item?.price}</span>
        </div>

        <div className="bottom">
          <div className="features">
            <div className="feature">
              <img src="./bed.png" alt="bed" />
              <span>{item?.bedroom} bedrooms</span>
            </div>
            <div className="feature">
              <img src="./bath.png" alt="bath" />
              <span>{item?.bathroom} bathrooms</span>
            </div>
          </div>
          <div className="icons">
            <div className="icon">
              <img src="./save.png" alt="save" />
            </div>
            <div className="icon">
              <img src="./chat.png" alt="chat" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
