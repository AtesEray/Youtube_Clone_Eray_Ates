import React, { useEffect, useState } from 'react'
import './Recommended.css'
import { value_converter } from '../../data'
import moment from "moment";
import { Link } from 'react-router-dom';
const API_KEY = import.meta.env.VITE_API_KEY;
const Recommended = ({categoryId}) => {

  const [apiData, setApiData] = useState([]);

  const fetchData = async()=>{

    const relatedVideo_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=45&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`
    await fetch(relatedVideo_url).then(res=>res.json()).then(data=>setApiData(data.items))
  }

  useEffect(()=>{
    fetchData();
  },[])



  return (
    <div className='recommended'>
      {apiData.map((item,index)=>{
        return(
            <Link to ={`/video/${item.snippet.categoryId}/${item.id}`} className="side-video-list">
              <img src={item?item.snippet.thumbnails.medium.url:""} alt="" />
              <div className="vid-info">
                <h4>{item?item.snippet.title:""}</h4>
                <p>{item?item.snippet.channelTitle:""}</p>
                <p>{item?value_converter(item.statistics.viewCount):""} Views &bull; {item?moment(item.snippet.publishedAt).fromNow():""} </p>
              </div>
            </Link>
        )
      })}
      
    </div>
  )
}

export default Recommended
