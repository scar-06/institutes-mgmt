import React from "react";
import Navbar from "../NavBar/navbar.js";
import Institutions from "../Institutions/Institutions.js";
import StatsCards from "../StatsCards/stats-card.js";
import "./body.css";

const Body = () => {
  return (
    <div className="main-content">
      {/* Navbar */}
      <Navbar />
      <br />
      <br />
      <StatsCards />
      <br />
      {/* Body Content */}
      <Institutions />
    </div>
  );
};

export default Body;
