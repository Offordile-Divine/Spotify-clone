import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Body from "../Body/Body";
import RightSideBar from "../RightSideBar/RightSideBar";
import "./LandingPage.css";

function LandingPage( {spotify} ) {
  return (
    <div className="landingpage">
      <Sidebar />
      <Body spotify={spotify}/>
      <RightSideBar spotify={spotify} />
    </div>
  );
}

export default LandingPage;
