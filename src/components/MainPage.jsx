import React from 'react';
import './MainPage.css'; 
import homePagePic from '../assets/image/homePagePic.jpg'; 
import allVehicles from '../assets/image/allVehicles.png'; 
import vid_thumbnail from '../assets/image/video_image.png'; 
import { useNavigate } from 'react-router-dom'; //  Routing (useNavigate)


const MainPage = () => {
    const navigate = useNavigate(); //  Routing

  return (
    <div className='main-page'>
        <div className='top-section'>
            <div className='text-content'>
                <h1>Let's learn about <br /> vehicles!</h1>
                <p>
                Welcome! This site helps you learn about different vehicles — like cars, boats, and planes. Tap on each one to see it and hear how it sounds.
                </p>
                <button 
                    className="lets-go-button" 
                    onClick={()=>{document.getElementById('bottom').scrollIntoView({behavior: 'smooth'})}} // ✅ Event Handling
                >
                    Let's Go
                </button>
            </div>
            <div className='image-content'>
                <img
                    src={homePagePic} //  Using imported image
                    alt="vehicle"
                />
            </div>
        </div>

        <div className='bottom-section' id='bottom'>
            <h2>Choose The mode of Learning</h2>

            <div className='bottom-cards-section'>
                {/* Mode of Transport card */}
                <div className="choose-method-card">
                    <img src={allVehicles} alt="mode of transport card"/> {/*  Using imported image */}
                    <p>To learn about vehicles through different mode of transport</p>
                    <button onClick={() => navigate('/mode-of-transport')}> {/*  Routing & Event Handling */}
                        Mode Of Transport
                    </button>
                </div>

                {/* Videos Learning Card */}
                <div className="choose-method-card">
                    <img src={vid_thumbnail} alt="videos learning card"/> {/*  Using imported image */}
                    <p>Watch engaging videos to learn more about vehicles</p>
                    <button onClick={() => navigate('/mode-of-video')}> {/*  Routing & Event Handling */}
                        Watch Videos
                    </button>
                </div>
            </div>
        </div>
    </div>
  );
};

export default MainPage;
