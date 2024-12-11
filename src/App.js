import './App.css';
import React, { useState } from 'react';
import Report from './pages/report/Report';
import './index.css';
import Lost from './pages/lost/Lost'
import Landing from './pages/landing/Landing'
import LostFound from './pages/lostfound/LostFound'
import { Routes, Route } from "react-router-dom";


function App() {
  const [filters, setFilters] = useState({
    petType: 'all',
    petAge: [],
    gender: [],
  });
  const images = [
    "https://res.cloudinary.com/demo/image/upload/v1652345767/docs/demo_image2.jpg",
    "https://res.cloudinary.com/demo/image/upload/v1652366604/docs/demo_image5.jpg",
    "https://res.cloudinary.com/demo/image/upload/v1652345874/docs/demo_image1.jpg",
  ];
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/lost&found" element={<LostFound />} />
        <Route path="/lost" element={<Lost />} />
        <Route path="/report" element={<Report />} />
      </Routes>
    </div>
  );
}

export default App;
