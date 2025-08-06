import React from 'react';
import './ModeOfTransPort.css';
import landImg from './images/land.png';
import waterImg from './images/water.png';
import airImg from './images/air.png';



const ModeOfTransPort = () => {
  return (


    <div className="scroll-wrapper">

    <div className="mode-page">
      <h1>Mode of Transport</h1>
      <p>Here you can explore different vehicles based on how they move: land, water, or air!</p>

      <div className="transport-categories">
        <div className="transport-card land-card">

          <h2>Land</h2>
          <button onClick={() => document.getElementById('landd-vehicles').scrollIntoView({ behavior: 'smooth' })}>
            Explore Land Vehicles
          </button>
        </div>
        <div className="transport-card water-card">
          <h2>Water</h2>
          <button onClick={() => document.getElementById('waterr-vehicles').scrollIntoView({ behavior: 'smooth' })}>
            Explore Water Vehicles
          </button>

        </div>
        <div className="transport-card air-card">
          <h2>Air</h2>
          <button onClick={() => document.getElementById('airr-vehicles').scrollIntoView({ behavior: 'smooth' })}>
            Explore Air Vehicles
          </button>

        </div>
      </div>
    </div>

  {/*--------------------------------------------------------*/}
    <div className='land-vehicles' id='landd-vehicles'>
      <h2>Land Vehicles</h2>
      <p>Explore vehicles that travel on roads and tracks.</p>
      {/* Add land vehicle components here */}
    </div>

    <div className='water-vehicles' id='waterr-vehicles'>
      <h2>Water Vehicles</h2>
      <p>Discover vehicles that navigate through water bodies.</p>
      {/* Add water vehicle components here */}
    </div>

    <div className='air-vehicles' id='airr-vehicles'>
      <h2>Air Vehicles</h2>
      <p>Learn about vehicles that soar through the skies.</p>
      {/* Add air vehicle components here */}
    </div>
    </div>
  );
};

export default ModeOfTransPort;
