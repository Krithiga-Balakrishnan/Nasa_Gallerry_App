import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'; // Importing to extend expect to matchers

// Import CustCard from the same file
import { CustCard } from '../js/Card';

describe('CustCard', () => {
  const setCurrentPageMock = jest.fn();
  const apod = {
    title: 'Test Title',
    url: 'https://example.com/image.jpg',
    listItems: ['Option 1', 'Option 2'],
  };

  it('renders card with title and image', () => {
    const { getByText, getByAltText } = render(<CustCard apod={apod} setCurrentPage={setCurrentPageMock} />);
    expect(getByText(apod.title)).toBeInTheDocument();
    expect(getByAltText(apod.title)).toBeInTheDocument();
  });

  it('displays options on click and calls setCurrentPage on option click', () => {
    const { getByText } = render(<CustCard apod={apod} setCurrentPage={setCurrentPageMock} />);
    fireEvent.click(getByText(apod.title));
    expect(getByText(apod.listItems[0])).toBeInTheDocument();
    fireEvent.click(getByText(apod.listItems[0]));
    expect(setCurrentPageMock).toHaveBeenCalledWith(apod.listItems[0].toLowerCase().replace(/\s+/g, '-'));
  });
});


