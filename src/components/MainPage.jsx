import React from 'react';
import './MainPage.css'; 
import homePagePic from '../assets/image/homePagePic.jpg'; 
import allVehicles from '../assets/image/allVehicles.png'; 
import { useNavigate } from 'react-router-dom';


const MainPage = () => {
      const navigate = useNavigate(); // for routing

  return (
    <div className='main-page'>
        <div className='top-section'>
            <div className='text-content'>
                <h1>Let's learn about <br /> vehicles!</h1>
                <p>
                    Zoom, sail, and fly! This vehicles vocabulary list introduces kids to
                    different modes of transportation in English, fueling their curiosity
                    and imagination.
                </p>
                <button onClick={()=>{document.getElementById('bottom').scrollIntoView({behavior: 'smooth'})}}>
                    Let's Go
                </button>
            </div>
            <div className='image-content'>
                <img
                    src={homePagePic}
                    alt="vehicle"
                />
            </div>
        </div>

{/* -------------------------------------------------- */}


        <div className='bottom-section' id='bottom'>
            <h2>Choose The mode of Learning</h2>
            {/*Mode of Transport card */}
            <div className="choose-method-card">
                <img src={allVehicles} alt="mode of transport card"/>
                <p>To learn about vehicles through different mode of transport</p>
                <button onClick={() => navigate('/mode-of-transport')}>
                    Mode Of Transport
                </button>
            </div>
        </div>
    </div>
  );
};


export default MainPage;
