// src/components/learningMethods/ModeOfVideo.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ModeOfVideo.css';

import video1 from '../../assets/videos/video1.mp4';
import video2 from '../../assets/videos/video2.mp4';
import video3 from '../../assets/videos/video3.mp4';
import video4 from '../../assets/videos/video4.mp4';
import video5 from '../../assets/videos/video5.mp4';

const videos = [
  { title: "Learn About a Backhoe", desc: "See how a big backhoe works at a construction site.", src: video1 },
  { title: "Learn Colours with Street Vehicles", desc: "Find colors in fun street vehicles with a song.", src: video2 },
  { title: "Learning Street Vehicles", desc: "Meet cars, trucks, and other street vehicles.", src: video3 },
  { title: "Vehicle Song for Kids", desc: "Sing and learn about different ways we travel.", src: video4 },
  { title: "Vehicles Spelling", desc: "Learn to spell vehicle names with Matt.", src: video5 }
];

function ModeOfVideo() {
  const navigate = useNavigate();

  return (
    <div className="video-page">
      {/* Back Button */}
      <button 
        className="back-button" 
        onClick={() => navigate(-1)}
      >
        ← Back
      </button>

      <h1>Video Learning</h1>
      <p className="intro-text">Here you can watch fun videos about vehicles!</p>
      
      <div className="video-grid">
        {videos.map((vid, index) => (
          <div className="video-card" key={index}>
            <video 
              className="video-player" 
              controls 
              preload="metadata"
            >
              <source src={vid.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <h3>{vid.title}</h3>
            <p className="video-desc">{vid.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ModeOfVideo;
