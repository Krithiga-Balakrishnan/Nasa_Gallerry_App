import React from "react";
import HorizonbgImg from '../images/HorizonAstronomy.mp4';
import '../css/about.css'
import { Button, Container } from "react-bootstrap";


const About=({ setCurrentPage })=>{


    return(
        <div className="about">
            <div className="overlay"></div>
            <video src ={HorizonbgImg} autoPlay loop muted/>
            <div className="aboutCont">
                <Container style={{ textAlign: 'center' }}>
            <p style={{ fontFamily: 'Be Vietnam Pro', fontSize: '28px', textAlign: 'center', paddingBottom:'3rem', paddingTop:'3rem'}}>Welcome to GalaxyGaze! Our free source application provides a platform to embark on an extraordinary journey! Immerse yourself in the wonders of the cosmos as you discover captivating images and delve into fascinating insights from space exploration.</p>

            <Button variant="outline-primary" onClick={() => setCurrentPage('home')} >Discover</Button>
            </Container>
            </div>
        </div>
    );
}
export default About;