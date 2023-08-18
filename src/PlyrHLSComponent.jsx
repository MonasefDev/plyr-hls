import React, { useEffect, useRef } from 'react';
import Plyr from 'plyr';
import Hls from 'hls.js';
import 'plyr/dist/plyr.css';

const PlyrHLSWithSubtitles = ({ source, subtitle }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      const videoElement = videoRef.current;

      const player = new Plyr(videoElement, {
        captions: { active: true, update: true, language: 'en' },
        settings: ['captions', 'quality', 'speed', 'loop'],
      });

      if (Hls.isSupported()) {
        const hls = new Hls();
        hls.loadSource(source);
        hls.attachMedia(videoElement);
        window.hls = hls;

        player.on('languagechange', () => {
          setTimeout(() => (hls.subtitleTrack = player.currentTrack), 50);
        });
      } else {
        videoElement.src = source;
      }

      // Add subtitle track
      const trackElement = document.createElement('track');
      trackElement.kind = 'captions';
      trackElement.src = subtitle;
      trackElement.srclang = 'en';
      trackElement.label = 'English';
      trackElement.default = true; // Make this track the default

      videoElement.appendChild(trackElement);

      window.player = player;
    }
  }, []);

  return (
    <div>
      <video ref={videoRef} className="plyr">
        <source src={source} type="application/x-mpegURL" />
      </video>
    </div>
  );
};

export default PlyrHLSWithSubtitles;
