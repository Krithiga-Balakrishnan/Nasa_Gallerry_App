//import React, { useState, useEffect } from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import './css/Home.css';
import spacestarbgimg from './images/spacestarbgimg.jpg';
import GroupExample from './js/Card';

const Home = ({ setCurrentPage }) => {

  return (
    <div style={{ 
      backgroundImage: `url(${spacestarbgimg})`, 
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      minHeight: '100vh',
      minInlineSize:'-webkit-fill-available', 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
    }}>
      <div className="home">
        <Container>
        <Row className="justify-content-center">
        <Col xs={12} className="text-center">
          <h1 className="fw-bold">Discover Our APIs</h1>
        </Col>
      </Row>
      <GroupExample setCurrentPage={setCurrentPage} />
      </Container>
      </div>
    </div>
  );

};


export default Home;
