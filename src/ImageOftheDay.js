
    import './css/ImageofDay.css';
    import React, { Component } from "react";
    import moment from "moment";
    import DateInput from "./components/DateInput";
    import { Row, Col, InputGroup, Container } from "react-bootstrap";



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
    <Container>
    <Row className="justify-content-center mt-5">
        <Col xs={12} className="text-center">
          <h1 className="fw-bold">NASA's Astronomy Picture of the Day</h1>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col xs={4} md={4}>
          <p>Select Date</p>
        </Col>
        <Col xs={6} md={4}>
            <DateInput
                changeDate={this.changeDate}
                date={this.state.date}
                viewPhoto={this.viewPhoto}
            />
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
     
        <h2 className="mt-4">{this.state.photo.title}</h2>
        <p className="fs-6"> {this.state.photo.date}</p>
        <p>{this.state.photo.explanation}</p>
      </div>
    </Col>
  </Row>
  </Container>
  </div>
  
);
}
}
export default ImageOftheDay;