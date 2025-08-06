import React from 'react';
import './MainPage.css'; 
import homePagePic from '../assets/image/homePagePic.jpg'; 

const MainPage = () => {
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
            </div>
            <div className='image-content'>
                <img
                    src={homePagePic}
                    alt="vehicle"
                />
            </div>
        </div>
        <div className='bottom-section'>
            <h2>Choose The mode of Learning</h2>
            {/* This is where the vehicle cards will be rendered */}
        </div>
    </div>
  );
};


export default MainPage;
