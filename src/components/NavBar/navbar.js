import React from "react";
import "./navbar.css";
import { Layout, Avatar } from "antd";
const { Header } = Layout;

const Navbar = () => {
  // return (
  //   <div className="navbar">
  //     <div className="navbar-title">
  //       <h1>Institutions</h1>
  //     </div>

  //     <div className="navbar-user-info">
  //       <span>Hi, Sean</span>
  //       <div className="navbar-avatar">S</div>
  //     </div>
  //   </div>
  // );

  return (
    <Header
      className="navbar"
      style={{
        backgroundColor: "#fff",
        padding: "0 20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h1 className="navbar-title">Institutions</h1>

      <div className="navbar-user-info">
        <span style={{ marginRight: "10px" }}>Hi, Sean</span>
        <Avatar style={{ backgroundColor: "#87d068" }}>S</Avatar>
      </div>
    </Header>
  );
};

export default Navbar;
