import React from 'react'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import './Main.css'
import Footer from './Footer/Footer';
import Image from './Image Side/Image';
import Playlist from './Playlist/Playlist';

function Main({spotify}) {
  return (
    <div className='main'>
        <p>What's hot🔥</p>
        <h1>Trending</h1>
        <div className='right'>
            <button className='more'>More</button>
            <KeyboardArrowRightIcon />
        </div>
        <Image />
        <Playlist spotify={spotify}/>
    </div>
  )
}

export default Main