import React, { useState } from "react";
import "./Chat.scss";

const Chat = () => {
  const [chat, setChat] = useState(true);
  const arr = [1, 2, 3, 4, 5, 6];
  const userimg =
    "https://th.bing.com/th?id=OIP.IGNf7GuQaCqz_RPq5wCkPgHaLH&w=204&h=306&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2";
  const chatBoxHandler = () => {
    setChat((prev) => (prev ? false : true));
  };

  return (
    <div className="chat">
      <div className="messagesContainer">
        <h1>Messages</h1>
        <div className="messages">
          {arr.map((item) => (
            <div key={item} className="message" onClick={chatBoxHandler}>
              <img src={userimg} alt="user" />
              <span>Srikanth</span>
              <p>Lorem Ipsupm srikanth...</p>
            </div>
          ))}
        </div>
      </div>
      {chat && (
        <div className="chatMessages">
          <div className="top">
            {" "}
            <div className="user">
              <img src={userimg} alt="user" />
              <span>Srikanth</span>
            </div>
            <button onClick={chatBoxHandler}>X</button>
          </div>
          <div className="center">
            <div className="chatMessage own ">
              {" "}
              <p>hello Srrikarnh</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage ">
              {" "}
              <p>hello Srrikarth</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own ">
              {" "}
              <p>hello Srrikarnh</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage  ">
              {" "}
              <p>hello Srrikarnh</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own ">
              {" "}
              <p>hello Srrikarnh</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage  ">
              {" "}
              <p>hello Srrikarnh</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own ">
              {" "}
              <p>hello Srrikarnh</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage ">
              {" "}
              <p>hello Srrikarnh</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own ">
              {" "}
              <p>hello Srrikarnh</p>
              <span>1 hour ago</span>
            </div>
          </div>
          <div className="bottom">
            <textarea></textarea>
            <button>send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chat;
