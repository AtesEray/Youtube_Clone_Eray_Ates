import React from 'react'
import './Video.css'
import PlayerVideo from '../../Components/PlayerVideo/PlayerVideo'
import Recommended from '../../Components/Recommended/Recommended'
const Video = () => {
  return (
    <div className='play-container'>
      <PlayerVideo></PlayerVideo>
      <Recommended></Recommended>
    </div>
  )
}

export default Video
