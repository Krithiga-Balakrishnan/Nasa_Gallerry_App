import React from "react";
import { useUserAuth } from "../auth/UserAuthContext";
import Login from '../js/Login'
const ProtectedRoute = ({ children, setCurrentPage, currentPage }) => {
    const { user } = useUserAuth();
  
    console.log("Check user in Private: ", user);
    if (!user && currentPage !== 'about') {
      setCurrentPage('login');
        return <Login setCurrentPage={() => {}} />;
      }
      return children;
    };
  
  export default ProtectedRoute;