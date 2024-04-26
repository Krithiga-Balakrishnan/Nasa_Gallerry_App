
//import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Image from "./Image"; 
import Navbar from './Navbar';
import Home from './Home';
import ImageOftheDay from './ImageOftheDay';
import MarsRover from "./MarsRover";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content" >
          <Routes> 
            <Route path="/home" element={<Home />} /> 
            <Route path="/image" element={<Image />} />
            <Route path="/image-of-the-day" element={<ImageOftheDay />} /> {/* Route for ImageOftheDay component */}
            <Route path="/mars-rover" element={<MarsRover />} /> {/* Route for ImageOftheDay component */}
          </Routes>
         
        </div>
      </div>
    </Router>
  );
}


export default App;
