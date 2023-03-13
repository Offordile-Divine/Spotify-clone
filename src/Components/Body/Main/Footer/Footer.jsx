import React, {useEffect} from "react";
import "./Footer.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import SpeedIcon from "@mui/icons-material/Speed";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import ReplayIcon from "@mui/icons-material/Replay";
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import PauseCircleOutlineIcon from "@mui/icons-material/PauseCircleOutline";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import "./Footer.css";
import { useDataLayerValue } from "../../../../Utils/DataLayer";
// import { Grid, Slider } from "@material-ui/core";

function Footer({spotify}) {
  const [{ token, item , playing }, dispatch] = useDataLayerValue();

  // useEffect(() => {
  //   spotify.getMyCurrentPlaybackState().then((r) => {
  //     dispatch({
  //       type: "SET_PLAYING",
  //       playing: r.is_playing,
  //     });

  //     dispatch({
  //       type: "SET_ITEM",
  //       item: r.item,
  //     });
  //   });
  // }, [spotify]);

  const handlePlayPause = () => {
    if (playing) {
      spotify.pause();
      dispatch({
        type: "SET_PLAYING",
        playing: false,
      });
    } else {
      spotify.play();
      dispatch({
        type: "SET_PLAYING",
        playing: true,
      });
    }
  };

  // const skipNext = () => {
  //   spotify.skipToNext();
  //   spotify.getMyCurrentPlayingTrack().then((r) => {
  //     dispatch({
  //       type: "SET_ITEM",
  //       item: r.item,
  //     });
  //     dispatch({
  //       type: "SET_PLAYING",
  //       playing: true,
  //     });
  //   });
  // };

  // const skipPrevious = () => {
  //   spotify.skipToPrevious();
  //   spotify.getMyCurrentPlayingTrack().then((r) => {
  //     dispatch({
  //       type: "SET_ITEM",
  //       item: r.item,
  //     });
  //     dispatch({
  //       type: "SET_PLAYING",
  //       playing: true,
  //     });
  //   });
  // };
  return (
    <div className="footer">
      <div className="foot">
        <div className="feet">
        <div className="footer_left">
          <FavoriteBorderIcon className="yea" />
          <HeadsetMicIcon className="yea" />
          <SpeedIcon className="yea" />
        </div>

        <div className="footer_center">
          <ReplayIcon className="yoo" />
          <SkipPreviousIcon className="next"  />
          {playing ? (
          <PauseCircleOutlineIcon
            onClick={handlePlayPause}
            fontSize="large" className="circle"
          />
        ) : (
          <PlayCircleOutlineIcon
            onClick={handlePlayPause}
            fontSize="large" className="circle"
          />
        )}
          <SkipNextIcon className="next"  />
          <ShuffleIcon className="yoo" />
        </div>

        {/* <div className="footer_right">
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
        </div>  */}

        <div className="footer_right">
          <VolumeDownIcon className="down"/>
          <div className="to">
            <div className="li">
            </div>
          </div>
          <VolumeUpIcon className="up"/>
        </div>
        </div>
        <div className="trail">
          <div><p>0.45</p></div>
          <div className="co">
            <div className="line"></div>
          </div>
          <div><p>2.45</p></div>
        </div>
      </div> 
  </div>
  );
}

export default Footer;
