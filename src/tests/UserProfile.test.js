import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import UserProfilePage from '../js/UserProfilePage';
import { UserAuthProvider } from "../auth/UserAuthContext";

describe('UserProfilePage component', () => {
  test('renders user profile with name and email', () => {
    const user = {
      uid: 'test-uid',
      userName: 'Test User',
      email: 'test@example.com',
      profilePicture: null // Assuming no profile picture
    };

    render(
      <UserAuthProvider user={user}>
        <UserProfilePage />
      </UserAuthProvider>
    );

    expect(screen.getByText('User Profile')).toBeInTheDocument();
    expect(screen.getByText(`Name: ${user.userName}`)).toBeInTheDocument();
    expect(screen.getByText(`Email: ${user.email}`)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Edit Profile/i })).toBeInTheDocument();
  });

  test('allows editing profile', async () => {
    const user = {
      uid: 'test-uid',
      userName: 'Test User',
      email: 'test@example.com',
      profilePicture: null // Assuming no profile picture
    };

    render(
      <UserAuthProvider user={user}>
        <UserProfilePage />
      </UserAuthProvider>
    );

    // Click the Edit Profile button
    fireEvent.click(screen.getByRole('button', { name: /Edit Profile/i }));

    // Check if the form inputs are rendered
    expect(screen.getByLabelText('Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Save/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Cancel/i })).toBeInTheDocument();

    // Fill and submit the form
    fireEvent.change(screen.getByLabelText('Name'), { target: { value: 'New Name' } });
    fireEvent.click(screen.getByRole('button', { name: /Save/i }));

    // Check if the editing is completed and name is updated
    await waitFor(() => {
      expect(screen.getByText('Name: New Name')).toBeInTheDocument();
    });
  });

  
});
