import React from 'react'
import { accessUrl } from '../Url/Url'
import './Login.css'

function logged() {
  return (
    <div className="login">
      <img
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="spotify"
      />
        <a href={accessUrl}>Connect Spotify</a>
    </div>
  )
}

export default logged