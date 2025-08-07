import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./FirstPage.css";

import bgImg from '../assets/image/allVehicles.png'; // Make sure this is a wide image

function FirstPage() {
  const navigate = useNavigate();
  const [name, setName] = useState('');

  const handleBegin = () => {
    console.log("Begin button clicked");
    if (name.trim() !== '') {               //added conditional rendering here
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
      />
      <button className="start-button" onClick={handleBegin}>
        Begin Learning
      </button>
    </div>
  );
}

export default FirstPage;
