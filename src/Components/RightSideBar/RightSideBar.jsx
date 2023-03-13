import React from "react";
import "./RightSideBar.css";
import HdrStrongIcon from "@mui/icons-material/HdrStrong";
import cep from "../Sidebar/Image/cep.jpg";
import { useDataLayerValue } from "../../Utils/DataLayer";
import Songcolumn from "./Songcolumn/Songcolumn";
import { Avatar } from "@mui/material";

function RightSideBar() {
  const [{ playlists }, dispatch] = useDataLayerValue();
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

      <div className="swift">
        {/* {
      playlists?.items?.map((item) => {
        <Songcolumn title={item.track} />
      })
    } */}

      <div className="taylor">
          <img src={cep} alt="" />
          <div className="song">
            <div>
              <h4 className="tails">Taylor</h4>
            </div>
            <div className="in">
              <p>196 Songs in library</p>
            </div>
          </div>
        </div>

        <div className="dot">
          <HdrStrongIcon />
        </div>
      </div>
      

      <div className="foot_two">
        <div className="images">
          <img src={cep} />
        </div>
        <div className="wrap">
        <div className="tona">
          <div><h4>Torisetsu</h4></div>
          <div><p>Kana Nishino</p></div>
        </div>
        <div><Avatar /></div>
        
        </div>
      </div>
    </div>
  );
}

export default RightSideBar;
