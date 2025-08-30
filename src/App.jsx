import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FirstPage from './components/FirstPage';
import MainPage from './components/MainPage';
import ModeOfTransport from './components/learningMethods/ModeOfTransport'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/mode-of-transport" element={<ModeOfTransport />} />
      </Routes>
    </Router>
  );
}

export default App;

//hello