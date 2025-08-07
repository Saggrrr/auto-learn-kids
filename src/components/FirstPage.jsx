import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./FirstPage.css";

import bgImg from '../assets/image/allVehicles.png';

function FirstPage() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [hovered, setHovered] = useState(false); // ✅ ADDED STATE

  const handleBegin = () => {
    console.log("Begin button clicked");
    if (name.trim() !== '') {
      navigate('/main');
    } else {
      alert("Please enter your name to begin.");
    }
  };

  return (
    <div
      className="first-page"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="name-input"
        style={{ backgroundColor: hovered ? '#fbbcf9ff' : 'white' }} // ✅ BACKGROUND COLOR CHANGE
        onMouseEnter={() => setHovered(true)}   // ✅ MOUSE ENTER
        onMouseLeave={() => setHovered(false)}  // ✅ MOUSE LEAVE
      />
      <button className="start-button" onClick={handleBegin}>
        Begin Learning
      </button>
    </div>
  );
}

export default FirstPage;
