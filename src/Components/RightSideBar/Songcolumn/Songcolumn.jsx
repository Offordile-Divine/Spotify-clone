import React from 'react'
import './Songcolumn.css'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

function Songcolumn({track}) {
    console.log("This is my tracks", track)
  return (
    <div>
         <div className="taylor">
          <img src={track.album.images[0].url} alt="" />
          <div className="song">
            <div><h4 className="tails">{track.artists.map((artist) => artist.name)}</h4></div>
            <div className="in"><p>{track.name}</p></div>
          </div>
        </div>

        <div className="dot">
          <MoreHorizIcon />
        </div>
    </div>
  )
}

export default Songcolumn