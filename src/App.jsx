import React, { useState } from "react";
import "./App.css";

const vehicles = [
  {
    name: "Car",
    image: "/images/car.png",
    sound: "/sounds/car.mp3",
    category: "Land",
  },
  {
    name: "Bus",
    image: "/images/bus.png",
    sound: "/sounds/bus.mp3",
    category: "Land",
  },
  {
    name: "Plane",
    image: "/images/plane.png",
    sound: "/sounds/plane.mp3",
    category: "Air",
  },
  {
    name: "Boat",
    image: "/images/boat.png",
    sound: "/sounds/boat.mp3",
    category: "Water",
  },
];

const categories = ["All", "Land", "Air", "Water"];

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const playSound = (src) => {
    const audio = new Audio(src);
    audio.play();
  };

  const filteredVehicles =
    selectedCategory === "All"
      ? vehicles
      : vehicles.filter((v) => v.category === selectedCategory);

  return (
    <div className="app">
      <h1>Vehicle Learning</h1>

      <div className="tabs">
        {categories.map((cat) => (
          <button
            key={cat}
            className={selectedCategory === cat ? "active" : ""}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="vehicle-grid">
        {filteredVehicles.map((v) => (
          <div
            key={v.name}
            className="card"
            onClick={() => playSound(v.sound)}
          >
            <img src={v.image} alt={v.name} />
            <p>{v.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
