
    import './css/ImageofDay.css';
    import React, { Component } from "react";
    import moment from "moment";

import DateInput from "./components/DateInput";
import Photo from "./components/Photo.js";

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
        fetch(`https://api.nasa.gov/planetary/apod?date=${formattedDate}&api_key=DEMO_KEY`)
          .then(response => response.json())
          .then(photoData => this.setState({ photo: photoData }))
          .catch(error => {
            console.error("Error fetching APOD:", error);
          });
      };

    render() {
        return (
            <div className='ImageOftheday'>
                <h1>NASA's Astronomy Picture of the Day</h1>
                <DateInput
                    changeDate={this.changeDate}
                    date={this.state.date}
                    viewPhoto={this.viewPhoto}
                />
                <Photo photo={this.state.photo} />
            </div>
        );
    }
}
export default ImageOftheDay;