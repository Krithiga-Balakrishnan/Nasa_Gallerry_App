import React from "react";
import { useUserAuth } from "../auth/UserAuthContext";
const ProtectedRoute = ({ children, setCurrentPage }) => {
    const { user } = useUserAuth();
  
    console.log("Check user in Private: ", user);
    if (!user) {
        setCurrentPage('login');
        return null; // or <></> to render nothing
      }
      return children;
    };
  
  export default ProtectedRoute;