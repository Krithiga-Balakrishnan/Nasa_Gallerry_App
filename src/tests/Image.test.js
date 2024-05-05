import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import Image from '../Image';

// Mock the environment variable
const mockAPIKey = 'mock-api-key';
jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useEffect: jest.fn(),
}));

describe('Image Component', () => {
  beforeEach(() => {
    process.env.REACT_APP_NASA_API_KEY = mockAPIKey;
  });

  it('renders component with fetched data', async () => {
    const mockData = {
      date: '2024-05-05',
      explanation: 'Mock explanation',
      media_type: 'image',
      title: 'Mock Title',
      url: 'https://mock-url.com/image.jpg',
    };

    global.fetch = jest.fn().mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(mockData),
    });

    render(<Image />);

    await waitFor(() => {
      expect(screen.getByText(/Astronomy Picture of the Day/i)).toBeInTheDocument();
      expect(screen.getByText(mockData.title)).toBeInTheDocument();
      expect(screen.getByText(mockData.date)).toBeInTheDocument();
      expect(screen.getByText(mockData.explanation)).toBeInTheDocument();
      expect(screen.getByAltText('APOD')).toBeInTheDocument();
    });
  });

  it('renders video if media type is video', async () => {
    const mockVideoData = {
      date: '2024-05-05',
      explanation: 'Mock video explanation',
      media_type: 'video',
      title: 'Mock Video Title',
      url: 'https://mock-video-url.com/video.mp4',
    };

    global.fetch = jest.fn().mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(mockVideoData),
    });

    render(<Image />);

    await waitFor(() => {
      expect(screen.getByText(/Astronomy Picture of the Day/i)).toBeInTheDocument();
      expect(screen.getByText(mockVideoData.title)).toBeInTheDocument();
      expect(screen.getByText(mockVideoData.date)).toBeInTheDocument();
      expect(screen.getByText(mockVideoData.explanation)).toBeInTheDocument();
      expect(screen.getByTitle(mockVideoData.title)).toBeInTheDocument();
    });
  });
});
