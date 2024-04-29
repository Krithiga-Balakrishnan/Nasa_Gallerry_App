import React, { useState, useEffect } from "react";
import "./css/Image.css";
import { Container, Row, Col, Button, Accordion } from "react-bootstrap";

const Image = () => {
  const [apod, setApod] = useState({});
  const [showExplanation, setShowExplanation] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    async function fetchAndCacheAPIData() {
      const today = new Date().toDateString();
      const localKey = `NASA-${today}`;

      if (localStorage.getItem(localKey)) {
        const apiData = JSON.parse(localStorage.getItem(localKey));
        setApod(apiData);
        console.log("Fetched from cache today");
      } else {
        try {
          const url = `${process.env.REACT_APP_NASA_ENDPOINT}planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}`;
          const res = await fetch(url);
          const apiData = await res.json();
          localStorage.setItem(localKey, JSON.stringify(apiData));
          setApod(apiData);
          console.log("Fetched from API today");
        } catch (err) {
          console.log(err.message);
        }
      }
    }

    fetchAndCacheAPIData();
  }, []); // Empty dependency array ensures the effect runs only once after the initial render


  const toggleExplanation = () => {
    setShowExplanation(!showExplanation);
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className="imagecont">
      <Row className="justify-content-center mt-5">
        <Col xs={12} className="text-center">
          <h1 className="fw-bold">Astronomy Picture of the Day</h1>
        </Col>
      </Row>
      <Row>
      </Row>
      <div className="imagecont">
      <Row className="mt-4">
        <Col xs={12} md={6} className="order-md-1">
          <div className="imgContainer">
          {/* Render video if media type is video */}
          {apod && apod.media_type === 'video' ? (
                <iframe
                  src={apod.url}
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  title={apod.title}
                  className="bgVideo"
                ></iframe>
              ) : (
                // Render image if media type is not video
                apod && <img src={apod.url} alt="APOD" className="bgImage" style={{ maxWidth: "100%", height: "600px" }} />
              )}
            </div>
        </Col>
        <Col xs={12} md={6} className="order-md-2">
          <div className="explanationColumn">
            {apod && (
              <article className="apod-article">
                {showExplanation && (
                  <p className="explanation">{apod.explanation}</p>
                )}
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                    <h3>{apod.title}</h3>
                    </Accordion.Header>
                    <Accordion.Body>
                      <h4>{apod.date}</h4>
                    <p>{apod.explanation}</p>
                     
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </article>
            )}
            {showSidebar && (
              <div className="sidebar">
                <div className="bgOverlay"></div>
                <div className="sidebarContents">
                  <h2>{apod.title}</h2>
                  <div className="descriptionContainer">
                    <p className="descriptionTitle">{apod.title}</p>
                    <p>{apod.explanation}</p>
                  </div>
                  <Button onClick={toggleSidebar}>
                    <i className="fa-solid fa-arrow-right"></i>
                  </Button>
                </div>
              </div>
            )}
          </div>
        </Col>
      </Row>
      </div>
    </div>
  );
};

export default Image;
