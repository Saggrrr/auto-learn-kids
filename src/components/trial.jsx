import React, { useState } from "react";
import "./App.css";

import carImg from "./assets/image/car.png";
import busImg from "./assets/image/bus.png";
import planeImg from "./assets/image/plane.png";
import boatImg from "./assets/image/ship.jpg"; // or boat.png if you rename it

const vehicleData = [
  { name: "Car", image: carImg, sound: "/sounds/car.mp3", type: "Land" },
  { name: "Bus", image: busImg, sound: "/sounds/bus.mp3", type: "Land" },
  { name: "Plane", image: planeImg, sound: "/sounds/plane.mp3", type: "Air" },
  { name: "Boat", image: boatImg, sound: "/sounds/boat.mp3", type: "Water" },
];

const categories = ["All", "Land", "Air", "Water"];

function App() {
  const [selected, setSelected] = useState("All");

  const filtered = selected === "All"
    ? vehicleData
    : vehicleData.filter(v => v.type === selected);

  const playSound = (src) => {
    new Audio(src).play();
  };

  return (
    <div className="main-container">
      <h1>Learn Vehicles</h1>

      <div className="button-group">
        {categories.map(cat => (
          <button
            key={cat}
            className={selected === cat ? "active" : ""}
            onClick={() => setSelected(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="cards">
        {filtered.map((item) => (
          <div
            key={item.name}
            className="card"
            onClick={() => playSound(item.sound)}
          >
            <img src={item.image} alt={item.name} />
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
