import React, { useState, useEffect } from "react";
import "./css/Image.css";
import { Container, Row, Col, Accordion } from "react-bootstrap";
const Image = () => {
  const [apod, setApod] = useState({});


  useEffect(() => {
    async function fetchAndCacheAPIData() {
      const today = new Date();
      const year = today.getFullYear();
      const month = String(today.getMonth() + 1).padStart(2, '0'); // Adding 1 to month since it is zero-based
      const day = String(today.getDate()).padStart(2, '0');
      const formattedDate = `${year}-${month}-${day}`;
  
      const localKey = `NASA-${formattedDate}`;
      const NASA_API_KEY = process.env.REACT_APP_NASA_API_KEY;
  
      if (localStorage.getItem(localKey)) {
        const apiData = JSON.parse(localStorage.getItem(localKey));
        setApod(apiData);
        console.log("Fetched from cache today:", apiData);
      } else {
        try {
          const url = `https://api.nasa.gov/planetary/apod?date=${formattedDate}&api_key=${NASA_API_KEY}`;
          const res = await fetch(url);
          const apiData = await res.json();
          localStorage.setItem(localKey, JSON.stringify(apiData));
          setApod(apiData);
          console.log("Fetched from API today:", apiData);
        } catch (err) {
          console.log(err.message);
        }
      }
    }
  
    fetchAndCacheAPIData();
  }, []);
  



  return (
    <div className="imagecont">
    <Container>
      <Row className="justify-content-center mt-5">
        <Col xs={12} className="text-center">
          <h1 className="fw-bold">Astronomy Picture of the Day</h1>
        </Col>
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
                apod && <img src={apod.url} alt="APOD" className="bgImage" style={{ maxWidth: "100%", height: "700px" }} />
              )}
            </div>
          </Col>
          <Col xs={12} md={6} className="order-md-2">
            <div className="explanationColumn">
              {apod && (
                <article className="apod-article">
                  <Accordion defaultActiveKey="0" className="custom-accordion">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>{apod.title}</Accordion.Header>
                      <Accordion.Body>
                        <h4>{apod.date}</h4>
                        <p>{apod.explanation}</p>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </article>
              )}
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  </div>
);
};

export default Image;
