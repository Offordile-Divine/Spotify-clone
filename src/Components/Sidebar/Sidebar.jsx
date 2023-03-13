import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption/SidebarOption";
import HomeIcon from "@mui/icons-material/Home";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import StreamIcon from "@mui/icons-material/Stream";
import WorkspacesIcon from "@mui/icons-material/Workspaces";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocalActivityIcon from "@mui/icons-material/LocalActivity";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import FormatIndentIncreaseIcon from "@mui/icons-material/FormatIndentIncrease";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Cep from "./Image/cep.jpg";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="general">
        <div className="zero">
          <div className="red"></div>
          <div className="yellow"></div>
          <div className="green"></div>
        </div>

        <div className="icon">
          <SidebarOption Icon={FormatIndentIncreaseIcon} />
        </div>
      </div>
      <img
        className="sidebar_logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      <SidebarOption className="home active" Icon={HomeIcon} title="Home" />
      <SidebarOption Icon={TrendingUpIcon} title="Trends" />
      <SidebarOption Icon={StreamIcon} title="Feeds" />

      <p className="title">Discover</p>

      <SidebarOption Icon={WorkspacesIcon} title="New and Notable" />
      <SidebarOption Icon={CalendarMonthIcon} title="Release Calender" />
      <SidebarOption Icon={LocalActivityIcon} title="Events" />

      <p className="title">Your collection</p>

      <SidebarOption Icon={FavoriteBorderIcon} title="Favourite Songs" />
      <SidebarOption Icon={PeopleAltIcon} title="Artist" />
      <SidebarOption Icon={StarBorderIcon} title="Album" />

      <hr className="hr" />

      <div className="cepContent">
        <div className="cep">
          <img src={Cep} alt="" />
          <p>Ceptari Tyas</p>
        </div>
          <SidebarOption Icon={ArrowForwardIosIcon} />
        <div>

        </div>
      </div>
    </div>
  );
}

export default Sidebar;
