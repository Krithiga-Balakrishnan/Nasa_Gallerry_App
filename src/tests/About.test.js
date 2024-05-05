
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import About from '../js/About';

describe('About component', () => {
  test('renders welcome message and button', () => {
    const setCurrentPageMock = jest.fn();
    render(<About setCurrentPage={setCurrentPageMock} />);
    
    // Check if the welcome message is rendered
    expect(screen.getByText(/Welcome to GalaxyGaze!/i)).toBeInTheDocument();
    
    // Check if the button is rendered
    expect(screen.getByRole('button', { name: /Discover/i })).toBeInTheDocument();
  });

  test('button click calls setCurrentPage function', () => {
    const setCurrentPageMock = jest.fn();
    render(<About setCurrentPage={setCurrentPageMock} />);
    
    // Click the button
    fireEvent.click(screen.getByRole('button', { name: /Discover/i }));
    
    // Check if setCurrentPage function is called with the correct argument
    expect(setCurrentPageMock).toHaveBeenCalledWith('home');
  });
});
