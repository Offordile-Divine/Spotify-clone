import React from "react";
import "./Footer.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import SpeedIcon from "@mui/icons-material/Speed";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import ReplayIcon from "@mui/icons-material/Replay";
import VolumeDownIcon from "@mui/icons-material/VolumeDown";
import PauseCircleOutlineIcon from "@mui/icons-material/PauseCircleOutline";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import "./Footer.css";
import { Grid, Slider } from "@material-ui/core";

function Footer() {
  return (
    <div className="footer">
      <div className="foot">
        <div className="footer_left">
          <FavoriteBorderIcon className="yea" />
          <HeadsetMicIcon className="yea" />
          <SpeedIcon className="yea" />
        </div>

        <div className="footer_center">
          <ReplayIcon className="yoo" />
          <SkipPreviousIcon className="next"/>
          <PlayCircleOutlineIcon className="circle" />
          <SkipNextIcon className="next"/>
          <ShuffleIcon className="yoo" />
        </div>

        <div className="footer_right">
          <Grid container spacing={2}>
            <Grid item>
              <PlaylistPlayIcon className="yoo"/>
            </Grid>
            <Grid item>
              <VolumeDownIcon />
            </Grid>
            <Grid item xs>
              <Slider aria-labelledby="continuous-slider" />
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default Footer;
