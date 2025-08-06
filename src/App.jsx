import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FirstPage from './components/FirstPage';
import MainPage from './components/MainPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/main" element={<MainPage />} />
      </Routes>
    </Router>
  );
}

export default App;
