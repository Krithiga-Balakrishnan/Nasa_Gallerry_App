import React from "react";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

const CustCard = ({ apod }) => {
  return (
    <Card>
      <Card.Img variant="top" src={apod.url} alt={apod.title} />
      <Card.Body>
        <Card.Title>{apod.title}</Card.Title>
        <Card.Text>
          Date: {apod.date}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

const GroupExample = ({ apods }) => {
  return (
    <CardGroup>
      {apods.slice(0, 3).map((apod, index) => (
        <CustCard key={index} apod={apod} />
      ))}
    </CardGroup>
  );
};

export default GroupExample;
