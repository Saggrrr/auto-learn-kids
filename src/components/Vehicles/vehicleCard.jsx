import React from 'react';
import './VehicleCard.css';

const VehicleCard = ({ title, image, onClick }) => {
  return (
    <div className="vehicle-card" onClick={onClick}>
      <img src={image} alt={title} className="vehicle-image" />
      <h2 className="vehicle-title">{title}</h2>
      <button className="vehicle-button">Explore {title}</button>
      <button className="sound-button">Sound</button>
    </div>
  );
};

export default VehicleCard;
