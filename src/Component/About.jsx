import React from "react"
import "./css/about.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


// Import the image
// Import the image
// import ellipseImage from './img/Ellipse2.png';

// Add the image to the component
const About = () => {
  useEffect(()=>{
    AOS.init({duration: 2000});
  },[]);
  return (
    <>
      <div className="bg-light" id="about">
        <div className="container py-5">
          <div className="row h-100 align-items-center py-5">
            <div className="col-lg-6 about-content">
              <h1 className="display-4" data-aos = "fade-right" >About us</h1>
              <p className="lead text-muted mb-0" data-aos = "fade-up" >
                Meet our QR Safety Tag! This handy sticker links your vehicle
                to your phone number, making things safer and easier. Stick it
                on your vehicle, and if there's an emergency, anyone can scan it
                to get in touch with you fast. It's like having a safety net on
                the road. Get one at our store today and drive with peace of
                mind, knowing help is just a scan away!
              </p>
              {/* <p className="lead text-muted">
                Snippet by <a href="/" className="text-muted">
                  <u>more</u>
                </a>
              </p> */}
            </div>
            <div className="col-lg-6">
              <img className="about-img" data-aos = "zoom-in" src={require("./img/Ellipse2.png")} alt="" />
              </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;