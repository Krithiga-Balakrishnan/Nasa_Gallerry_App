import React, { useState } from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import '../css/card.css';


const CustCard = ({ apod, setCurrentPage }) => {
  const [showOptions, setShowOptions] = useState(false);

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const handleListItemClick = (page) => {
    setCurrentPage(page.toLowerCase().replace(/\s+/g, '-')); // Update currentPage directly
    setShowOptions(false);
  };

  return (
    <div className="col-md-6 mb-1" onMouseLeave={() => setShowOptions(false)}>
      <Card onClick={toggleOptions}>
        <Card.Img
          variant="top"
          src={apod.url}
          alt={apod.title}
          style={{ height: '455px', objectFit: 'cover' }}
        />
        <Card.Body className="d-flex align-items-center justify-content-center flex-column">
          <Card.Title className="cardtitle" >{apod.title}</Card.Title>
        </Card.Body>
        {showOptions && (
          <ListGroup variant="flush">
            {apod.listItems.map((item, index) => (
              <ListGroup.Item key={index} onClick={() => handleListItemClick(item)}>
                {item}
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Card>
    </div>
  );
};

const GroupExample = ({ setCurrentPage }) => {
  const apods = [
    {
      title: "APOD Image",
      url: "https://apod.nasa.gov/apod/image/1305/godafoss1600vetter.jpg",
      listItems: ["Picture of the Day", "Picture of a certain day", "Interesting information"],
    },
    {
      title: "Mars Rover Image",
      url: "https://i.tmgrup.com.tr/anews/v1/2023/04/11/nasa-shares-highest-resolution-image-of-mars-ever-1681206953344.jpg",
      listItems: ["Mars rover images", "Rover data", "Martian landscape"],
    },
    // Add more apods here with different titles, URLs, and list items
  ];

  return (
    <div className="row">
      {apods.map((apod, index) => (
        <CustCard key={index} apod={apod} setCurrentPage={setCurrentPage} />
      ))}
    </div>
  );
};


export { CustCard, GroupExample };
export default GroupExample;

