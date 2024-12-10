import './App.css';
import Landing from './pages/Landing';
import LostFound from './pages/LostFound';
import Lost from './pages/Lost';
import LocationPicker from './components/LocationPicker';
import CustomCheckbox from './components/CustomCheckbox';
import Filter from './components/Filter';
import React, { useState } from 'react';
import Date from './pages/Lost/Date';
import Form from './components/DragDrop';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"
import Description from './pages/Lost/Description';
import ImageCarousel from './components/ImageCarousel';
import Dropdown from './components/Dropdown';
import DragDrop from './components/DragDrop';
import Card from './components/Card';
import Report from './pages/Report';

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
      {/* <Lost></Lost>  */}
      <Report></Report>
    </div>
  );
}

export default App;
