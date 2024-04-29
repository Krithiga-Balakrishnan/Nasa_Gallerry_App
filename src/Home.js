import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import axios
import './css/Home.css';
import spacestarbgimg from './images/spacestarbgimg.jpg';
import GroupExample from './js/Card';

const Home = () => {
    const [randomImages, setRandomImages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRandomImages = async () => {
      setIsLoading(true);
      try {
        const response = await getApod({ count: 12 });
        setRandomImages(response || []); // Check if response is falsy and fallback to empty array
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };

    fetchRandomImages();
  }, []);


  return (
    <div style={{ 
      backgroundImage: `url(${spacestarbgimg})`, // Apply the background image
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    }}>
   <div className="home">
        {isLoading && <span className="loader">LOADING...</span>}
        {error && <span className="error">{error}</span>}
        <GroupExample apods={randomImages} /> {/* Render GroupExample */}
      </div>
    </div>
  );
};

// Function to fetch APOD using axios with secure API key
const getApod = async (params) => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_NASA_ENDPOINT}planetary/apod`, { params });
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch APOD');
  }
};

export default Home;
