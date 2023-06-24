import React, { useState, useRef, useEffect } from 'react'; 
import Image from 'next/image'; // Import 'Image' from 'next/image'

import styles from './BackgroundVideo.module.css';

function BackgroundVideo() {
  const [isPlaying, setPlaying] = useState(false);
  const [isMuted, setMuted] = useState(true);
  const [videoSrc, setVideoSrc] = useState('./assets/videos/video.m4v');
  const videoRef = useRef();

  useEffect(() => {
    if (isPlaying && videoRef.current) {
      videoRef.current.play();
      setMuted(false);
    } else if (!isPlaying && videoRef.current) {
      videoRef.current.pause();
    }
  }, [isPlaying]);

  const handleClick = () => {
    setPlaying(!isPlaying);
  }

  const handleMute = () => {
    setMuted(!isMuted);
  }

  const handleVideo = () => {
    if (videoSrc === './assets/videos/video.m4v') {
      setVideoSrc('./assets/videos/video_normal.m4v');
    } else {
      setVideoSrc('./assets/videos/video.m4v');
    }
  }

  const getButtonText = () => {
    return videoSrc === './assets/videos/video.m4v' ? 'Falls keine 3D Brille vorhanden ist, hier klicken' : '3D Brille vorhanden';
  }

  return (
    <div className={styles['background-video']} style={{position: 'relative', width: '100%', height: '0', paddingBottom: '56.25%'}}>
      {!isPlaying && 
        <div className={styles.overlay} onClick={handleClick}>
          <div className={styles.wrapper}>
            <h1>3D Brille bereit halten</h1>
            <Image src="./assets/images/glasses.svg" alt="glasses" title="3d glasses" width={120} height={80} />
            <p>VIDEO STARTEN</p>
            <button className={styles.ctaBrille} onClick={handleVideo}>{getButtonText()}</button>
          </div>
        </div>
      }
      <video 
        ref={videoRef}
        style={{position: 'absolute', width: '100%', height: '100%'}}
        src={videoSrc}
        loop
        muted={isMuted}
        playsInline
        onClick={handleClick}
      />
      <button className={styles['mute-btn']} onClick={handleMute}>{isMuted ? 'Ton an' : 'Ton aus'}</button>
    </div>
  );
}

export default BackgroundVideo;