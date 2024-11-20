import React from "react";
import "./Profile.scss";
import listData from "../../lib/dummyData";
import Card from "../../Components/Card/Card";
import Chat from "../../Components/chat/Chat";

const Profile = () => {
  const arr = [1, 2, 3, 4, 5];
  const userimg =
    "https://th.bing.com/th?id=OIP.IGNf7GuQaCqz_RPq5wCkPgHaLH&w=204&h=306&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2";

  return (
    <div className="profile">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>User Informaation</h1>
            <button>Update Profile</button>
          </div>
          <div className="userInfo">
            <div className="item">
              <span>Avatar :</span>
              <img src={userimg} alt="" />
            </div>
            <div className="item">
              <span>Username :</span>
              <b>Srikanth</b>
            </div>
            <div className="item">
              <span>E-mail :</span>
              <b>Srikanth@gmail.com</b>
            </div>
          </div>
          <div className="listContainer">
            <div className="title">
              <h1>My List</h1>
              <button>Add New Post</button>
            </div>
            <div className="listItems">
              {listData.map((item) => (
                <Card item={item} key={item?.id} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="chatContainer">
        <div className="wrapper">
          <Chat />
        </div>
      </div>
    </div>
  );
};

export default Profile;
