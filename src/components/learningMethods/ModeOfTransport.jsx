import React from 'react';
import './ModeOfTransPort.css';
import { useNavigate } from 'react-router-dom';

// Props: VehicleCard receives props like title, image, altImage, sound, onClick
import carImg from "./images/car.png";
import carImgAlt from "./images/car1.png";
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

//  Props + Event Handling: sound used inside VehicleCard
import carSound from './sounds/car.mp3';
import busSound from './sounds/bus.mp3';
import scooterSound from './sounds/vespa.mp3';
import planeSound from './sounds/plane.mp3';
import shipSound from './sounds/ship.mp3';
import boatSound from './sounds/pedalBoat.mp3';
import helicopterSound from './sounds/helicopter.mp3';

import VehicleCard from '../Vehicles/vehicleCard';

const ModeOfTransPort = () => {
    // Routing (useNavigate)
    const navigate = useNavigate();

    // Lists & Keys: storing vehicles in arrays to map over
    const landVehicles = [
        { title: "Car", image: carImg, altImage: carImgAlt, sound: carSound },
        { title: "Bus", image: busImg, altImage: busImgAlt, sound: busSound },
        { title: "Scooter", image: scooterImg, altImage: scooterImgAlt, sound: scooterSound },
    ];

    const waterVehicles = [
        { title: "Ship", image: shipImg, altImage: shipImgAlt, sound: shipSound },
        { title: "Boat", image: boatImg, altImage: boatImgAlt, sound: boatSound },
    ];

    const airVehicles = [
        { title: "Plane", image: planeImg, altImage: planeImgAlt, sound: planeSound },
        { title: "Helicopter", image: helicopterImg, altImage: helicopterImgAlt, sound: helicopterSound },
    ];

  return (
    <div className="scroll-wrapper">
      <div className="mode-page">
        {/* Event Handling: onClick */}
        <button className="back-button" onClick={() => navigate(-1)}>⬅ Back</button>

        <h1>Mode of Transport</h1>
        <p>Here you can explore different vehicles based on how they move: land, water, or air!</p>

        <div className="transport-categories">
          <div className="transport-card land-card">
            {/* Event Handling: onClick */}
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
          {/* Component Reusability + Lists & Keys + Props + Event Handling */}
          {landVehicles.map((vehicle, index) => (
            <VehicleCard 
                key={index} 
                title={vehicle.title} 
                image={vehicle.image} 
                altImage={vehicle.altImage} 
                sound={vehicle.sound} 
                onClick={() => console.log(`${vehicle.title} clicked`)}
            />
          ))}
        </div>
      </div>

      {/* Water Vehicles */}
      <div className='water-vehicles' id='waterr-vehicles'>
        <h2>Water Vehicles</h2>
        <p>Discover vehicles that navigate through water bodies.</p>
        <div className="vehicle-card-imported">
          {waterVehicles.map((vehicle, index) => (
            <VehicleCard 
                key={index} 
                title={vehicle.title} 
                image={vehicle.image} 
                altImage={vehicle.altImage} 
                sound={vehicle.sound} 
                onClick={() => console.log(`${vehicle.title} clicked`)}
            />
          ))}
        </div>
      </div>

      {/* Air Vehicles */}
      <div className='air-vehicles' id='airr-vehicles'>
        <h2>Air Vehicles</h2>
        <p>Learn about vehicles that soar through the skies.</p>
        <div className="vehicle-card-imported">
          {airVehicles.map((vehicle, index) => (
            <VehicleCard 
                key={index} 
                title={vehicle.title} 
                image={vehicle.image} 
                altImage={vehicle.altImage} 
                sound={vehicle.sound} 
                onClick={() => console.log(`${vehicle.title} clicked`)}
            />
          ))}
        </div>
      </div>

      {/* All Vehicles */}
      <div className='all-vehicles' id='all-vehicles'>
        <h2>All Vehicles</h2>
        <p>See all land, water, and air vehicles together in one place.</p>
        <div className="vehicle-card-imported">
          {/*  Component Reusability + Lists & Keys + Props */}
          {[...landVehicles, ...waterVehicles, ...airVehicles].map((vehicle, index) => (
            <VehicleCard 
                key={index} 
                title={vehicle.title} 
                image={vehicle.image} 
                altImage={vehicle.altImage} 
                sound={vehicle.sound} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ModeOfTransPort;
