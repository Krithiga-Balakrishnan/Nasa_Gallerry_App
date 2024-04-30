
//import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Image from './Image';
import Home from './Home';
import ImageOftheDay from './ImageOftheDay';
import MarsRover from './MarsRover';
import 'bootstrap/dist/css/bootstrap.min.css';
import OffcanvasExample from './Navbar';
import Login from './js/Login';
import About from './js/About';

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
          {currentPage === 'login' && < Login/>}
          {currentPage === 'about' && < About/>}
        </div>
      </div>
    </Router>
  );
}

export default App;
