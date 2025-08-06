import React from "react";
import { useNavigate } from 'react-router-dom';
import "./FirstPage.css";

import bgImg from '../assets/image/allVehicles.png'; // Make sure this is a wide image

function FirstPage() {
  const navigate = useNavigate();

  const handleBegin = () => {
    console.log("Begin button clicked");
    navigate('/main');
  };

  return (
    <div
      className="first-page"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <button className="start-button" onClick={handleBegin}>
        Begin Learning
      </button>
    </div>
  );
}

export default FirstPage;
