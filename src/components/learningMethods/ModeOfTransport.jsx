import React from 'react';
import './ModeOfTransPort.css';
import { useNavigate } from 'react-router-dom';


import carImg from "./images/car.png";
import carImgAlt from "./images/car1.png"; // ✅ **Alternate image**
import busImg from "./images/bus.png";
import busImgAlt from "./images/bus1.png";
import scooterImg from "./images/scooter.png";
import scooterImgAlt from "./images/scooter1.png";
import shipImg from "./images/ship.png";
import shipImgAlt from "./images/ship1.png";

import boatImg from "./images/boat.png";
import boatImgAlt from "./images/boat1.png";

import planeImg from "./images/plane.png";
import planeImgAlt from "./images/plane1.png";

import helicopterImg from "./images/helicopter.png";
import helicopterImgAlt from "./images/helicopter1.png";

import carSound from './sounds/car.mp3';
import busSound from './sounds/bus.mp3';
import scooterSound from './sounds/vespa.mp3';
import planeSound from './sounds/plane.mp3';
import shipSound from './sounds/ship.mp3';
import boatSound from './sounds/pedalBoat.mp3';
import helicopterSound from './sounds/helicopter.mp3';

import VehicleCard from '../Vehicles/vehicleCard';

const ModeOfTransPort = () => {
    const navigate = useNavigate();

  return (
    <div className="scroll-wrapper">
      <div className="mode-page">
        {/* ✅ BACK BUTTON ADDED HERE */}
        <button className="back-button" onClick={() => navigate(-1)}>
          ⬅ Back
        </button>
        <h1>Mode of Transport</h1>
        <p>Here you can explore different vehicles based on how they move: land, water, or air!</p>

        <div className="transport-categories">
          <div className="transport-card land-card">

            <button className="explore-mode-button" onClick={() => document.getElementById('landd-vehicles').scrollIntoView({ behavior: 'smooth' })}>
              Explore Land Vehicles
            </button>
          </div>
          <div className="transport-card water-card">
            <button className="explore-mode-button" onClick={() => document.getElementById('waterr-vehicles').scrollIntoView({ behavior: 'smooth' })}>
              Explore Water Vehicles
            </button>
          </div>
          <div className="transport-card air-card">

            <button className="explore-mode-button" onClick={() => document.getElementById('airr-vehicles').scrollIntoView({ behavior: 'smooth' })}>
              Explore Air Vehicles
            </button>
          </div>
        </div>
      </div>

      {/* Land Vehicles */}
      <div className='land-vehicles' id='landd-vehicles'>
        <h2>Land Vehicles</h2>
        <p>Explore vehicles that travel on roads and tracks.</p>
        <div className="vehicle-card-imported">
          <VehicleCard 
            title="Car"
            image={carImg}
            altImage={carImgAlt} // ✅ **Added altImage prop**
            sound={carSound}
            onClick={() => console.log('Car clicked')}
          />
          <VehicleCard
            title="Bus"
            image={busImg}
            altImage={busImgAlt} // ✅ **Placeholder (no toggle for bus)**
            sound={busSound}
            onClick={() => console.log('Bus clicked')}
          />
          <VehicleCard
            title="Scooter"
            image={scooterImg}
            altImage={scooterImgAlt}
            sound={scooterSound}
            onClick={() => console.log('Scooter clicked')}
          />
        </div>
      </div>

      {/* Water Vehicles */}
      <div className='water-vehicles' id='waterr-vehicles'>
        <h2>Water Vehicles</h2>
        <p>Discover vehicles that navigate through water bodies.</p>
        <div className="vehicle-card-imported">
          <VehicleCard 
            title="Ship"
            image={shipImg}
            altImage={shipImgAlt}
            sound={shipSound}
            onClick={() => console.log('Ship clicked')}
          />
          <VehicleCard
            title="Boat"
            image={boatImg}
            altImage={boatImgAlt}
            sound={boatSound}
            onClick={() => console.log('Boat clicked')}
          />
        </div>
      </div>

      {/* Air Vehicles */}
      <div className='air-vehicles' id='airr-vehicles'>
        <h2>Air Vehicles</h2>
        <p>Learn about vehicles that soar through the skies.</p>
        <div className="vehicle-card-imported">
          <VehicleCard 
            title="Plane"
            image={planeImg}
            altImage={planeImgAlt}
            sound={planeSound}
            onClick={() => console.log('Plane clicked')}
          />
          <VehicleCard
            title="Helicopter"
            image={helicopterImg}
            altImage={helicopterImgAlt}
            sound={helicopterSound}
            onClick={() => console.log('Helicopter clicked')}
          />
        </div>
      </div>
    </div>
  );
};

export default ModeOfTransPort;
