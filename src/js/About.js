import React from "react";
import HorizonbgImg from '../images/HorizonAstronomy.mp4';
import '../css/about.css'
import { Button } from "react-bootstrap";

const About=()=>{

    return(
        <div className="about">
            <div className="overlay"></div>
            <video src ={HorizonbgImg} autoPlay loop muted/>
            <div className="aboutCont">
                <p>Hello World</p>
                <Button variant="outline-success">Search</Button>
            </div>
        </div>
    );
}
export default About;