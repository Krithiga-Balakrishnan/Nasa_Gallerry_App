import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ImageOftheDay from '../ImageOftheDay';

const mockPhotoData = {
  date: '2024-05-05',
  explanation: 'Mock explanation',
  media_type: 'image',
  title: 'Mock Title',
  url: 'https://mock-url.com/image.jpg',
};

jest.mock('moment', () => () => ({
  format: () => '2024-05-05',
}));

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  Component: jest.fn(),
}));

describe('ImageOftheDay Component', () => {
  beforeEach(() => {
    global.fetch = jest.fn().mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(mockPhotoData),
    });
  });

  it('renders component with fetched photo', async () => {
    render(<ImageOftheDay />);

    await waitFor(() => {
      expect(screen.getByText(/NASA's Astronomy Picture of the Day/i)).toBeInTheDocument();
      expect(screen.getByText(mockPhotoData.title)).toBeInTheDocument();
      expect(screen.getByText(mockPhotoData.date)).toBeInTheDocument();
      expect(screen.getByText(mockPhotoData.explanation)).toBeInTheDocument();
      expect(screen.getByAltText(mockPhotoData.title)).toBeInTheDocument();
    });
  });

  it('renders video if media type is video', async () => {
    const mockVideoData = {
      ...mockPhotoData,
      media_type: 'video',
      url: 'https://mock-video-url.com/video.mp4',
    };

    global.fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(mockVideoData),
    });

    render(<ImageOftheDay />);

    await waitFor(() => {
      expect(screen.getByText(/NASA's Astronomy Picture of the Day/i)).toBeInTheDocument();
      expect(screen.getByText(mockVideoData.title)).toBeInTheDocument();
      expect(screen.getByText(mockVideoData.date)).toBeInTheDocument();
      expect(screen.getByText(mockVideoData.explanation)).toBeInTheDocument();
      expect(screen.getByTitle(mockVideoData.title)).toBeInTheDocument();
    });
  });
});
