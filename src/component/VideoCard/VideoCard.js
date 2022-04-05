import React, { useRef, useState } from 'react';
import "../VideoCard/VideoCard.css"
import VideoHeader from '../VideoHeader/VideoHeader';
import VideoFooter from '../VideoFooter/VideoFooter';


function VideoCard({url, likes, shares, channel, song, avatarSrc}) {
  
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  
  const videoRef = useRef(null)

  const onVideoPress = () => {
    if(isVideoPlaying) {
      // stop
      videoRef.current.pause();
      setIsVideoPlaying(false)

    } else {
      // play
      videoRef.current.play();
      setIsVideoPlaying(true)
    }
  }
  
  return (
    <div className='videoCard'>
      <VideoHeader/>
        <video 
        ref={videoRef}
        onClick={onVideoPress}
        className='videoCard_player'
        src={url}
        alt="IG reel video"
        loop=""
        />
      <VideoFooter
      channel={channel}
      avatarSrc={avatarSrc}
      likes={likes}
      shares={shares}
      song={song}
      />
    </div>
  )
}

export default VideoCard;