import React, { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../config/firebase";
import { getDatabase, ref, set, get } from "firebase/database";

// Create a user authentication context
const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState({});

  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  function signUp(emailSignUp, passwordSignup, userName) {
    return createUserWithEmailAndPassword(auth, emailSignUp, passwordSignup, userName)
    .then((userCredential) => {
      // After successful sign-up, set additional user information (userName) in database
      return set(ref(getDatabase(), `users/${userCredential.user.uid}`), {
        userName: userName,
        userEmail:emailSignUp
      }).then(() => userCredential);
    });
  }
  function logOut() {
    return new Promise((resolve, reject) => {
      signOut(auth).then(() => {
        // Clear any stored session data here
        // For example, you can clear local storage or session storage
        localStorage.removeItem('accessToken');
        // You can add more removals as needed
  
        // Set user to empty object
        setUser({});
        resolve();
      }).catch((error) => {
        reject(error);
      });
    });
  }
  function googleSignIn() {
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleAuthProvider);
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      console.log("Auth", currentUser);
      if (currentUser) {
        // If user is logged in, fetch additional user data (userName) from database
        const userRef = ref(getDatabase(), `users/${currentUser.uid}`);
        const snapshot = await get(userRef); // Use get function
        if (snapshot.exists()) {
          setUser({
            ...currentUser,
            userName: snapshot.val().userName,
            // Add any other fields you want to retrieve from the database
          });
        } else {
          setUser(currentUser);
        }
      } else {
        setUser(currentUser);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <userAuthContext.Provider
      value={{ user, logIn, signUp, logOut, googleSignIn }}
    >
      {children}
    </userAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(userAuthContext);
}
