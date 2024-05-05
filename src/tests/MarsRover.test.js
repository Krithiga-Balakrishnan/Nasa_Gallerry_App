import React from 'react';
import { render, waitFor, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import MarsRover from '../MarsRover';
import HttpClient from '../HttpClient';

jest.mock('../HttpClient', () => ({
  getMarsPhoto: jest.fn().mockResolvedValueOnce({
    photos: [
      { img_src: 'https://mock-url.com/photo1.jpg' },
      { img_src: 'https://mock-url.com/photo2.jpg' },
      { img_src: 'https://mock-url.com/photo3.jpg' },
    ],
  }),
}));

describe('MarsRover Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders component with fetched photos', async () => {
    render(<MarsRover />);

    await waitFor(() => {
      expect(screen.getByText(/NASA's Mars Rover Photos/i)).toBeInTheDocument();
      expect(screen.getByText(/Select Date/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/Select camera/i)).toBeInTheDocument();
      expect(screen.getByText(/Fetch Images/i)).toBeInTheDocument();

      expect(HttpClient.getMarsPhoto).toHaveBeenCalledTimes(1);
      expect(HttpClient.getMarsPhoto).toHaveBeenCalledWith(expect.any(Date), '');

      expect(screen.getAllByRole('option').length).toBe(11); // Including default option
      expect(screen.getByRole('button')).toHaveTextContent('Fetch Images');
    });

    fireEvent.click(screen.getByText('Fetch Images'));

    await waitFor(() => {
      expect(HttpClient.getMarsPhoto).toHaveBeenCalledTimes(2);
      expect(HttpClient.getMarsPhoto).toHaveBeenCalledWith(expect.any(Date), '');

      expect(screen.getAllByRole('listitem').length).toBe(3); // Number of photos rendered
      expect(screen.getAllByRole('img').length).toBe(3); // Number of images rendered
    });
  });

  it('updates photos on camera change', async () => {
    render(<MarsRover />);

    await waitFor(() => {
      expect(screen.getByLabelText(/Select camera/i)).toBeInTheDocument();
    });

    fireEvent.change(screen.getByLabelText(/Select camera/i), { target: { value: 'mast' } });

    await waitFor(() => {
      expect(HttpClient.getMarsPhoto).toHaveBeenCalledTimes(1);
      expect(HttpClient.getMarsPhoto).toHaveBeenCalledWith(expect.any(Date), 'mast');
    });
  });
});
