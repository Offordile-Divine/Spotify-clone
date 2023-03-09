import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Body from "../Body/Body";
import RightSideBar from "../RightSideBar/RightSideBar";
import "./LandingPage.css";

function LandingPage() {
  return (
    <div className="landingpage">
      <Sidebar />
      <Body />
      <RightSideBar />
    </div>
  );
}

export default LandingPage;
