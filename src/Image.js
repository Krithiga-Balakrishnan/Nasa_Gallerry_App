import React, { useState, useEffect } from "react";
import HttpClient from "./HttpClient";
import "./css/Image.css";

const Image = () => {
  const [apod, setApod] = useState({});
  const [showExplanation, setShowExplanation] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);


  // useEffect(() => {
  //   HttpClient.getApod().then((apodData) => {
  //     setApod(apodData.data);
  //   });
  // }, []);
  useEffect(() => {
    async function fetchAndCacheAPIData() {
      const today = (new Date()).toDateString();
      const localKey = `NASA-${today}`;
  
      if (localStorage.getItem(localKey)) {
        const apiData = JSON.parse(localStorage.getItem(localKey));
        setApod(apiData);
        console.log('Fetched from cache today');
      } else {
        try {
          const url = `${process.env.REACT_APP_NASA_ENDPOINT}planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}`;
          const res = await fetch(url);
          const apiData = await res.json();
          localStorage.setItem(localKey, JSON.stringify(apiData));
          setApod(apiData);
          console.log('Fetched from API today');
        } catch (err) {
          console.log(err.message);
        }
      }
    }
  
    fetchAndCacheAPIData();
  }, []);
  

  const toggleExplanation = () => {
    setShowExplanation(!showExplanation);
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className="imgContainer">
      <h1 className="title">Astronomy Picture of the Day</h1>
      <img src={apod.url} alt="APOD" className="bgImage" />

      {apod && (
        <article className="apod-article">
          {showExplanation && <p className="explanation">{apod.explanation}</p>}
          <footer>
            <div>
              <h1>{apod.title}</h1>
              <h2>{apod.date}</h2>
            </div>
            <button onClick={() => {toggleExplanation(); toggleSidebar();}}>
  <i className="fa-solid fa-circle-info"></i>
</button>
          </footer>
        </article>
      )}
      {showSidebar && (
        <div className="sidebar">
          <div className="bgOverlay"></div>
          <div className="sidebarContents">
            <h2>{apod.title}</h2>
            <div className="descriptionContainer">
              <p className="descriptionTitle">{apod.title}</p>
              <p className="dateTitle">{apod.date}</p>
              <p>{apod.explanation}</p>
            </div>
            <button onClick={toggleSidebar}>
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Image;
