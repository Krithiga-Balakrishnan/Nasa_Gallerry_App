import './css/MarsRover.css';
import React, { Component } from "react";
import moment from "moment";

import DateInput from "./components/DateInput";
import Photo from "./components/Photo.js";
import HttpClient from "./HttpClient";
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
    return (

      <div>
        <h1>NASA's Mars Rover Photos</h1>
        <div>
          <DateInput
            id="datePicker"
            changeDate={this.changeDate}
            date={this.state.date}
          />
        </div>
        <div>
          <label htmlFor="cameraSelect">Select Camera: </label>
          <select id="cameraSelect" onChange={this.changeCamera} value={this.state.camera}>
            <option value="">Select</option>
            <option value="FHAZ">Front Hazard Avoidance Camera</option>
            <option value="RHAZ">Rear Hazard Avoidance Camera</option>
            <option value="MAST">Mast Camera</option>
            <option value="CHEMCAM">Chemistry and Camera Complex</option>
            <option value="MAHLI">Mars Hand Lens Imager</option>
            <option value="MARDI">Mars Descent Imager</option>
          </select>
        </div>
        <div className="photo-grid">
          {photos && photos.length > 0 ? (
            photos.map(photo => (
              <Photo key={photo.id} photo={photo} />
            ))
          ) : (
            <p>No photos available for selected date and camera.</p>
          )}
        </div>
      </div>

    );
  }
}

export default MarsRover;
