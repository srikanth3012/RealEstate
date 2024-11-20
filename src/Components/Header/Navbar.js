import React, { useState } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(true);
  const user_img =
    "https://th.bing.com/th?id=OIP.IGNf7GuQaCqz_RPq5wCkPgHaLH&w=204&h=306&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2";
  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <img src="/logo.png" alt="" />
          <span>LamaEstate</span>
        </a>
        <a href="/">
          <span>Home</span>
        </a>
        <a href="/">
          <span>Contact</span>
        </a>
        <a href="/">
          <span>About</span>
        </a>
        <Link to="/listPage">
          <span>Agents</span>
        </Link>
      </div>
      <div className="right">
        {user ? (
          <div className="user">
            <img src={user_img} alt="user" />
            <span>Srikanth</span>
            <Link to="/profile" className="profile">
              <div className="notification">3</div>
              <span>Profile</span>
            </Link>
          </div>
        ) : (
          <>
            <a href="/">sign in</a>
            <a href="/" className="register">
              sign up
            </a>
          </>
        )}
        <div className="menuIcon">
          <img
            src="/menu.png"
            alt=""
            onClick={() => setOpen((prev) => !prev)}
          />
        </div>
        <div className={open ? "menu active" : "menu"}>
          <a href="/">Home</a>
          <a href="/">Contact</a>
          <a href="/">Agent</a>
          <a href="/">About</a>
          <a href="/">sign in</a>
          <a href="/">sign up</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
