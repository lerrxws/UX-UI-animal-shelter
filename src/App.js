import './App.css';
import React, { useState } from 'react';
import Report from './pages/report/Report';
import './index.css';
import Lost from './pages/Lost'
import Header from './components/header/Header';


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
      {/* <Landing></Landing> */}
      {/* <LostFound></LostFound> */}
      {/* <Header></Header> */}
      <Lost></Lost> 
      {/* <Report></Report> */}
      {/* <ResponsiveStepper></ResponsiveStepper> */}
    </div>
  );
}

export default App;
