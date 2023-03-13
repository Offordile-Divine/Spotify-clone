import { useState, useEffect } from "react";
import "./App.css";
import { getTokenFromResponse } from "./Components/Url/Url";
import Login from "./Components/Login/Login";
import LandingPage from "./Components/Landing Page/LandingPage";
import SpotifyWebApi from "spotify-web-api-js";
import { useDataLayerValue } from "./Utils/DataLayer";

const spotify = new SpotifyWebApi();

function App() {
  const [{ token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromResponse();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      console.log(_token);
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });
      
      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        console.log("The user", user);
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLIST",
          playlists: playlists,
        });
      });

      spotify.getPlaylist("4hag287TGP08SdS9ZLSfI1").then((response) =>
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        })
      );
    }
  }, [token, dispatch]);
  // console.log("person", user);
  // console.log("alien", token);

  return (
    <div className="App">
      {token ? <LandingPage spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
