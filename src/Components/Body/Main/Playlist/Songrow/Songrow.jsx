import React from 'react'
import './Songrow.css'

function Songrow({track, playSong}) {
  const timeInSec = track.duration_ms/1000
  const timeInMin =  (timeInSec/60).toFixed(2)
  console.log(track)

  return (
    <div className='songRow' onClick={() => playSong(track.id)}>
      
      <div className='cont'>
      <div className='table'>
      
          <div className='numbering'>#</div>
          <div className='name'>{track.name}</div>
          <div className='artist'>{track.artists.map((artist) => artist.name)}</div>
          <div className="time">{timeInMin}</div>
          <div className='album'>{track.album.name}</div>
      </div>
      </div>


    </div>
  )
}

export default Songrow