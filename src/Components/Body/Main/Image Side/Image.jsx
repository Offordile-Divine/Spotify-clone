import React from 'react'
import './Image.css'
import img1 from './On top of world.jpg'

function Image() {
  return (
    <div className='image'>
        <img src={img1} alt='' />
        <p className='art'>Artist</p>
        <h3 className='top'>On Top <br /> of the World</h3>
        <div className='btn'>
            <button className='play'>Play</button>
            <button className='follow'>Follow</button>
        </div>
        <p className='monthly'>Monthly Listener</p>
        <p className='figure'>32.092</p>
    </div>
  )
}

export default Image