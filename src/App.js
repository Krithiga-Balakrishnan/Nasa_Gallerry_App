
//import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from './Image';
import Home from './Home';
import ImageOftheDay from './ImageOftheDay';
import MarsRover from './MarsRover';
import OffcanvasExample from './Navbar';
import { UserAuthContextProvider } from './auth/UserAuthContext';
import Login from './js/Login';
import About from './js/About';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  const [currentPage, setCurrentPage] = useState('login');

  return (
    <UserAuthContextProvider> {/* Wrap your entire App component */}

    <Router>
      <div className="App">
        <OffcanvasExample currentPage={currentPage} setCurrentPage={setCurrentPage} />
        <div className="content">
        {currentPage === 'login' ? (
          <Login setCurrentPage={setCurrentPage} />
              ) : (

              <ProtectedRoute setCurrentPage={setCurrentPage}>

          {currentPage === 'home' && <Home setCurrentPage={setCurrentPage} />} {/* Pass setCurrentPage */}
          {currentPage === 'image' && <Image />}
          {currentPage === 'image-of-the-day' && <ImageOftheDay />}
          {currentPage === 'mars-rover' && <MarsRover />}
          {currentPage === 'picture-of-the-day' && < Image/>}
          {currentPage === 'picture-of-a-certain-day' && < ImageOftheDay/>}
          {currentPage === 'mars-rover-images' && < MarsRover/>}
          {currentPage === 'about' && <About setCurrentPage={setCurrentPage} />}


          </ProtectedRoute>
            )}
        </div>
      </div>
    </Router>
    </UserAuthContextProvider>

  );
}

export default App;
