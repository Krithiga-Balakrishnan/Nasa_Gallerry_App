import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'; // Import this to extend expect to have some extra matchers
import OffcanvasExample from '../Navbar';
import { UserAuthProvider } from '../auth/UserAuthContext'; // Import the UserAuthProvider if needed

describe('OffcanvasExample Component', () => {
  it('renders navigation links and user profile', () => {
    const mockSetCurrentPage = jest.fn();

    render(
      <UserAuthProvider>
        <OffcanvasExample currentPage="about" setCurrentPage={mockSetCurrentPage} />
      </UserAuthProvider>
    );

    expect(screen.getByAltText('GalaxyGaze Logo')).toBeInTheDocument(); // Check if logo is rendered
    expect(screen.getByText('About')).toBeInTheDocument(); // Check if "About" link is rendered
    expect(screen.getByText('Home')).toBeInTheDocument(); // Check if "Home" link is rendered
    expect(screen.getByText('APOD')).toBeInTheDocument(); // Check if "APOD" dropdown is rendered
    expect(screen.getByText('Mars Rover')).toBeInTheDocument(); // Check if "Mars Rover" link is rendered
  });

  it('calls setCurrentPage when navigation link is clicked', () => {
    const mockSetCurrentPage = jest.fn();

    render(
      <UserAuthProvider>
        <OffcanvasExample currentPage="about" setCurrentPage={mockSetCurrentPage} />
      </UserAuthProvider>
    );

    fireEvent.click(screen.getByText('Home'));
    expect(mockSetCurrentPage).toHaveBeenCalledWith('home'); // Check if setCurrentPage is called with the correct page
  });

  it('calls handleLogout when logout button is clicked', () => {
    const mockSetCurrentPage = jest.fn();
    const mockHandleLogout = jest.fn();

    render(
      <UserAuthProvider>
        <OffcanvasExample currentPage="about" setCurrentPage={mockSetCurrentPage} />
      </UserAuthProvider>
    );

    fireEvent.click(screen.getByText('Logout'));
    expect(mockHandleLogout).toHaveBeenCalledTimes(1); // Check if handleLogout is called when logout button is clicked
  });
});
