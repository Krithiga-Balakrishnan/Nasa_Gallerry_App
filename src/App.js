
//import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Image from './Image';
import Home from './Home';
import ImageOftheDay from './ImageOftheDay';
import MarsRover from './MarsRover';
import 'bootstrap/dist/css/bootstrap.min.css';
import OffcanvasExample from './Navbar';
import { GroupExample } from './js/Card';


function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <Router>
      <div className="App">
        <OffcanvasExample currentPage={currentPage} setCurrentPage={setCurrentPage} />
        <div className="content">
          {currentPage === 'home' && <Home setCurrentPage={setCurrentPage} />} {/* Pass setCurrentPage */}
          {currentPage === 'image' && <Image />}
          {currentPage === 'image-of-the-day' && <ImageOftheDay />}
          {currentPage === 'mars-rover' && <MarsRover />}
          {currentPage === 'picture-of-the-day' && < Image/>}
          {currentPage === 'picture-of-a-certain-day' && < ImageOftheDay/>}
          {currentPage === 'mars-rover-images' && < MarsRover/>}
        </div>
      </div>
    </Router>
  );
}

export default App;
