    // import React, { Component } from "react";
    // import moment from "moment";

    // import DateInput from "./components/DateInput";
    // import Photo from "./components/Photo.js";
    // import HttpClient from "./HttpClient";

    // class ImageOftheDay extends Component {
    //     state = {
    //       date: moment(), // Initialize date state with the current date
    //       photo: ""
    //     };
      
    //     changeDate = date => {
    //       this.setState({ date });
    //       this.getPhoto(date);
    //     };
      
    //     componentDidMount() {
    //       this.getPhoto(this.state.date);
    //     }
      
    //     // getPhoto = date => {
    //     //     try {
    //     //       const formattedDate = moment(date).format("YYYY-MM-DD");
    //     //       HttpClient.getApod({ params: { date: formattedDate } })
    //     //         .then(response => {
    //     //           this.setState({ photo: response.data }); // Update the photo state with the fetched image
    //     //         })
    //     //         .catch(error => {
    //     //           console.error("Error fetching APOD:", error);
    //     //         });
    //     //     } catch (error) {
    //     //       console.error("Error formatting date:", error);
    //     //     }
    //     //   };

    //     getPhoto = date => {
    //         const formattedDate = moment(date).format("YYYY-MM-DD");
    //         HttpClient.getApod({ params: { date: formattedDate } })
    //           .then(response => {
    //             this.setState({ photo: response.data });
    //           })
    //           .catch(error => {
    //             console.error("Error fetching APOD:", error);
    //           });
    //       };
          
      
    //     // render() {
    //     //   return (
    //     //     <div>
    //     //       <h1>NASA's Astronomy Picture of the Day</h1>
    //     //       <DateInput
    //     //         changeDate={this.changeDate}
    //     //         date={this.state.date}
    //     //       />
    //     //       <Photo photo={this.state.photo} />
    //     //     </div>
    //     //   );
    //     // }
    //     render() {
    //         return (
    //           <div>
    //             <h1>NASA's Astronomy Picture of the Day</h1>
    //             <DateInput
    //               changeDate={this.changeDate}
    //             />
    //             <Photo photo={this.state.photo} />
    //           </div>
    //         );
    //       }
    //   }
      
    //   export default ImageOftheDay;

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

   getPhoto = date => {
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
            <div>
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