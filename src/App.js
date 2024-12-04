import './App.css';
import Landing from './pages/Landing';
import LostFound from './pages/LostFound';
import Lost from './pages/Lost';
import LocationPicker from './components/LocationPicker';
import CustomCheckbox from './components/CustomCheckbox';
import Filter from './components/Filter';
import React, { useState } from 'react';

function App() {
  const [filters, setFilters] = useState({
    petType: 'all',
    petAge: [],
    gender: [],
  });
  return (
    <div className="App">
      {/* <Landing></Landing> */}
      {/* <LostFound></LostFound> */}
      <Lost></Lost>
      {/* <CustomCheckbox></CustomCheckbox> */}
    </div>
  );
}

export default App;
