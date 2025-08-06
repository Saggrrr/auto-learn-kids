import React, { useRef } from 'react';
import './VehicleCard.css';

let currentAudio = null; // 👈 shared across all cards

const VehicleCard = ({ title, image, sound, onClick }) => {
  const audioRef = useRef(null);

  const playSound = () => {
    // Stop any currently playing audio
    if (currentAudio && !currentAudio.paused) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }

    // Create and play new audio
    const newAudio = new Audio(sound);
    currentAudio = newAudio;
    newAudio.play();
    audioRef.current = newAudio;
  };

  return (
    <div className="vehicle-card" onClick={onClick}>
      <img src={image} alt={title} className="vehicle-image" />
      <h2 className="vehicle-title">{title}</h2>
      <button className="vehicle-button">Explore {title}</button>
      <button className="sound-button" onClick={(e) => { e.stopPropagation(); playSound(); }}>
        Sound
      </button>
    </div>
  );
};

export default VehicleCard;
