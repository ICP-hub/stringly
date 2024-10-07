// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/Landingpage'; // Corrected the import case

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Define the route for the LandingPage */}
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
