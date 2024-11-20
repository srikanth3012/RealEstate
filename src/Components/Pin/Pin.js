import React from "react";
import { Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom";
import "./Pin.scss";

const Pin = ({ item }) => {
  const position = [item?.latitude, item?.longitude];
  return (
    <Marker position={position}>
      <Popup>
        <div className="popupContainer">
          <img src={item?.images[0]} alt="" />
          <div className="textContainer">
            <Link>{item?.title}</Link>
            <span className="bed">{item?.bedroom} bedrooms</span>
            <b>${item?.price}</b>
          </div>
        </div>
      </Popup>
    </Marker>
  );
};

export default Pin;
