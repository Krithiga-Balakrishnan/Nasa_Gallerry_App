import './css/MarsRover.css';
import React, { Component } from "react";
import moment from "moment";
import { Row, Col, Button, InputGroup, Form } from "react-bootstrap";
import DateInput from "./components/DateInput";
import HttpClient from "./HttpClient";
import ControlledCarousel from "./components/ControlledCarousel";


class MarsRover extends Component {
  state = {
    date: moment(), // Initialize date state with the current date
    camera: "", // Selected camera
    photos: [] // Initialize photos array
  };

  changeDate = date => {
    this.setState({ date });
    this.getMarsPhotos(date, this.state.camera); // Fetch photos when date changes
  };

  changeCamera = event => {
    const camera = event.target.value;
    this.setState({ camera });
    this.getMarsPhotos(this.state.date, camera); // Fetch photos when camera changes
  };

  getMarsPhotos = (date, camera) => {
    const formattedDate = moment(date).format("YYYY-MM-DD");
    const apiUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${formattedDate}&camera=${camera}&api_key=${process.env.REACT_APP_NASA_API_KEY}`;

    console.log("Requesting photos from Mars Rover with URL:", apiUrl);

    HttpClient.getMarsPhoto(date, camera)
      .then(photoData => this.setState({ photos: photoData.photos }))
      .catch(error => {
        console.error("Error fetching photos from Mars Rover:", error);
        this.setState({ photos: [] });
      });
  };

  render() {
    const { photos } = this.state; // Destructure photos from state

  // Group photos into sets of 3

    return (
      <div className='MarsroverContent'>
        <Row className="justify-content-center mt-3">
          <Col xs={12} className="text-center">
            <h1 className="fw-bold">NASA's Mars Rover Photos</h1>
          </Col>
        </Row>
        <Row className="justify-content-between mt-3">
          <Col xs={2}></Col>
          <Col xs={12} sm={4} className="text-center">
          <InputGroup>
           <p>Select Date</p>
              <DateInput
                id="datePicker"
                changeDate={this.changeDate}
                date={this.state.date}
              />
            </InputGroup>
          </Col>
          <Col xs={3}>
            <Form.Select
            aria-label="Select camera"
            onChange={this.changeCamera}
           value={this.state.camera}
            style={{ width: '20%!important', flex: 'none!important' }}
            >
              <option>Select Rover Camera</option>
              <option value="fhaz">Front Hazard Avoidance Camera</option>
              <option value="rhaz">Rear Hazard Avoidance Camera</option>
              <option value="mast">Mast Camera</option>
              <option value="chemcam">Chemistry and Camera Complex</option>
              <option value="mahli">Mars Hand Lens Imager</option>
              <option value="mardi">Mars Descent Imager</option>
              <option value="navcam">Navigation Camera</option>
              <option value="pancam">Panoramic Camera</option>
              <option value="minites">Miniature Thermal Emission Spectrometer (Mini-TES)</option>
            </Form.Select>
          </Col>
          <Col xs={3}>
          <Button onClick={() => this.getMarsPhotos(this.state.date, this.state.camera)}>Fetch Images</Button>
          </Col>
        </Row>
        <div className="photo-grid">
        {photos && photos.length > 0 ? (
            <ControlledCarousel photos={photos} />
            ) : (
            <p>No photos available for selected date and camera.</p>
          )}
        </div>
      </div>
    );
  }
}

export default MarsRover;
