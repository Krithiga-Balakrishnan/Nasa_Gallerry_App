
//import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Image from './Image';
import Home from './Home';
import ImageOftheDay from './ImageOftheDay';
import MarsRover from './MarsRover';
import 'bootstrap/dist/css/bootstrap.min.css';
import OffcanvasExample from './Navbar';


// export const AuthContext = React.createContext();
// const initialState = {
//   isAuthenticated: false,
//   user: null,
//   token: null,
// };
// const reducer = (state, action) => {
//   switch (action.type) {
//     case "LOGIN":
//       localStorage.setItem("user", JSON.stringify(action.payload.user));
//       localStorage.setItem("token", JSON.stringify(action.payload.token));
//       return {
//         ...state,
//         isAuthenticated: true,
//         user: action.payload.user,
//         token: action.payload.token
//       };
//     case "LOGOUT":
//       localStorage.clear();
//       return {
//         ...state,
//         isAuthenticated: false,
//         user: null
//       };
//     default:
//       return state;
//   }
// };

// function App() {
//   //const [state, dispatch] = React.useReducer(reducer, initialState);

//   return (
//     <Router>
//       {/* <AuthContext.Provider value={{ state, dispatch }}> */}
//       <div className="App">
//         <OffcanvasExample />
//         <div className="content" >
//           <Routes> 
//             <Route path="/home" element={<Home />} /> 
//             <Route path="/image" element={<Image />} />
//             <Route path="/image-of-the-day" element={<ImageOftheDay />} /> {/* Route for ImageOftheDay component */}
//             <Route path="/mars-rover" element={<MarsRover />} /> {/* Route for ImageOftheDay component */}
//             <Route path="/" element={<Home />} />
//           </Routes>
//           {/* {!state.isAuthenticated && <Login />} */}

//         </div>
//       </div>
//       {/* </AuthContext.Provider> */}
//     </Router>
//   );
// }


// export default App;

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <Router>
      <div className="App">
        <OffcanvasExample currentPage={currentPage} setCurrentPage={setCurrentPage} />
        <div className="content">
          {currentPage === 'home' && <Home />}
          {currentPage === 'image' && <Image />}
          {currentPage === 'image-of-the-day' && <ImageOftheDay />}
          {currentPage === 'mars-rover' && <MarsRover />}
        </div>
      </div>
    </Router>
  );
}
export default App;