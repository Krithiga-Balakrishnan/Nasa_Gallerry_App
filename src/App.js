
//import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Image from "./Image"; 
import Navbar from './Navbar';
import Home from './Home';
import ImageOftheDay from './ImageOftheDay';
import MarsRover from "./MarsRover";
import Login from "./js/Login";

export const AuthContext = React.createContext();
const initialState = {
  isAuthenticated: false,
  user: null,
  token: null,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      localStorage.setItem("token", JSON.stringify(action.payload.token));
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token
      };
    case "LOGOUT":
      localStorage.clear();
      return {
        ...state,
        isAuthenticated: false,
        user: null
      };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <Router>
      <AuthContext.Provider value={{ state, dispatch }}>
      <div className="App">
        <Navbar />
        <div className="content" >
          <Routes> 
            <Route path="/home" element={<Home />} /> 
            <Route path="/image" element={<Image />} />
            <Route path="/image-of-the-day" element={<ImageOftheDay />} /> {/* Route for ImageOftheDay component */}
            <Route path="/mars-rover" element={<MarsRover />} /> {/* Route for ImageOftheDay component */}
            <Route path="/" element={<Home />} />
          </Routes>
          {!state.isAuthenticated && <Login />}

        </div>
      </div>
      </AuthContext.Provider>
    </Router>
  );
}


export default App;
