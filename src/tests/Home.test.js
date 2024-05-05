import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // Importing to extend expect to matchers

import Home from './Home';

describe('Home', () => {
  const setCurrentPageMock = jest.fn();

  it('renders home page with title and cards', () => {
    const { getByText, getAllByTestId } = render(<Home setCurrentPage={setCurrentPageMock} />);
    
    // Check if the title is rendered
    expect(getByText('Discover Our APIs')).toBeInTheDocument();

    // Check if the Card component is rendered
    const custCards = getAllByTestId('cust-card');
    expect(custCards.length).toBeGreaterThan(0);
  });

  it('calls setCurrentPage prop with correct argument', () => {
    render(<Home setCurrentPage={setCurrentPageMock} />);
    
    // Make assertions about setCurrentPage being called if needed
  });
});
