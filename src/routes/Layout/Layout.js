import React from "react";
import Navbar from "../../Components/Header/Navbar";
import "./layout.scss";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="layout">
      <div className="navbar">
        <Navbar />
      </div>

      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
