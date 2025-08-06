import React from 'react';
import './ModeOfTransPort.css';
// import landImg from './images/land.png';
// import waterImg from './images/water.png';
// import airImg from './images/air.png';

import carImg from "./images/car.png";
import busImg from "./images/bus.png";
import scooterImg from "./images/scooter.png";
import shipImg from "./images/ship.png"; // or boat.png if you rename it
import boatImg from "./images/boat.png"; // or ship.png if you rename it
import planeImg from "./images/plane.png";
import helicopterImg from "./images/helicopter.png"; // Add helicopter image if needed




import VehicleCard from '../Vehicles/vehicleCard';

const ModeOfTransPort = () => {
  return (


    <div className="scroll-wrapper">

    <div className="mode-page">
      <h1>Mode of Transport</h1>
      <p>Here you can explore different vehicles based on how they move: land, water, or air!</p>

      <div className="transport-categories">
        <div className="transport-card land-card">

          <h1>Land</h1>
          <button onClick={() => document.getElementById('landd-vehicles').scrollIntoView({ behavior: 'smooth' })}>
            Explore Land Vehicles
          </button>
        </div>
        <div className="transport-card water-card">
          <h1>Water</h1>
          <button onClick={() => document.getElementById('waterr-vehicles').scrollIntoView({ behavior: 'smooth' })}>
            Explore Water Vehicles
          </button>

        </div>
        <div className="transport-card air-card">
          <h1>Air</h1>
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
        <div className="vehicle-card-imported">
            <VehicleCard 
              title="Car"
              image={carImg}
              onClick={() => console.log('Car clicked')}
            />
            <VehicleCard
              title="Bus"
              image={busImg}
              onClick={() => console.log('Bus clicked')}
            />
            <VehicleCard
              title="Scooter"
              image={scooterImg}
              onClick={() => console.log('Scooter clicked')}
            />
        </div>
    </div>

    <div className='water-vehicles' id='waterr-vehicles'>
      <h2>Water Vehicles</h2>
      <p>Discover vehicles that navigate through water bodies.</p>
        <div className="vehicle-card-imported">
            <VehicleCard 
              title="Ship"
              image={shipImg}
              onClick={() => console.log('Ship clicked')}
            />
            <VehicleCard
              title="Boat"
              image={boatImg}
              onClick={() => console.log('Boat clicked')}
            />
        </div>
    </div>

    <div className='air-vehicles' id='airr-vehicles'>
      <h2>Air Vehicles</h2>
      <p>Learn about vehicles that soar through the skies.</p>
          <div className="vehicle-card-imported">
            <VehicleCard 
              title="Plane"
              image={planeImg}
              onClick={() => console.log('Plane clicked')}
            />
            <VehicleCard
              title="Helicopter"
              image={helicopterImg}
              onClick={() => console.log('Helicopter clicked')}
            />
        </div>
    </div>
    </div>
  );
};

export default ModeOfTransPort;
