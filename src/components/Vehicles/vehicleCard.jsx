import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './VehicleCard.css';

let currentAudio = null;

const VehicleCard = ({ title, image, altImage, sound, onClick }) => {
  const audioRef = useRef(null);
  const [currentImage, setCurrentImage] = useState(image); // For image toggle

  const playSound = () => {
    if (currentAudio && !currentAudio.paused) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }

    const newAudio = new Audio(sound);
    currentAudio = newAudio;
    newAudio.play();
    audioRef.current = newAudio;

    setTimeout(() => {
      if (newAudio === currentAudio) {
        newAudio.pause();
        newAudio.currentTime = 0;
      }
    }, 5000);
  };

  const handleExploreClick = (e) => {
    e.stopPropagation(); // Prevent card click interference
    setCurrentImage((prev) => (prev === image ? altImage : image)); // Toggle image
    onClick();
  };

  // Keyboard handler: toggle image on Enter key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Enter') {
        setCurrentImage((prev) => (prev === image ? altImage : image));
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [image, altImage]);

  return (
    <div className="vehicle-card" onClick={onClick}>
      <img src={currentImage} alt={title} className="vehicle-image" />
      <h2 className="vehicle-title">{title}</h2>

      <button className="vehicle-button" onClick={handleExploreClick}>
        🚀 Switch Style
      </button>

      <button
        className="sound-button"
        onClick={(e) => {
          e.stopPropagation();
          playSound();
        }}
      >
        👂 Hear Me!
      </button>
    </div>
  );
};

VehicleCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  altImage: PropTypes.string.isRequired, // Alternate image
  sound: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default VehicleCard;
