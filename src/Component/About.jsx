import React from "react"
import "./css/about.css"



const About = () => {
  return (
    <>
      <div className="bg-light">
        <div className="container py-5">
          <div className="row h-100 align-items-center py-5">
            <div className="col-lg-6">
              <h1 className="display-4">About us</h1>
              <p className="lead text-muted mb-0">Meet our QR Safety Tag! This handy sticker links your vehicle to your phone number, making things safer and easier. Stick it on your vehicle, and if there's an emergency, anyone can scan it to get in touch with you fast. It's like having a safety net on the road. Get one at our store today and drive with peace of mind, knowing help is just a scan away!</p>
              <p className="lead text-muted">Snippet by <a href="/" className="text-muted"> 
              <u>more</u>
              </a>
              </p>
            </div>
            <div className="col-lg-6 d-none d-lg-block"><img href="./img/car.png" alt="" className="img-fluid" /></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About