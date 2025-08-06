import React from 'react';
import './ModeOfTransPort.css';

const ModeOfTransPort = () => {
  return (
    <div className="mode-page">
      <h1>Mode of Transport</h1>
      <p>Here you can explore different vehicles based on how they move: land, water, or air!</p>

      <div className="transport-categories">
        <div className="transport-card">
          <h2>Land</h2>
          <p>Cars, bikes, buses, trains, and more!</p>
        </div>
        <div className="transport-card">
          <h2>Water</h2>
          <p>Boats, ships, submarines, etc.</p>
        </div>
        <div className="transport-card">
          <h2>Air</h2>
          <p>Planes, helicopters, hot air balloons.</p>
        </div>
      </div>
    </div>
  );
};

export default ModeOfTransPort;
