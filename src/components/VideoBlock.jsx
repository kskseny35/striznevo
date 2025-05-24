import React from 'react';
import '../styles/VideoBlock.css';

const VideoBlock = () => {
  return (
    <section className="video-block">
      <h2>Видеообзор</h2>
      <div className="video-wrapper">
        <video controls poster="/assets/video/preview.jpg">
          <source src="/assets/video/tour.mp4" type="video/mp4" />
          Ваш браузер не поддерживает видео.
        </video>
      </div>
    </section>
  );
};

export default VideoBlock;
