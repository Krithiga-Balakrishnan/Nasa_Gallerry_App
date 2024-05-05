import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';
import { UserAuthContextProvider } from '../auth/UserAuthContext';

describe('App component', () => {
  test('renders App with default current page as About', () => {
    render(
      <UserAuthContextProvider>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </UserAuthContextProvider>
    );

    // Check if the About component is rendered by default
    expect(screen.getByText('Welcome to GalaxyGaze!')).toBeInTheDocument();
  });

  test('renders Login page when current page is login', () => {
    render(
      <UserAuthContextProvider>
        <MemoryRouter initialEntries={['/login']}>
          <App />
        </MemoryRouter>
      </UserAuthContextProvider>
    );

    // Check if the Login component is rendered when current page is login
    expect(screen.getByLabelText('Email address')).toBeInTheDocument();
    expect(screen.getByLabelText('Password')).toBeInTheDocument();
  });

  
});
