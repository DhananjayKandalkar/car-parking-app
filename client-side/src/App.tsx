import React from 'react';
import { Route } from 'react-router';
import { Routes } from 'react-router-dom';
import AllocateSpace from './pages/allocated_space/AllocateSpace';
import Deallocation from './pages/deallocation_popup/Deallocation';
import Home from './pages/home/Home';
import ParkingLot from './pages/parking_lot/ParkingLot';


const App: React.FC = () =>{
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/parkinglot" element={<ParkingLot />} />
      <Route path="/allocation" element={<AllocateSpace />} />
      <Route path="/deallocation" element={<Deallocation />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}

export default App;