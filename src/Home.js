//import React, { useState, useEffect } from 'react';
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
      <GroupExample setCurrentPage={setCurrentPage} />
      </div>
    </div>
  );

};


export default Home;
