import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Login from '../js/Login';
import { UserAuthProvider } from "../auth/UserAuthContext"; // Assuming you have a UserAuthProvider to wrap Login component

describe('Login component', () => {
  test('renders login form with sign in and sign up tabs', () => {
    render(
      <UserAuthProvider>
        <Login />
      </UserAuthProvider>
    );
    
    // Check if the sign in tab is rendered
    expect(screen.getByLabelText('Sign In')).toBeInTheDocument();
    
    // Check if the sign up tab is rendered
    expect(screen.getByLabelText('Sign Up')).toBeInTheDocument();

    // Check if email input is rendered
    expect(screen.getByPlaceholderText('Email address')).toBeInTheDocument();
    
    // Check if password input is rendered
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
  });

  test('shows password mismatch alert when passwords do not match during sign up', () => {
    render(
      <UserAuthProvider>
        <Login />
      </UserAuthProvider>
    );

    // Switch to sign up tab
    fireEvent.click(screen.getByLabelText('Sign Up'));

    // Enter different passwords
    fireEvent.change(screen.getByPlaceholderText('Password'), { target: { value: 'password1' } });
    fireEvent.change(screen.getByPlaceholderText('Repeat Password'), { target: { value: 'password2' } });

    // Click sign up button
    fireEvent.click(screen.getByTestId('signup'));

    // Check if password mismatch alert is shown
    expect(screen.getByText('Passwords don\'t match')).toBeInTheDocument();
  });

  
});
