
    import './css/ImageofDay.css';
    import React, { Component } from "react";
    import moment from "moment";
    import DateInput from "./components/DateInput";
    import Photo from "./components/Photo.js";
    import Form from 'react-bootstrap/Form';
    import { Container, Row, Col, InputGroup } from "react-bootstrap";



    class ImageOftheDay extends Component {
        state = {
            date: moment(), // Initialize date state with the current date
            photo: ""
          };
        
          changeDate = date => {
            this.setState({ date });
            this.getPhoto(date);
          };
        
          getPhoto = (date) => {
            const formattedDate = moment(date).format("YYYY-MM-DD");
            const NASA_API_KEY = process.env.REACT_APP_NASA_API_KEY; // Moved API key declaration here
            fetch(`https://api.nasa.gov/planetary/apod?date=${formattedDate}&api_key=${NASA_API_KEY}`)
              .then(response => response.json())
              .then(photoData => this.setState({ photo: photoData }))
              .catch(error => {
                console.error("Error fetching APOD:", error);
              });
          };
      
        render() {
                  const { photo } = this.state;

return (
    <div className='ImageOftheday'> {/* Use a div with custom class */}
      <Row className="justify-content-center mt-5">
        <Col xs={12} className="text-center">
          <h1 className="fw-bold">NASA's Astronomy Picture of the Day</h1>
        </Col>
      </Row>
      <Row className="mt-4">
    <Col xs={12} md={7} className="order-md-1"> {/* Image Column */}
    {photo && photo.media_type === 'video' ? (
              <iframe
                title={photo.title}
                width="100%"
                height="600"
                src={photo.url}
                frameBorder="0"
                allowFullScreen
              ></iframe>
            ) : (
              // Render image if media type is not video
              photo && <img src={photo.url} alt={photo.title} style={{ width: '100%', height: '600px' }} />
            )}
    </Col>
    <Col xs={12} md={5} className="order-md-2"> {/* Explanation Column */}
      <div className="d-flex flex-column justify-content-start align-items-start">
      <InputGroup className="mt-4">
            <InputGroup.Text>Select Date</InputGroup.Text>
            <DateInput
                changeDate={this.changeDate}
                date={this.state.date}
                viewPhoto={this.viewPhoto}
            />
          </InputGroup>
        <h2 className="mt-4">{this.state.photo.title}</h2>
        <p className="fs-6"> {this.state.photo.date}</p>
        <p>{this.state.photo.explanation}</p>
      </div>
    </Col>
  </Row>

  </div>
  
);
}
}
export default ImageOftheDay;