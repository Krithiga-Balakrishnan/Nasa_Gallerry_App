import React from 'react';
import { render, act } from '@testing-library/react';
import { UserAuthContextProvider, useUserAuth } from './UserAuthContext';
import { auth } from '../config/firebase'; // Assuming you have a config file for Firebase

// Mocking firebase auth functions
jest.mock('../config/firebase', () => ({
  auth: {
    signInWithEmailAndPassword: jest.fn(),
    createUserWithEmailAndPassword: jest.fn(),
    onAuthStateChanged: jest.fn(),
    signOut: jest.fn(),
    GoogleAuthProvider: jest.fn(),
    signInWithPopup: jest.fn(),
  },
}));

describe('UserAuthContextProvider', () => {
  it('renders children and provides user authentication context', async () => {
    const TestComponent = () => {
      const { user, logIn, signUp, logOut, googleSignIn } = useUserAuth();
      return (
        <div>
          <span>{user ? 'User logged in' : 'User not logged in'}</span>
          <button onClick={() => logIn('test@example.com', 'password')}>Log In</button>
          <button onClick={() => signUp('test@example.com', 'password', 'Test User')}>Sign Up</button>
          <button onClick={() => logOut()}>Log Out</button>
          <button onClick={() => googleSignIn()}>Google Sign In</button>
        </div>
      );
    };

    const { getByText } = render(
      <UserAuthContextProvider>
        <TestComponent />
      </UserAuthContextProvider>
    );

    expect(getByText('User not logged in')).toBeInTheDocument();

    // Simulate log in
    await act(async () => {
      auth.onAuthStateChanged.mockImplementationOnce((callback) => callback({ uid: 'test-uid' }));
    });

    expect(getByText('User logged in')).toBeInTheDocument();
  });
});


