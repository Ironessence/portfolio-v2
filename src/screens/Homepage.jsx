import React from 'react';

import '../styles/Homepage.styles.scss';
import headerVideo from '../assets/headerVideo.mp4';
import { useRef } from 'react';



const Homepage = () => {
  const videoRef = useRef();
  const setPlayBack = () => {
    videoRef.current.playbackRate = 2;
  }

    return (
        <div className='home-wrapper'>
            
        <div className='home-header'>
          
          <h1 className='header-title'>
            <span className='header-title-creative'>
              Creative
            </span>
            Front-End Developer
          </h1>
      <div className='video-wrapper'>
      <video src={headerVideo} alt='header-video' autoPlay loop controls={false} className='video' ref={videoRef} onCanPlay={() => setPlayBack()} />
      </div>
          

        </div>
            
           
        </div>
    )
}

export default Homepage;