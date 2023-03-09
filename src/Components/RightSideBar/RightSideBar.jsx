import React from "react";
import "./RightSideBar.css";

function RightSideBar() {
  return (
    <div className="rightsidebar">
      <h3>Shortcuts</h3>

      <div className="chips">
        <div className="chips1">
          <p className="one">💥Chill Hits</p>
          <p className="two">⭐Hop</p>
        </div>

        <div className="chips1">
          <p className="one">🎸Accoustic</p>
          <p className="two">🎵Indie Pop</p>
        </div>

        <div className="chips1">
          <p className="one">🎹Piano Blues</p>
          <p className="two">🎺Jazz</p>
        </div>
      </div>

      <h3 className="fav">Fav Artist</h3>
    </div>
  );
}

export default RightSideBar;
