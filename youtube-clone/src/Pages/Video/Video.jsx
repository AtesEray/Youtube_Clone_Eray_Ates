import React from 'react'
import './Video.css'
import PlayerVideo from '../../Components/PlayerVideo/PlayerVideo'
import Recommended from '../../Components/Recommended/Recommended'
import {useParams} from 'react-router-dom'
const Video = () => {
  const {videoId, categoryId} = useParams() 
  return (
    <div className='play-container'>
      <PlayerVideo videoId ={videoId} categoryId={categoryId}></PlayerVideo>
      <Recommended></Recommended>
    </div>
  )
}

export default Video
