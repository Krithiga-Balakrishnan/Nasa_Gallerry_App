import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Photo from './Photo';

const ControlledCarousel = ({ photos }) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {photos.map((photo, index) => (
        <Carousel.Item key={index}>
          <div className="d-flex justify-content-center">
            <div style={{ flex: '0 0 30%' }}>
              <Photo photo={photo} />
            </div>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ControlledCarousel;
