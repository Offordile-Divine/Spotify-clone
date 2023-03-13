import React from 'react'
import { useDataLayerValue } from '../../../../Utils/DataLayer'
import SidebarOption from '../../../Sidebar/SidebarOption/SidebarOption'
import './Playlist.css'
import Songrow from '../Playlist/Songrow/Songrow'

function Playlist({spotify}) {
  const [{ discover_weekly }, dispatch] = useDataLayerValue();
  return (
    <div className='playlist'>
      <div className='show'>
        <h1 className='player'>My Playlist</h1>
        <button>Show all</button>
      </div>

      <div className='sec'>
        <p className='hash'>#</p>
        <p className='tit'>Title</p>
        <p className='artist'>Artist</p>
        <p className='tim'>Time</p>
        <p className='al'>ALbum</p>
      </div>


      {
      discover_weekly?.tracks.items.map((item) => (
        <Songrow track={item.track}/>
      ))
    }

    
    </div>
  )
}

export default Playlist