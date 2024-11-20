import React from "react";
import "./Slider.scss";

const Slider = ({ images }) => {
  return (
    <div className="slider">
      <div className="bigImage">
        <img src={images[2]} alt="img" />
      </div>
      <div className="smallImages">
        <img src={images[0]} alt="img" />
        <img src={images[1]} alt="img" />
        <img src={images[3]} alt="img" />
      </div>{" "}
    </div>
  );
};

export default Slider;
