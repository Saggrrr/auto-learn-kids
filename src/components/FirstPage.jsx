import React, { useState } from "react"; // useState Hook
import { useNavigate } from 'react-router-dom'; // Routing (useNavigate)
import "./FirstPage.css";

import bgImg from '../assets/image/allVehicles.png';

function FirstPage() {
  const navigate = useNavigate();

  const [name, setName] = useState(''); // useState Hook for name
  const [hovered, setHovered] = useState(false); // useState Hook for hover effect

  const handleBegin = () => {
    console.log("Begin button clicked");
    if (name.trim() !== '') {
      navigate('/main'); //  Routing (useNavigate)
    } else {
      alert("Please enter your name to begin.");
    }
  };

  return (
    <div
      className="first-page"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <form onSubmit={(e) => { e.preventDefault(); handleBegin(); }}> {/*  Form Handling & Event Handling */}
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)} //  Event Handling (onChange)
          className="name-input"
          style={{ backgroundColor: hovered ? '#fbbcf9ff' : 'white' }} //  Dynamic Styling
          onMouseEnter={() => setHovered(true)}   //  Event Handling (onMouseEnter)
          onMouseLeave={() => setHovered(false)}  // Event Handling (onMouseLeave)
        />

        {name && <p className="welcome-text">Welcome, {name}!</p>}  {/*  Conditional Rendering */}

        <button type="submit" className="start-button" onClick={handleBegin}> {/*  Event Handling (onClick) */}
          Begin Learning
        </button>
      </form>
    </div>
  );
}

export default FirstPage;
