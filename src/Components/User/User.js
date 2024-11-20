import React from "react";
import "./User.scss";
import { userData } from "../../lib/dummyData";

const User = ({ item }) => {
  console.log(userData, "p");
  return (
    <div className="user">
      <div className="textContainer">
        <span className="title">{item?.title}</span>
        <p className="address">
          <img src="/pin.png" alt="pin" />
          <span>{item?.address}</span>
        </p>

        <span className="price">$ {item?.price}</span>
      </div>
      <div className="imgContainer">
        <img src={userData?.img} alt="profile" />
        <span>{userData?.name}</span>
      </div>
    </div>
  );
};

export default User;
