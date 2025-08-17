import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FirstPage from './components/FirstPage';
import MainPage from './components/MainPage';
import ModeOfTransport from './components/learningMethods/ModeOfTransport'; 
import ModeOfVideo from './components/learningMethods/ModeOfVideo';
import GoodHabit from './components/learningMethods/GoodHabit';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/mode-of-transport" element={<ModeOfTransport />} />
        <Route path="/mode-of-video" element={<ModeOfVideo />} />
        <Route path="/good-habit" element={<GoodHabit />} />
      </Routes>
    </Router>
  );
}

export default App;
